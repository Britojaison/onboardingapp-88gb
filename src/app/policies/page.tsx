import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  Search, 
  Download, 
  Eye, 
  Calendar,
  Users,
  Shield,
  DollarSign,
  AlertTriangle,
  Building2
} from "lucide-react"

export default function PoliciesPage() {
  // Mock data - in real app, this would come from Supabase
  const policies = [
    {
      id: 1,
      title: "Employee Handbook",
      description: "Comprehensive guide covering all company policies and procedures",
      category: "general",
      version: "v2.1",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-15",
      fileSize: "2.5 MB",
      icon: FileText,
    },
    {
      id: 2,
      title: "Code of Conduct",
      description: "Standards of behavior and ethical guidelines for all employees",
      category: "general",
      version: "v1.5",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-10",
      fileSize: "1.2 MB",
      icon: Users,
    },
    {
      id: 3,
      title: "Dress Code Policy",
      description: "Guidelines for appropriate workplace attire and appearance",
      category: "hr",
      version: "v1.2",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-05",
      fileSize: "800 KB",
      icon: Users,
    },
    {
      id: 4,
      title: "Leave and Time Off Policy",
      description: "Rules and procedures for vacation, sick leave, and other time off",
      category: "hr",
      version: "v2.0",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-12",
      fileSize: "1.8 MB",
      icon: Calendar,
    },
    {
      id: 5,
      title: "IT Security Policy",
      description: "Cybersecurity guidelines and data protection procedures",
      category: "it",
      version: "v1.8",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-08",
      fileSize: "1.5 MB",
      icon: Shield,
    },
    {
      id: 6,
      title: "Expense Reimbursement Policy",
      description: "Guidelines for business expenses and reimbursement procedures",
      category: "finance",
      version: "v1.3",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-03",
      fileSize: "950 KB",
      icon: DollarSign,
    },
    {
      id: 7,
      title: "Workplace Safety Policy",
      description: "Safety guidelines and emergency procedures for the workplace",
      category: "safety",
      version: "v1.1",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-01",
      fileSize: "1.1 MB",
      icon: AlertTriangle,
    },
    {
      id: 8,
      title: "Remote Work Policy",
      description: "Guidelines for working from home and remote work arrangements",
      category: "hr",
      version: "v1.4",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-07",
      fileSize: "1.3 MB",
      icon: Building2,
    },
  ]

  const categories = [
    { key: "general", label: "General", icon: FileText, count: policies.filter(p => p.category === "general").length },
    { key: "hr", label: "HR", icon: Users, count: policies.filter(p => p.category === "hr").length },
    { key: "it", label: "IT", icon: Shield, count: policies.filter(p => p.category === "it").length },
    { key: "finance", label: "Finance", icon: DollarSign, count: policies.filter(p => p.category === "finance").length },
    { key: "safety", label: "Safety", icon: AlertTriangle, count: policies.filter(p => p.category === "safety").length },
  ]

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.key === category)
    return cat ? cat.icon : FileText
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "general":
        return "bg-blue-100 text-blue-800"
      case "hr":
        return "bg-green-100 text-green-800"
      case "it":
        return "bg-purple-100 text-purple-800"
      case "finance":
        return "bg-yellow-100 text-yellow-800"
      case "safety":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Policies</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Review and download important company policies.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search policies..."
          className="pl-10"
        />
      </div>

      {/* Policy Categories */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-0">
            <TabsTrigger value="all" className="text-xs sm:text-sm">All ({policies.length})</TabsTrigger>
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger key={category.key} value={category.key} className="text-xs sm:text-sm">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                  <span className="hidden sm:inline">({category.count})</span>
                  <span className="sm:hidden">({category.count})</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => {
              const Icon = getCategoryIcon(policy.category)
              return (
                <Card key={policy.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <Badge className={getCategoryColor(policy.category)}>
                        {policy.category.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{policy.title}</CardTitle>
                    <CardDescription>{policy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Version:</span>
                        <span className="font-medium">{policy.version}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Effective:</span>
                        <span>{new Date(policy.effectiveDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Updated:</span>
                        <span>{new Date(policy.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span>{policy.fileSize}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.key} value={category.key} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {policies
                .filter(policy => policy.category === category.key)
                .map((policy) => {
                  const Icon = getCategoryIcon(policy.category)
                  return (
                    <Card key={policy.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <Badge className={getCategoryColor(policy.category)}>
                            {policy.category.toUpperCase()}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{policy.title}</CardTitle>
                        <CardDescription>{policy.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Version:</span>
                            <span className="font-medium">{policy.version}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Effective:</span>
                            <span>{new Date(policy.effectiveDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Updated:</span>
                            <span>{new Date(policy.lastUpdated).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Size:</span>
                            <span>{policy.fileSize}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
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