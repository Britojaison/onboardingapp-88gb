"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
  Building2,
  X
} from "lucide-react"
import { useState } from "react"

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
      pdfUrl: "/pdfs/employee-handbook.pdf",
    },
    {
      id: 2,
      title: "Dress Code Policy",
      description: "Guidelines for appropriate workplace attire and professional appearance standards",
      category: "hr",
      version: "v1.2",
      effectiveDate: "2025-01-01",
      lastUpdated: "2025-01-01",
      fileSize: "820 KB",
      icon: Users,
      pdfUrl: "/pdfs/dress-code-policy.pdf",
    },
    {
      id: 3,
      title: "Leave and Time Off Policy",
      description: "Rules and procedures for vacation, sick leave, and other time off",
      category: "hr",
      version: "v2.0",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-12",
      fileSize: "1.8 MB",
      icon: Calendar,
      pdfUrl: "/pdfs/leave-time-off-policy.pdf",
    },
    {
      id: 4,
      title: "IT Security Policy",
      description: "Comprehensive cybersecurity guidelines and data protection procedures for all employees",
      category: "it",
      version: "v1.8",
      effectiveDate: "2025-01-01",
      lastUpdated: "2025-01-08",
      fileSize: "425 KB",
      icon: Shield,
      pdfUrl: "/pdfs/it-security-policy.pdf",
    },
    {
      id: 5,
      title: "Expense Reimbursement Policy",
      description: "Business expense guidelines and Razorpay-based reimbursement procedures with digital workflow",
      category: "finance",
      version: "v1.3",
      effectiveDate: "2025-01-01",
      lastUpdated: "2025-01-03",
      fileSize: "685 KB",
      icon: DollarSign,
      pdfUrl: "/pdfs/expense-reimbursement-policy.pdf",
    },
    {
      id: 6,
      title: "Work From Home Policy",
      description: "Guidelines for working from home and remote work arrangements",
      category: "hr",
      version: "v1.4",
      effectiveDate: "2024-01-01",
      lastUpdated: "2024-01-07",
      fileSize: "1.3 MB",
      icon: Building2,
      pdfUrl: "/pdfs/Work from Home Policy_88GB.pdf",
    },
  ]

  const categories = [
    { key: "general", label: "General", icon: FileText, count: policies.filter(p => p.category === "general").length },
    { key: "hr", label: "HR", icon: Users, count: policies.filter(p => p.category === "hr").length },
    { key: "it", label: "IT", icon: Shield, count: policies.filter(p => p.category === "it").length },
    { key: "finance", label: "Finance", icon: DollarSign, count: policies.filter(p => p.category === "finance").length },
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

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null)

  const handleOpenPdf = (url: string) => {
    // Check if it's mobile (small screen)
    if (window.innerWidth < 768) {
      // Mobile: open in new tab
      window.open(url, '_blank')
    } else {
      // Desktop: open in popup modal
      setSelectedPdfUrl(url)
      setIsPdfModalOpen(true)
    }
  }

  const handleClosePdf = () => {
    setIsPdfModalOpen(false)
    setSelectedPdfUrl(null)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
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
      <Tabs defaultValue="all" className="space-y-6">
        <div className="px-2 sm:px-4 md:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-0">
            <TabsTrigger value="all" className="text-xs sm:text-sm">All ({policies.length})</TabsTrigger>
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger key={category.key} value={category.key} className="text-xs sm:text-sm">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 md:mr-3" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                  <span className="hidden sm:inline">({category.count})</span>
                  <span className="sm:hidden">({category.count})</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => {
              const Icon = getCategoryIcon(policy.category)
              return (
                <Card key={policy.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                  <CardHeader className="flex flex-col flex-1 pb-3 sm:pb-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <Badge className={getCategoryColor(policy.category)}>
                        {policy.category.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{policy.title}</CardTitle>
                    <CardDescription className="flex-1 text-sm sm:text-base">{policy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 mt-auto pt-0">
                    <div className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
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
                    <div className="flex space-x-2 sm:space-x-3 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleOpenPdf(policy.pdfUrl)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = policy.pdfUrl;
                          link.download = `${policy.title}.pdf`;
                          link.click();
                        }}
                      >
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
          <TabsContent key={category.key} value={category.key} className="space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {policies
                .filter(policy => policy.category === category.key)
                .map((policy) => {
                  const Icon = getCategoryIcon(policy.category)
                  return (
                    <Card key={policy.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                      <CardHeader className="flex flex-col flex-1 pb-3 sm:pb-4">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <Badge className={getCategoryColor(policy.category)}>
                            {policy.category.toUpperCase()}
                          </Badge>
                        </div>
                        <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{policy.title}</CardTitle>
                        <CardDescription className="flex-1 text-sm sm:text-base">{policy.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 sm:space-y-4 mt-auto pt-0">
                        <div className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
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
                        <div className="flex space-x-2 sm:space-x-3 pt-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => handleOpenPdf(policy.pdfUrl)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = policy.pdfUrl;
                              link.download = `${policy.title}.pdf`;
                              link.click();
                            }}
                          >
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

      <Dialog open={isPdfModalOpen} onOpenChange={setIsPdfModalOpen}>
        <DialogContent className="w-[95%] max-w-[1800px] h-[95vh] p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="text-lg font-semibold">
              {selectedPdfUrl ? selectedPdfUrl.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ') : 'PDF Viewer'}
            </DialogTitle>
          </DialogHeader>
          {selectedPdfUrl && (
            <div className="flex-1 p-0">
              <iframe
                src={`${selectedPdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0&view=FitH`}
                className="w-full h-full min-h-[calc(95vh-80px)]"
                title="PDF Viewer"
                frameBorder="0"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 