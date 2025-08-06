import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, FileText, GraduationCap, Settings, User } from "lucide-react"

export default function TasksPage() {
  // Mock data - in real app, this would come from Supabase
  const tasks = [
    {
      id: 1,
      title: "Complete Employee Profile",
      description: "Fill out your personal information and emergency contacts",
      category: "documentation",
      status: "completed",
      dueDate: "2024-01-15",
      completedAt: "2024-01-10",
      icon: User,
    },
    {
      id: 2,
      title: "Setup Slack Account",
      description: "Configure your Slack workspace and join relevant channels",
      category: "account_setup",
      status: "completed",
      dueDate: "2024-01-12",
      completedAt: "2024-01-11",
      icon: Settings,
    },
    {
      id: 3,
      title: "Configure Gmail Account",
      description: "Set up your company email and calendar",
      category: "account_setup",
      status: "in_progress",
      dueDate: "2024-01-18",
      icon: Settings,
    },
    {
      id: 4,
      title: "Setup Razorpay Account",
      description: "Configure your payment and expense management account",
      category: "account_setup",
      status: "pending",
      dueDate: "2024-01-20",
      icon: Settings,
    },
    {
      id: 5,
      title: "Review HR Policies",
      description: "Read and acknowledge company HR policies and procedures",
      category: "policy_review",
      status: "completed",
      dueDate: "2024-01-14",
      completedAt: "2024-01-13",
      icon: FileText,
    },
    {
      id: 6,
      title: "Complete Safety Training",
      description: "Watch safety videos and complete the assessment",
      category: "training",
      status: "pending",
      dueDate: "2024-01-25",
      icon: GraduationCap,
    },
    {
      id: 7,
      title: "IT Security Training",
      description: "Learn about cybersecurity best practices",
      category: "training",
      status: "pending",
      dueDate: "2024-01-22",
      icon: GraduationCap,
    },
    {
      id: 8,
      title: "Submit Tax Documents",
      description: "Provide required tax documentation for payroll",
      category: "documentation",
      status: "pending",
      dueDate: "2024-01-30",
      icon: FileText,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in_progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in_progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-gray-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const completedTasks = tasks.filter(task => task.status === "completed")
  const inProgressTasks = tasks.filter(task => task.status === "in_progress")
  const pendingTasks = tasks.filter(task => task.status === "pending")

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tasks</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Manage and complete your onboarding tasks below.
        </p>
      </div>

      {/* Progress Summary */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{completedTasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{inProgressTasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{pendingTasks.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:grid sm:grid-cols-4 sm:gap-0">
            <TabsTrigger value="all" className="text-xs sm:text-sm">All ({tasks.length})</TabsTrigger>
            <TabsTrigger value="pending" className="text-xs sm:text-sm">Pending ({pendingTasks.length})</TabsTrigger>
            <TabsTrigger value="in-progress" className="text-xs sm:text-sm">In Progress ({inProgressTasks.length})</TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm">Completed ({completedTasks.length})</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {tasks.map((task) => {
              const Icon = task.icon
              return (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{task.title}</h3>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                            {task.completedAt && (
                              <span>Completed: {new Date(task.completedAt).toLocaleDateString()}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(task.status)}
                        {task.status === "pending" && (
                          <Button size="sm">Start</Button>
                        )}
                        {task.status === "in_progress" && (
                          <Button size="sm" variant="outline">Continue</Button>
                        )}
                        {task.status === "completed" && (
                          <Button size="sm" variant="ghost" disabled>Completed</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4">
            {pendingTasks.map((task) => {
              const Icon = task.icon
              return (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{task.title}</h3>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <div className="text-xs text-muted-foreground">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Button size="sm">Start</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <div className="grid gap-4">
            {inProgressTasks.map((task) => {
              const Icon = task.icon
              return (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{task.title}</h3>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <div className="text-xs text-muted-foreground">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4">
            {completedTasks.map((task) => {
              const Icon = task.icon
              return (
                <Card key={task.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{task.title}</h3>
                            <Badge className={getStatusColor(task.status)}>
                              {task.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <div className="text-xs text-muted-foreground">
                            Completed: {new Date(task.completedAt!).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" disabled>Completed</Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 