import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  TrendingUp,
  BarChart3,
  LineChart,
  Zap,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CoursesPage() {
  const courseCategories = [
    {
      id: "beginner",
      label: "Beginner",
      courses: [
        {
          title: "Trading Fundamentals",
          description:
            "Master the basics of trading, market analysis, and risk management",
          price: "$299",
          duration: "8 weeks",
          students: "2,450",
          rating: "4.9",
          level: "Beginner",
          icon: BookOpen,
          features: [
            "Market basics",
            "Chart reading",
            "Risk management",
            "Trading psychology",
          ],
        },
        {
          title: "Technical Analysis 101",
          description:
            "Learn to read charts, identify patterns, and make informed decisions",
          price: "$349",
          duration: "10 weeks",
          students: "1,890",
          rating: "4.8",
          level: "Beginner",
          icon: LineChart,
          features: [
            "Chart patterns",
            "Indicators",
            "Trend analysis",
            "Support & resistance",
          ],
        },
      ],
    },
    {
      id: "intermediate",
      label: "Intermediate",
      courses: [
        {
          title: "Advanced Technical Strategies",
          description:
            "Deep dive into advanced charting techniques and trading strategies",
          price: "$499",
          duration: "12 weeks",
          students: "1,230",
          rating: "4.9",
          level: "Intermediate",
          icon: BarChart3,
          features: [
            "Advanced patterns",
            "Multi-timeframe analysis",
            "Volume analysis",
            "Strategy building",
          ],
        },
        {
          title: "Options Trading Mastery",
          description: "Comprehensive guide to options trading and derivatives",
          price: "$599",
          duration: "14 weeks",
          students: "890",
          rating: "5.0",
          level: "Intermediate",
          icon: TrendingUp,
          features: [
            "Options basics",
            "Strategies",
            "Greeks",
            "Risk management",
          ],
        },
      ],
    },
    {
      id: "advanced",
      label: "Advanced",
      courses: [
        {
          title: "Algorithmic Trading",
          description: "Build and deploy automated trading systems with Python",
          price: "$799",
          duration: "16 weeks",
          students: "560",
          rating: "4.9",
          level: "Advanced",
          icon: Zap,
          features: [
            "Python programming",
            "Backtesting",
            "API integration",
            "Live deployment",
          ],
        },
        {
          title: "Professional Day Trading",
          description: "Elite program for aspiring professional day traders",
          price: "$999",
          duration: "20 weeks",
          students: "340",
          rating: "5.0",
          level: "Advanced",
          icon: Award,
          features: [
            "Scalping strategies",
            "Market making",
            "Risk management",
            "Live trading room",
          ],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              World-Class Education
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Master Trading with Expert-Led Courses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From beginner to professional trader. Learn at your own pace with
              our comprehensive curriculum designed by industry experts.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Active Students", value: "12,000+", icon: Users },
              { label: "Course Hours", value: "500+", icon: Clock },
              { label: "Success Rate", value: "94%", icon: TrendingUp },
              { label: "Avg Rating", value: "4.9/5", icon: Star },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Course Tabs */}
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12 bg-muted/50">
              {courseCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {courseCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {category.courses.map((course, index) => (
                    <Card
                      key={course.title}
                      className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 overflow-hidden animate-in fade-in slide-in-from-bottom-5"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <course.icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                          <Badge variant="secondary" className="font-semibold">
                            {course.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            {course.students}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Star className="w-4 h-4 fill-chart-2 text-chart-2" />
                            {course.rating}
                          </div>
                        </div>
                        <div className="space-y-2 mb-6">
                          {course.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-6">
                        <div>
                          <div className="text-3xl font-bold text-primary">
                            {course.price}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            One-time payment
                          </div>
                        </div>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-chart-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                        >
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
}
