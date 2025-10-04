import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp, Heart, Zap, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering individuals to achieve financial independence through education and mentorship",
    },
    {
      icon: Heart,
      title: "Student-Focused",
      description: "Every decision we make prioritizes the success and growth of our community",
    },
    {
      icon: Shield,
      title: "Integrity First",
      description: "Transparent, honest, and ethical in all our teachings and business practices",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving our curriculum with cutting-edge strategies and technologies",
    },
  ]

  const stats = [
    { value: "12,000+", label: "Active Students", icon: Users },
    { value: "94%", label: "Success Rate", icon: TrendingUp },
    { value: "500+", label: "Course Hours", icon: Award },
    { value: "50+", label: "Expert Mentors", icon: Sparkles },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Heart className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Building the Future of Trading Education
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2018, Trading Pride has grown from a small community of passionate traders into the world's
              leading platform for trading education and mentorship.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-in fade-in slide-in-from-left-5 duration-700">
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trading Pride was born from a simple observation: traditional trading education was either too
                  expensive, too complicated, or simply ineffective. Our founders, experienced traders themselves, saw
                  countless aspiring traders struggle with outdated materials and lack of proper guidance.
                </p>
                <p>
                  We set out to change that. By combining cutting-edge technology with proven trading strategies and
                  personalized mentorship, we created a platform that truly works. Our approach focuses on practical,
                  real-world application rather than theory alone.
                </p>
                <p>
                  Today, we're proud to have helped thousands of students achieve their trading goals, from generating
                  supplemental income to becoming full-time professional traders. Our community spans across 50+
                  countries, united by a shared passion for financial markets and continuous learning.
                </p>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right-5 duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-3xl blur-3xl opacity-20" />
              <img
                src="/modern-trading-office-team-collaboration.jpg"
                alt="Trading Pride Team"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Values Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape the experience we create for our community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-chart-2/5 overflow-hidden">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of successful traders who have transformed their financial future with Trading Pride
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-chart-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg px-8"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
