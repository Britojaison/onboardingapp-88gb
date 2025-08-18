"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Mesh, Object3D } from 'three'

// 3D Logo Mesh Component
function LogoMesh({ modelPath }: { modelPath: string }) {
  const meshRef = useRef<Mesh>(null)
  const [model, setModel] = useState<Object3D | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load the 3D model
  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        setModel(gltf.scene)
        setError(null)
      },
      () => {
        // Loading progress - parameter removed as unused
      },
      (error) => {
        console.error('Error loading 3D model:', error)
        setError('Failed to load 3D model')
      }
    )
  }, [modelPath])

  // Rotate the logo continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5 // Smooth rotation
    }
  })

  if (error) {
    // Fallback to text logo if 3D model fails
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 0.5, 0.2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    )
  }

  if (!model) {
    // Loading state - simple box
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 0.3]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
    )
  }

  // Clone the model and attach it to the ref
  const clonedModel = model.clone()
  
  return (
    <primitive 
      ref={meshRef} 
      object={clonedModel} 
      scale={[1, 1, 1]} 
      position={[0, 0, 0]}
    />
  )
}

// Main 3D Logo Component
interface Logo3DProps {
  width?: number
  height?: number
  modelPath?: string
  className?: string
}

export default function Logo3D({ 
  width = 40, 
  height = 40, 
  modelPath = '/models/88gb-logo.glb',
  className = ''
}: Logo3DProps) {
  const [use3D, setUse3D] = useState(true)

  // Fall back to text logo if 3D fails
  if (!use3D) {
    return <Logo3DText width={width} height={height} className={className} />
  }

  return (
    <div 
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 3], 
          fov: 50 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        onError={() => setUse3D(false)}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[2, 2, 1]} 
          intensity={0.8}
          castShadow
        />
        <pointLight 
          position={[-2, 1, 2]} 
          intensity={0.4} 
        />
        
        {/* 3D Logo */}
        <LogoMesh modelPath={modelPath} />
      </Canvas>
    </div>
  )
}

// Alternative Text-based 3D Logo (fallback)
export function Logo3DText({ 
  width = 40, 
  height = 40, 
  className = ''
}: Omit<Logo3DProps, 'modelPath'>) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <div 
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 4], 
          fov: 50 
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 1]} intensity={0.8} />
        
        <group ref={meshRef}>
          {/* "88" */}
          <mesh position={[-0.8, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.2]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.2]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
          
          {/* "GB" */}
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.2]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
          <mesh position={[0.8, 0, 0]}>
            <boxGeometry args={[0.3, 1.2, 0.2]} />
            <meshStandardMaterial color="#10b981" />
          </mesh>
          
          {/* Background circle */}
          <mesh position={[0, 0, -0.3]}>
            <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
            <meshStandardMaterial color="#f3f4f6" transparent opacity={0.8} />
          </mesh>
        </group>
      </Canvas>
    </div>
  )
}
