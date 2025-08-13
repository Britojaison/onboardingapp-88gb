import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Building2,
  Coffee,
  Wifi,
  Car,
  Users,
  Sun,
  Moon
} from "lucide-react"

export default function HolidaysPage() {
  // Mock data - in real app, this would come from Supabase/Sanity
  const holidays = [
    {
      id: 1,
      name: "New Year's Day",
      date: "2024-01-01",
      description: "New Year's Day celebration",
      isFloating: false,
      type: "public"
    },
    {
      id: 2,
      name: "Republic Day",
      date: "2024-01-26",
      description: "Republic Day of India",
      isFloating: false,
      type: "public"
    },
    {
      id: 3,
      name: "Holi",
      date: "2024-03-25",
      description: "Festival of Colors",
      isFloating: false,
      type: "public"
    },
    {
      id: 4,
      name: "Independence Day",
      date: "2024-08-15",
      description: "Independence Day of India",
      isFloating: false,
      type: "public"
    },
    {
      id: 5,
      name: "Gandhi Jayanti",
      date: "2024-10-02",
      description: "Birthday of Mahatma Gandhi",
      isFloating: false,
      type: "public"
    },
    {
      id: 6,
      name: "Diwali",
      date: "2024-11-01",
      description: "Festival of Lights",
      isFloating: false,
      type: "public"
    },
    {
      id: 7,
      name: "Christmas",
      date: "2024-12-25",
      description: "Christmas Day",
      isFloating: false,
      type: "public"
    },
    {
      id: 8,
      name: "Company Foundation Day",
      date: "2024-06-15",
      description: "Annual company celebration",
      isFloating: false,
      type: "company"
    }
  ]

  const officeInfo = {
    address: "123 Tech Park, Phase 2, Electronic City, Bangalore - 560100",
    phone: "+91 80 1234 5678",
    email: "office@company.com",
    workingHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed"
    },
    facilities: [
      { name: "Free Wi-Fi", icon: Wifi, description: "High-speed internet access" },
      { name: "Cafeteria", icon: Coffee, description: "Full-service cafeteria with meals" },
      { name: "Parking", icon: Car, description: "Free parking for employees" },
      { name: "Meeting Rooms", icon: Users, description: "Conference rooms and meeting spaces" },
      { name: "Gym", icon: Building2, description: "On-site fitness center" },
      { name: "Medical Room", icon: Building2, description: "First aid and medical assistance" }
    ]
  }

  const getHolidayTypeColor = (type: string) => {
    switch (type) {
      case "public":
        return "bg-red-100 text-red-800"
      case "company":
        return "bg-blue-100 text-blue-800"
      case "floating":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getUpcomingHolidays = () => {
    const today = new Date()
    return holidays
      .filter(holiday => new Date(holiday.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5)
  }

  const upcomingHolidays = getUpcomingHolidays()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Holidays</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          View upcoming holidays and company events.
        </p>
      </div>

      <Tabs defaultValue="holidays" className="space-y-6">
        <div className="px-4 sm:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:grid sm:grid-cols-2 sm:gap-0">
            <TabsTrigger value="holidays" className="text-xs sm:text-sm">Holidays</TabsTrigger>
            <TabsTrigger value="office" className="text-xs sm:text-sm">Office Information</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="holidays" className="space-y-6">
          {/* Upcoming Holidays */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Holidays
              </CardTitle>
              <CardDescription>
                Next 5 upcoming holidays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingHolidays.map((holiday) => (
                  <div key={holiday.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{holiday.name}</h3>
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{holiday.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {new Date(holiday.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {Math.ceil((new Date(holiday.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days away
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Holidays */}
          <Card>
            <CardHeader>
              <CardTitle>All Holidays 2024</CardTitle>
              <CardDescription>
                Complete list of company holidays for the year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {holidays.map((holiday) => (
                  <Card key={holiday.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                    <CardHeader className="pb-3 flex flex-col flex-1">
                      <div className="flex items-center justify-between">
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                        {holiday.isFloating && (
                          <Badge variant="outline">Floating</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{holiday.name}</CardTitle>
                      <CardDescription className="flex-1">{holiday.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="text-sm font-medium">
                        {new Date(holiday.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="office" className="space-y-6">
          {/* Office Location & Contact */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{officeInfo.address}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>{officeInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>{officeInfo.email}</span>
                  </div>
                </div>
                <Button className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(officeInfo.workingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="capitalize font-medium">{day}</span>
                      <span className="text-sm text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Facilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Office Facilities
              </CardTitle>
              <CardDescription>
                Available amenities and services at the office
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {officeInfo.facilities.map((facility) => {
                  const Icon = facility.icon
                  return (
                    <div key={facility.name} className="flex items-start space-x-3 p-4 border rounded-lg">
                      <Icon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">{facility.name}</h3>
                        <p className="text-sm text-muted-foreground">{facility.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common office-related tasks and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button variant="outline" className="h-auto p-4 flex-col">
                  <Phone className="h-6 w-6 mb-2" />
                  <span>Call Reception</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col">
                  <Mail className="h-6 w-6 mb-2" />
                  <span>IT Support</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span>HR Contact</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex-col">
                  <Building2 className="h-6 w-6 mb-2" />
                  <span>Facilities</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 