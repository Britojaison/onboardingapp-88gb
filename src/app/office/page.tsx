import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Wifi,
  Coffee,
  Car,
  Users,
  Shield,
  Heart,
  Printer,
  Monitor,
  Zap,
  Wrench,
  AlertCircle
} from "lucide-react"

export default function OfficePage() {
  // Mock data - in real app, this would come from Sanity
  const officeInfo = {
    mainOffice: {
      name: "Main Office - Bangalore",
      address: "123 Tech Park, Phase 2, Electronic City, Bangalore - 560100",
      phone: "+91 80 1234 5678",
      email: "bangalore@company.com",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      workingHours: {
        monday: "9:00 AM - 6:00 PM",
        tuesday: "9:00 AM - 6:00 PM",
        wednesday: "9:00 AM - 6:00 PM",
        thursday: "9:00 AM - 6:00 PM",
        friday: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed"
      }
    },
    facilities: [
      {
        name: "High-Speed Wi-Fi",
        description: "Enterprise-grade wireless network with 1Gbps speed",
        icon: Wifi,
        status: "available",
        location: "All floors"
      },
      {
        name: "Cafeteria & Dining",
        description: "Full-service cafeteria with multiple cuisines and healthy options",
        icon: Coffee,
        status: "available",
        location: "Ground floor"
      },
      {
        name: "Free Parking",
        description: "Secure parking facility for cars and two-wheelers",
        icon: Car,
        status: "available",
        location: "Basement & Ground floor"
      },
      {
        name: "Meeting Rooms",
        description: "Conference rooms with video conferencing and presentation equipment",
        icon: Users,
        status: "available",
        location: "All floors"
      },
      {
        name: "Gym & Fitness Center",
        description: "Well-equipped gym with personal trainers and yoga classes",
        icon: Heart,
        status: "available",
        location: "2nd floor"
      },
      {
        name: "Medical Room",
        description: "First aid facility with on-call medical assistance",
        icon: Shield,
        status: "available",
        location: "1st floor"
      },
      {
        name: "Printing & Scanning",
        description: "High-quality printers and scanners for all employees",
        icon: Printer,
        status: "available",
        location: "All floors"
      },
      {
        name: "IT Support Desk",
        description: "24/7 IT support for technical issues and equipment",
        icon: Wrench,
        status: "available",
        location: "1st floor"
      }
    ],
    departments: [
      {
        name: "Human Resources",
        floor: "1st Floor",
        contact: "hr@company.com",
        phone: "+91 80 1234 5679",
        head: "Sarah Johnson"
      },
      {
        name: "Information Technology",
        floor: "2nd Floor",
        contact: "it@company.com",
        phone: "+91 80 1234 5680",
        head: "Mike Chen"
      },
      {
        name: "Finance & Accounting",
        floor: "1st Floor",
        contact: "finance@company.com",
        phone: "+91 80 1234 5681",
        head: "Priya Sharma"
      },
      {
        name: "Marketing",
        floor: "3rd Floor",
        contact: "marketing@company.com",
        phone: "+91 80 1234 5682",
        head: "David Wilson"
      },
      {
        name: "Engineering",
        floor: "4th Floor",
        contact: "engineering@company.com",
        phone: "+91 80 1234 5683",
        head: "Alex Rodriguez"
      },
      {
        name: "Sales",
        floor: "3rd Floor",
        contact: "sales@company.com",
        phone: "+91 80 1234 5684",
        head: "Lisa Thompson"
      }
    ],
    emergencyContacts: [
      {
        name: "Security",
        phone: "+91 80 1234 5690",
        description: "24/7 security desk"
      },
      {
        name: "IT Support",
        phone: "+91 80 1234 5691",
        description: "Technical issues"
      },
      {
        name: "Facilities",
        phone: "+91 80 1234 5692",
        description: "Building maintenance"
      },
      {
        name: "Medical Emergency",
        phone: "108",
        description: "Emergency medical services"
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800"
      case "unavailable":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Office Information</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Complete guide to our office facilities, departments, and contact information.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:grid sm:grid-cols-4 sm:gap-0">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="facilities" className="text-xs sm:text-sm">Facilities</TabsTrigger>
            <TabsTrigger value="departments" className="text-xs sm:text-sm">Departments</TabsTrigger>
            <TabsTrigger value="emergency" className="text-xs sm:text-sm">Emergency</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Office Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {officeInfo.mainOffice.name}
              </CardTitle>
              <CardDescription>
                Our main office location and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">{officeInfo.mainOffice.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">{officeInfo.mainOffice.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">{officeInfo.mainOffice.email}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Working Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(officeInfo.mainOffice.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="capitalize font-medium">{day}</span>
                        <span className="text-muted-foreground">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button>
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Office
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Floors</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Office floors</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Facilities</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{officeInfo.facilities.length}</div>
                <p className="text-xs text-muted-foreground">Available amenities</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Departments</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{officeInfo.departments.length}</div>
                <p className="text-xs text-muted-foreground">Active departments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Parking</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">200+</div>
                <p className="text-xs text-muted-foreground">Parking spaces</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="facilities" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {officeInfo.facilities.map((facility) => {
              const Icon = facility.icon
              return (
                <Card key={facility.name} className="hover:shadow-md transition-shadow flex flex-col h-full">
                  <CardHeader className="flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" />
                      <Badge className={getStatusColor(facility.status)}>
                        {facility.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{facility.name}</CardTitle>
                    <CardDescription className="flex-1">{facility.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="text-sm text-muted-foreground">
                      <strong>Location:</strong> {facility.location}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {officeInfo.departments.map((dept) => (
              <Card key={dept.name} className="hover:shadow-md transition-shadow flex flex-col h-full">
                <CardHeader className="flex flex-col flex-1">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription className="flex-1">Department information and contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 mt-auto">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Floor:</span>
                      <span>{dept.floor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Head:</span>
                      <span>{dept.head}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span className="text-primary">{dept.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Phone:</span>
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Important contact numbers for emergencies and urgent situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {officeInfo.emergencyContacts.map((contact) => (
                  <div key={contact.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg font-bold">{contact.phone}</div>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Procedures</CardTitle>
              <CardDescription>
                What to do in case of emergencies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Fire Emergency</h4>
                    <p className="text-sm text-muted-foreground">
                      Use nearest fire exit, proceed to assembly point, call emergency services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Medical Emergency</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact medical room immediately, call 108 for ambulance if needed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Security Issue</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact security desk, report to HR if involving personnel
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 