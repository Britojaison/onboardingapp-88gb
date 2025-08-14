import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, GraduationCap, Settings, User, Shield, Calendar, Building2, Users } from "lucide-react"

export default function TasksPage() {
  // Mock data - in real app, this would come from Supabase
  const tasks = [
    {
      id: 1,
      title: "Slack Account Setup",
      description: "Configure your Slack workspace and join relevant channels",
      category: "account_setup",
      icon: Settings,
    },
    {
      id: 2,
      title: "Gmail Account Configuration",
      description: "Set up your company email and calendar",
      category: "account_setup",
      icon: Settings,
    },
    {
      id: 3,
      title: "Razorpay Account Setup",
      description: "Configure your payment and expense management account",
      category: "account_setup",
      icon: Settings,
    },
    {
      id: 4,
      title: "HR Policies Review",
      description: "Read and acknowledge company HR policies and procedures",
      category: "policy_review",
      icon: FileText,
    },
    {
      id: 5,
      title: "Safety Training",
      description: "Watch safety videos and complete the assessment",
      category: "training",
      icon: Shield,
    },
    {
      id: 6,
      title: "IT Security Training",
      description: "Learn about cybersecurity best practices",
      category: "training",
      icon: Shield,
    },
    {
      id: 7,
      title: "Tax Documentation",
      description: "Provide required tax documentation for payroll",
      category: "documentation",
      icon: FileText,
    },
    {
      id: 8,
      title: "Office Tour",
      description: "Familiarize yourself with office facilities and emergency exits",
      category: "orientation",
      icon: Building2,
    },
    {
        id: 9,
      title: "Team Introduction",
      description: "Meet your team members and understand team structure",
      category: "orientation",
      icon: Users,
    },
  ]

  const categories = [
    { id: "all", name: "All Procedures", count: tasks.length },
    { id: "account_setup", name: "Account Setup", count: tasks.filter(t => t.category === "account_setup").length },
    { id: "documentation", name: "Documentation", count: tasks.filter(t => t.category === "documentation").length },
    { id: "training", name: "Training", count: tasks.filter(t => t.category === "training").length },
    { id: "policy_review", name: "Policy Review", count: tasks.filter(t => t.category === "policy_review").length },
    { id: "orientation", name: "Orientation", count: tasks.filter(t => t.category === "orientation").length },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "account_setup":
        return "bg-blue-100 text-blue-800"
      case "documentation":
        return "bg-green-100 text-green-800"
      case "training":
        return "bg-purple-100 text-purple-800"
      case "policy_review":
        return "bg-orange-100 text-orange-800"
      case "orientation":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "account_setup":
        return Settings
      case "documentation":
        return FileText
      case "training":
        return Shield
      case "policy_review":
        return FileText
      case "orientation":
        return Building2
      default:
        return FileText
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tasks & Procedures</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Access company procedures, guidelines, and setup instructions below.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium">Total Procedures</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium">Account Setup</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{tasks.filter(t => t.category === "account_setup").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium">Training</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{tasks.filter(t => t.category === "training").length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks by Category */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-3 sm:grid sm:grid-cols-6 sm:gap-0">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="grid gap-6">
              {tasks
                .filter(task => category.id === "all" || task.category === category.id)
                .map((task) => {
                  const Icon = task.icon
                  const CategoryIcon = getCategoryIcon(task.category)
                  return (
                    <Card key={task.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1 min-w-0">
                            <div className="mt-1 flex-shrink-0">
                              <Icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="space-y-2 flex-1 min-w-0">
                              <div className="flex items-center space-x-3">
                                <h3 className="font-semibold">{task.title}</h3>
                                <Badge className={getCategoryColor(task.category)}>
                                  {task.category.replace("_", " ")}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{task.description}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <Button size="sm">Start</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 