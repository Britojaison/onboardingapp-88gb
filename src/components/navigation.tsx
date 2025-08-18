"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink, 
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { 
  BookOpen, 
  Calendar,
  FileText, 
  GraduationCap, 
  Home, 
  Image as ImageIcon, 
  Building2,
  Menu
} from "lucide-react"
import { useState } from "react"
import Logo3D from "@/components/3d-logo"

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Tasks & Procedures",
    href: "/tasks",
    icon: GraduationCap,
  },
  {
    title: "Company Policies",
    href: "/policies",
    icon: FileText,
  },
  {
    title: "Holidays & Timings",
    href: "/holidays",
    icon: Calendar,
  },
  {
    title: "Office Information",
    href: "/office",
    icon: Building2,
  },
  {
    title: "Tutorials",
    href: "/tutorials",
    icon: BookOpen,
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: ImageIcon,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Desktop: Employee Portal, Mobile/Tablet: 88GB Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="hidden lg:flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Employee Portal</span>
              </div>
              <div className="lg:hidden">
                <Logo3D 
                  width={75} 
                  height={75} 
                  className="h-18 w-18 mt-6"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        pathname === item.href && "bg-accent text-accent-foreground"
                      )}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            {/* Desktop: 88GB Logo on the right */}
            <div className="hidden lg:flex items-center">
              <Logo3D 
                width={75} 
                height={75} 
                className="h-18 w-18 mt-6"
              />
            </div>

            {/* Mobile/Tablet Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <div className="flex items-center justify-center py-4">
                    <Logo3D 
                      width={90} 
                      height={90} 
                      className="h-22 w-22"
                    />
                  </div>
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 