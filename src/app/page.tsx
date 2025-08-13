import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Building2,
  Calendar,
  Image,
  Clock,
  Users
} from "lucide-react"

const quickActions = [
  {
    title: "Company Policies",
    description: "Access company policies, guidelines, and procedures",
    icon: FileText,
    href: "/policies",
    color: "bg-green-500"
  },
  {
    title: "Office Information",
    description: "View office timings, location, and facilities",
    icon: Building2,
    href: "/office",
    color: "bg-blue-500"
  },
  {
    title: "Holidays & Timings",
    description: "Check company holidays and working hours",
    icon: Calendar,
    href: "/holidays",
    color: "bg-orange-500"
  },
  {
    title: "Tutorials & Guides",
    description: "Learn about tools, processes, and best practices",
    icon: BookOpen,
    href: "/tutorials",
    color: "bg-purple-500"
  }
]

const additionalResources = [
  {
    title: "Tasks & Procedures",
    description: "Standard operating procedures and task guidelines",
    icon: GraduationCap,
    href: "/tasks",
    color: "bg-indigo-500"
  },
  {
    title: "Company Gallery",
    description: "Photos and media from company events and activities",
    icon: Image,
    href: "/gallery",
    color: "bg-pink-500"
  }
]

const upcomingHolidays = [
  {
    name: "New Year's Day",
    date: "Monday, January 1, 2024",
    type: "Holiday"
  },
  {
    name: "Republic Day",
    date: "Friday, January 26, 2024",
    type: "Holiday"
  }
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Employee Portal</h1>
        <p className="text-muted-foreground">
          Welcome to your central hub for company information, policies, and resources.
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Card key={action.title} className="hover:shadow-md transition-shadow flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{action.description}</CardDescription>
                <Button asChild className="mt-4 w-full mt-auto">
                  <a href={action.href}>Access</a>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Additional Resources */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {additionalResources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.title} className="hover:shadow-md transition-shadow flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg ${resource.color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{resource.description}</CardDescription>
                <Button asChild className="mt-4 w-full mt-auto">
                  <a href={resource.href}>View</a>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Company Information */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Company Overview</CardTitle>
            <CardDescription>Essential information about our organization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Employee-focused company culture</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Standard business hours: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Modern office facilities with collaborative spaces</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Holidays</CardTitle>
            <CardDescription>Plan your time accordingly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingHolidays.map((holiday, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{holiday.name}</p>
                  <p className="text-xs text-muted-foreground">{holiday.date}</p>
                </div>
                <Badge variant="secondary">{holiday.type}</Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
              <a href="/holidays">View All Holidays</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
