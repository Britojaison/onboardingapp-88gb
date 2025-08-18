import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Image, 
  Search, 
  Heart, 
  Share2, 
  Download,
  Users,
  Building2,
  Calendar,
  Star,
  MapPin,
  Camera
} from "lucide-react"

export default function GalleryPage() {
  // Mock data - in real app, this would come from Sanity
  const galleryItems = [
    {
      id: 1,
      title: "Office Reception Area",
      description: "Welcome to our modern office space with comfortable seating and natural lighting",
      category: "office",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      location: "Main Office, Bangalore",
      date: "2024-01-15",
      likes: 24,
      isFeatured: true
    },
    {
      id: 2,
      title: "Team Building Event",
      description: "Annual team building retreat at a beautiful resort in Coorg",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      location: "Coorg, Karnataka",
      date: "2024-01-10",
      likes: 45,
      isFeatured: true
    },
    {
      id: 3,
      title: "Cafeteria & Dining Area",
      description: "Spacious cafeteria serving delicious meals with various cuisines",
      category: "office",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      location: "Main Office, Bangalore",
      date: "2024-01-12",
      likes: 18,
      isFeatured: false
    },
    {
      id: 4,
      title: "Holi Celebration",
      description: "Colorful Holi celebration with team members enjoying the festival",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      location: "Office Premises",
      date: "2024-03-25",
      likes: 67,
      isFeatured: true
    },
    {
      id: 5,
      title: "Development Team",
      description: "Our talented development team working on innovative projects",
      category: "team",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      location: "Development Floor",
      date: "2024-01-08",
      likes: 32,
      isFeatured: false
    },
    {
      id: 6,
      title: "Meeting Room Setup",
      description: "Modern conference rooms equipped with latest technology",
      category: "office",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      location: "Conference Floor",
      date: "2024-01-05",
      likes: 15,
      isFeatured: false
    },
    {
      id: 7,
      title: "Diwali Celebration",
      description: "Festive Diwali celebration with traditional decorations and sweets",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop",
      location: "Office Premises",
      date: "2024-11-01",
      likes: 89,
      isFeatured: true
    },
    {
      id: 8,
      title: "Marketing Team",
      description: "Creative marketing team brainstorming new campaign ideas",
      category: "team",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      location: "Marketing Department",
      date: "2024-01-03",
      likes: 28,
      isFeatured: false
    },
    {
      id: 9,
      title: "Gym & Fitness Center",
      description: "On-site gym with modern equipment for employee wellness",
      category: "office",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      location: "Wellness Center",
      date: "2024-01-01",
      likes: 22,
      isFeatured: false
    },
    {
      id: 10,
      title: "Christmas Party",
      description: "Annual Christmas celebration with team members and families",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1543589923-d58f523daa0c?w=800&h=600&fit=crop",
      location: "Office Premises",
      date: "2024-12-25",
      likes: 76,
      isFeatured: true
    },
    {
      id: 11,
      title: "HR Team",
      description: "Dedicated HR team ensuring smooth employee experience",
      category: "team",
      imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop",
      location: "HR Department",
      date: "2024-01-02",
      likes: 19,
      isFeatured: false
    },
    {
      id: 12,
      title: "Company Culture",
      description: "Our inclusive and diverse workplace culture in action",
      category: "culture",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
      location: "Various Locations",
      date: "2024-01-20",
      likes: 41,
      isFeatured: false
    }
  ]

  const categories = [
    { key: "all", label: "All", icon: Image, count: galleryItems.length },
    { key: "office", label: "Office", icon: Building2, count: galleryItems.filter(g => g.category === "office").length },
    { key: "team", label: "Team", icon: Users, count: galleryItems.filter(g => g.category === "team").length },
    { key: "events", label: "Events", icon: Calendar, count: galleryItems.filter(g => g.category === "events").length },
    { key: "culture", label: "Culture", icon: Star, count: galleryItems.filter(g => g.category === "culture").length },
  ]

  const featuredItems = galleryItems.filter(item => item.isFeatured)

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Gallery</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Explore photos from our office and events.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search gallery..."
          className="pl-10"
        />
      </div>

      {/* Featured Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 sm:gap-3">
            <Star className="h-5 w-5 text-yellow-500" />
            Featured Photos
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Highlighted moments from our office and events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/50 text-white border-0">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3 flex-shrink-0">
                  <CardTitle className="text-base sm:text-lg mb-2 sm:mb-3">{item.title}</CardTitle>
                  <CardDescription className="min-h-[3rem] flex items-start text-sm sm:text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Button size="sm" variant="ghost">
                        <Heart className="h-4 w-4 mr-1" />
                        {item.likes}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gallery by Category */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="px-2 sm:px-4 md:px-0">
          <TabsList className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-0">
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

        {categories.map((category) => (
          <TabsContent key={category.key} value={category.key} className="space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryItems
                .filter(item => category.key === "all" || item.category === category.key)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                    <div className="relative group">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={400}
                        height={160}
                        className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4 flex-1 flex flex-col justify-end">
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem] flex items-start">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="h-3 w-3" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 sm:gap-3">
            <Camera className="h-5 w-5" />
            Share Your Photos
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Contribute to our gallery by sharing your office moments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 sm:p-8 text-center">
            <Camera className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-muted-foreground mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Upload Photos</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Share photos of office events, team activities, or workplace moments
            </p>
            <Button>
              <Camera className="h-4 w-4 mr-2" />
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 