import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  Search, 
  Play, 
  Clock, 
  Star, 
  CheckCircle,
  MessageSquare,
  Mail,
  CreditCard,
  Settings,
  Users,
  Shield,
  Zap
} from "lucide-react"

export default function TutorialsPage() {
  // Mock data - in real app, this would come from Sanity
  const tutorials = [
    {
      id: 1,
      title: "Setting Up Your Slack Account",
      description: "Complete guide to configure your Slack workspace and join relevant channels",
      category: "slack",
      difficulty: "beginner",
      estimatedTime: 15,
      steps: [
        "Download Slack from the official website",
        "Sign in with your company email",
        "Join the main company workspace",
        "Set up your profile with photo and status",
        "Join department-specific channels",
        "Configure notifications and preferences"
      ],
      icon: MessageSquare,
      isFeatured: true,
      completed: false
    },
    {
      id: 2,
      title: "Configuring Gmail for Work",
      description: "Set up your company Gmail account and calendar integration",
      category: "gmail",
      difficulty: "beginner",
      estimatedTime: 20,
      steps: [
        "Access your company Gmail account",
        "Set up email signature with company branding",
        "Configure calendar settings and working hours",
        "Set up email filters and labels",
        "Install Gmail mobile app",
        "Configure out-of-office messages"
      ],
      icon: Mail,
      isFeatured: true,
      completed: false
    },
    {
      id: 3,
      title: "Razorpay Account Setup",
      description: "Configure your Razorpay account for expense management and reimbursements",
      category: "razorpay",
      difficulty: "intermediate",
      estimatedTime: 25,
      steps: [
        "Create your Razorpay account",
        "Verify your identity and bank details",
        "Set up expense categories",
        "Configure approval workflows",
        "Install mobile app for receipts",
        "Set up automatic expense tracking"
      ],
      icon: CreditCard,
      isFeatured: false,
      completed: false
    },
    {
      id: 4,
      title: "IT Security Best Practices",
      description: "Learn essential cybersecurity practices for protecting company data",
      category: "general",
      difficulty: "intermediate",
      estimatedTime: 30,
      steps: [
        "Set up two-factor authentication",
        "Create strong, unique passwords",
        "Learn about phishing awareness",
        "Understand data classification",
        "Set up secure file sharing",
        "Configure device encryption"
      ],
      icon: Shield,
      isFeatured: true,
      completed: false
    },
    {
      id: 5,
      title: "Team Communication Guidelines",
      description: "Best practices for effective communication within the team",
      category: "general",
      difficulty: "beginner",
      estimatedTime: 10,
      steps: [
        "Understand communication channels",
        "Learn meeting etiquette",
        "Set up status updates",
        "Configure availability settings",
        "Practice active listening",
        "Use appropriate communication tools"
      ],
      icon: Users,
      isFeatured: false,
      completed: false
    },
    {
      id: 6,
      title: "Advanced Slack Features",
      description: "Master advanced Slack features for better productivity",
      category: "slack",
      difficulty: "advanced",
      estimatedTime: 35,
      steps: [
        "Set up Slack integrations",
        "Create custom workflows",
        "Use Slack shortcuts and commands",
        "Configure advanced notifications",
        "Set up Slack calls and screen sharing",
        "Create and manage Slack apps"
      ],
      icon: MessageSquare,
      isFeatured: false,
      completed: false
    }
  ]

  const categories = [
    { key: "all", label: "All", icon: BookOpen, count: tutorials.length },
    { key: "slack", label: "Slack", icon: MessageSquare, count: tutorials.filter(t => t.category === "slack").length },
    { key: "gmail", label: "Gmail", icon: Mail, count: tutorials.filter(t => t.category === "gmail").length },
    { key: "razorpay", label: "Razorpay", icon: CreditCard, count: tutorials.filter(t => t.category === "razorpay").length },
    { key: "general", label: "General", icon: Settings, count: tutorials.filter(t => t.category === "general").length },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.key === category)
    return cat ? cat.icon : BookOpen
  }

  const featuredTutorials = tutorials.filter(t => t.isFeatured)

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Tutorials</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Step-by-step guides to help you get started.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search tutorials..."
          className="pl-10"
        />
      </div>

      {/* Featured Tutorials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Star className="h-5 w-5 text-yellow-500" />
            Featured Tutorials
          </CardTitle>
          <CardDescription>
            Essential guides to get you started quickly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTutorials.map((tutorial) => {
              const Icon = tutorial.icon
              return (
                <Card key={tutorial.id} className="hover:shadow-md transition-shadow border-2 border-primary/20 flex flex-col h-full">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                      <Badge className={getDifficultyColor(tutorial.difficulty)}>
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-3">{tutorial.title}</CardTitle>
                    <CardDescription className="min-h-[3rem] flex items-start">
                      {tutorial.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.estimatedTime} minutes</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Quick Steps:</h4>
                      <ul className="text-xs text-muted-foreground space-y-2">
                        {tutorial.steps.slice(0, 3).map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-primary">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                        {tutorial.steps.length > 3 && (
                          <li className="text-primary font-medium">
                            +{tutorial.steps.length - 3} more steps
                          </li>
                        )}
                      </ul>
                    </div>
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Start Tutorial
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* All Tutorials by Category */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-3 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-0">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger key={category.key} value={category.key} className="text-xs sm:text-sm">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                  <span className="hidden sm:inline">({category.count})</span>
                  <span className="sm:hidden">({category.count})</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.key} value={category.key} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tutorials
                .filter(tutorial => category.key === "all" || tutorial.category === category.key)
                .map((tutorial) => {
                  const Icon = tutorial.icon
                  return (
                    <Card key={tutorial.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                      <CardHeader className="flex-shrink-0">
                        <div className="flex items-center justify-between mb-4">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <div className="flex gap-3">
                            {tutorial.isFeatured && (
                              <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            <Badge className={getDifficultyColor(tutorial.difficulty)}>
                              {tutorial.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <CardTitle className="text-lg mb-3">{tutorial.title}</CardTitle>
                        <CardDescription className="min-h-[3rem] flex items-start">
                          {tutorial.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{tutorial.estimatedTime} minutes</span>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">Steps:</h4>
                          <ul className="text-xs text-muted-foreground space-y-2">
                            {tutorial.steps.slice(0, 2).map((step, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-primary">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                            {tutorial.steps.length > 2 && (
                              <li className="text-primary font-medium">
                                +{tutorial.steps.length - 2} more steps
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="flex space-x-3 pt-2">
                          <Button size="sm" className="flex-1">
                            <Play className="h-4 w-4 mr-2" />
                            Start
                          </Button>
                          {tutorial.completed && (
                            <Button size="sm" variant="outline" disabled>
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Help Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Zap className="h-5 w-5" />
            Need Quick Help?
          </CardTitle>
          <CardDescription>
            Get immediate assistance for common issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto p-6 flex-col">
              <MessageSquare className="h-6 w-6 mb-3" />
              <span>Slack Issues</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex-col">
              <Mail className="h-6 w-6 mb-3" />
              <span>Email Problems</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex-col">
              <CreditCard className="h-6 w-6 mb-3" />
              <span>Payment Issues</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex-col">
              <Shield className="h-6 w-6 mb-3" />
              <span>Security Help</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 