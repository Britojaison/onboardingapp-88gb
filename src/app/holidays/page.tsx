"use client"

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
  Users
} from "lucide-react"

export default function HolidaysPage() {
  // Fixed Holidays - mandatory for all employees
  const fixedHolidays = [
    {
      id: 1,
      name: "New Year",
      date: "2025-01-01",
      description: "Mid week holiday",
      day: "Wednesday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 2,
      name: "Pongal / Makar Sankranti",
      date: "2025-01-14",
      description: "Mid week holiday",
      day: "Tuesday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 3,
      name: "Holi",
      date: "2025-03-13",
      description: "Mid week holiday",
      day: "Thursday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 4,
      name: "Ramzan",
      date: "2025-03-31",
      description: "3 days holiday (Sat, Sun, Mon)",
      day: "Monday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 5,
      name: "Ambedkar Jayanti",
      date: "2025-04-14",
      description: "3 days holiday (Sat, Sun, Mon)",
      day: "Monday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 6,
      name: "Independence Day",
      date: "2025-08-15",
      description: "3 days holiday (Fri, Sat, Sun)",
      day: "Friday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 7,
      name: "Ganesh Chaturthi",
      date: "2025-08-27",
      description: "Mid week holiday",
      day: "Wednesday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 8,
      name: "Gandhi Jayanti / Dusshera",
      date: "2025-10-02",
      description: "Mid week holiday",
      day: "Thursday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 9,
      name: "Diwali Break",
      date: "2025-10-17",
      description: "Mini Vacation",
      day: "Friday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 10,
      name: "Diwali",
      date: "2025-10-20",
      description: "Mid week holiday",
      day: "Monday",
      isFloating: false,
      type: "fixed"
    },
    {
      id: 11,
      name: "Christmas",
      date: "2025-12-25",
      description: "Mid week holiday",
      day: "Thursday",
      isFloating: false,
      type: "fixed"
    }
  ]

  // Optional Holidays - employees can choose any 2
  const optionalHolidays = [
    {
      id: 12,
      name: "Guru Gobind Singh Jayanti",
      date: "2025-01-06",
      description: "Optional holiday",
      day: "Monday",
      isFloating: true,
      type: "optional"
    },
    {
      id: 13,
      name: "Good Friday",
      date: "2025-04-18",
      description: "Optional holiday",
      day: "Friday",
      isFloating: true,
      type: "optional"
    },
    {
      id: 14,
      name: "Onam",
      date: "2025-09-05",
      description: "Optional holiday",
      day: "Friday",
      isFloating: true,
      type: "optional"
    },
    {
      id: 15,
      name: "Guru Nanak Jayanti",
      date: "2025-11-05",
      description: "Optional holiday",
      day: "Wednesday",
      isFloating: true,
      type: "optional"
    }
  ]

  // Weekend Holidays - National/Regional/Restricted holidays falling on Saturday or Sunday
  const weekendHolidays = [
    {
      id: 16,
      name: "Republic Day",
      date: "2025-01-26",
      description: "National holiday falling on weekend",
      day: "Sunday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 17,
      name: "Ugadi",
      date: "2025-03-30",
      description: "Regional holiday falling on weekend",
      day: "Sunday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 18,
      name: "Easter",
      date: "2025-04-20",
      description: "Regional holiday falling on weekend",
      day: "Sunday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 19,
      name: "Muharram",
      date: "2025-07-06",
      description: "Regional holiday falling on weekend",
      day: "Sunday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 20,
      name: "Raksha Bandhan",
      date: "2025-08-09",
      description: "Regional holiday falling on weekend",
      day: "Saturday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 21,
      name: "Janmashtami",
      date: "2025-08-16",
      description: "Regional holiday falling on weekend",
      day: "Saturday",
      isFloating: false,
      type: "weekend"
    },
    {
      id: 22,
      name: "Kannada Rajyothsava",
      date: "2025-11-01",
      description: "Regional holiday falling on weekend",
      day: "Saturday",
      isFloating: false,
      type: "weekend"
    }
  ]

  // Combine all holidays for display purposes
  const holidays = [...fixedHolidays, ...optionalHolidays, ...weekendHolidays]

  const officeInfo = {
    address: "3rd floor, Landmark: Polar, Bear Icecream Building, 88GB, 27th Main Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 80 1234 5678",
    email: "https://www.88gb.in/",
    workingHours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "10:00 AM - 7:00 PM",
      friday: "10:00 AM - 7:00 PM",
      saturday: "10:00 AM - 7:00 PM",
      sunday: "Closed"
    },
    facilities: [
      { name: "Free Wi-Fi", icon: Wifi, description: "High-speed internet access" },
      { name: "Cafeteria", icon: Coffee, description: "Full-service cafeteria with meals" },
      { name: "Parking", icon: Car, description: "Free parking for employees" },
      { name: "Meeting Rooms", icon: Users, description: "Conference rooms and meeting spaces" },
      //{ name: "Gym", icon: Building2, description: "On-site fitness center" },
      { name: "Medical Room", icon: Building2, description: "First aid and medical assistance" }
    ]
  }

  const getHolidayTypeColor = (type: string) => {
    switch (type) {
      case "fixed":
        return "bg-red-100 text-red-800"
      case "optional":
        return "bg-green-100 text-green-800"
      case "weekend":
        return "bg-orange-100 text-orange-800"
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
      .slice(0, 3)
  }

  const upcomingHolidays = getUpcomingHolidays()

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Holidays & Office Info</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          View company holidays and office information.
        </p>
      </div>

      <Tabs defaultValue="holidays" className="space-y-6">
        <div className="px-2 sm:px-4 md:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 sm:grid sm:grid-cols-2 sm:gap-0">
            <TabsTrigger value="holidays" className="text-xs sm:text-sm">Holidays</TabsTrigger>
            <TabsTrigger value="office" className="text-xs sm:text-sm">Office Information</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="holidays" className="space-y-6">
          {/* Upcoming Holidays */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 sm:gap-3">
                <Calendar className="h-5 w-5" />
                Upcoming Holidays
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Next 3 upcoming holidays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {upcomingHolidays.map((holiday) => (
                  <div key={holiday.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border rounded-lg gap-2 sm:gap-0">
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <h3 className="font-semibold text-sm sm:text-base">{holiday.name}</h3>
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{holiday.description}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-medium text-sm sm:text-base">
                        {new Date(holiday.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {Math.ceil((new Date(holiday.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days away
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fixed Holidays */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Fixed Holidays 2025</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Mandatory holidays for all employees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {fixedHolidays.map((holiday) => (
                  <Card key={holiday.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                    <CardHeader className="pb-3 sm:pb-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{holiday.name}</CardTitle>
                      <CardDescription className="flex-1 text-sm sm:text-base">{holiday.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0">
                      <div className="text-sm sm:text-base font-medium">
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

          {/* Optional Holidays */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Optional Holidays 2025</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Choose any 2 holidays from this list
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                {optionalHolidays.map((holiday) => (
                  <Card key={holiday.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                    <CardHeader className="pb-3 sm:pb-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{holiday.name}</CardTitle>
                      <CardDescription className="flex-1 text-sm sm:text-base">{holiday.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0">
                      <div className="text-sm sm:text-base font-medium">
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

          {/* Weekend Holidays */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Weekend Holidays 2025</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                National/Regional/Restricted holidays falling on Saturday or Sunday
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {weekendHolidays.map((holiday) => (
                  <Card key={holiday.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                    <CardHeader className="pb-3 sm:pb-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <Badge className={getHolidayTypeColor(holiday.type)}>
                          {holiday.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{holiday.name}</CardTitle>
                      <CardDescription className="flex-1 text-sm sm:text-base">{holiday.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0">
                      <div className="text-sm sm:text-base font-medium">
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

          {/* Holiday Note */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <p className="text-sm text-amber-800 italic text-center">
                *Kindly note the holiday calendar is subject to change every year.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="office" className="space-y-6">
          {/* Office Location & Contact */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
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
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://maps.app.goo.gl/NcnU1mSqwtre12aa9', '_blank')}
                >
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