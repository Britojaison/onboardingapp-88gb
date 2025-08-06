import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Employee {
  id: string
  email: string
  name: string
  department: string
  position: string
  hire_date: string
  onboarding_status: 'pending' | 'in_progress' | 'completed'
  created_at: string
  updated_at: string
}

export interface OnboardingTask {
  id: string
  employee_id: string
  task_type: 'policy_review' | 'account_setup' | 'training' | 'documentation'
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
  due_date: string
  completed_at?: string
  created_at: string
}

export interface CompanyPolicy {
  id: string
  title: string
  content: string
  category: 'general' | 'hr' | 'it' | 'finance' | 'safety'
  version: string
  effective_date: string
  created_at: string
}

export interface Holiday {
  id: string
  name: string
  date: string
  description: string
  is_floating: boolean
  created_at: string
} 