import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Building2,
  TrendingUp,
  CircleCheckBig,
  Clock
} from "lucide-react"

const quickActions = [
  {
    title: "Continue Onboarding",
    description: "Complete your remaining tasks",
    icon: GraduationCap,
    href: "/tasks",
    color: "bg-blue-500"
  },
  {
    title: "Review Policies",
    description: "Read company policies and guidelines",
    icon: FileText,
    href: "/policies",
    color: "bg-green-500"
  },
  {
    title: "Setup Accounts",
    description: "Configure Slack, Gmail, and other tools",
    icon: BookOpen,
    href: "/tutorials",
    color: "bg-purple-500"
  },
  {
    title: "Office Information",
    description: "View office timings and location",
    icon: Building2,
    href: "/office",
    color: "bg-orange-500"
  }
]

const recentActivities = [
  {
    title: "Completed Slack setup tutorial",
    time: "2 hours ago",
    status: "completed"
  },
  {
    title: "Reviewed HR policies",
    time: "1 day ago",
    status: "completed"
  },
  {
    title: "Started Gmail configuration",
    time: "2 days ago",
    status: "in-progress"
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

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Brito!</h1>
        <p className="text-muted-foreground">
          Continue your onboarding journey and get familiar with the company.
        </p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <CardTitle>Onboarding Progress</CardTitle>
          </div>
          <CardDescription>You&apos;re making great progress! Keep it up.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">65%</span>
          </div>
          <Progress value={65} className="w-full" />
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CircleCheckBig className="h-4 w-4 text-green-500" />
              <span>13 completed</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>7 remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Card key={action.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription className="mt-2">{action.description}</CardDescription>
                <Button asChild className="mt-4 w-full">
                  <a href={action.href}>Get Started</a>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activities & Upcoming Holidays */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest onboarding activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-500' : 
                  activity.status === 'in-progress' ? 'bg-blue-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
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
