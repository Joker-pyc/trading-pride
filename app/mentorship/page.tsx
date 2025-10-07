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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Video,
  Award,
  Target,
  Sparkles,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function MentorshipPage() {
  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior Day Trader",
      experience: "12+ years",
      specialty: "Technical Analysis & Day Trading",
      rating: "5.0",
      students: "450+",
      image: "/professional-asian-woman-trader.jpg",
      achievements: ["$2M+ Portfolio", "Forbes Featured", "TEDx Speaker"],
    },
    {
      name: "Marcus Johnson",
      role: "Options Specialist",
      experience: "15+ years",
      specialty: "Options Trading & Risk Management",
      rating: "4.9",
      students: "380+",
      image: "/professional-black-man-trader.jpg",
      achievements: [
        "Ex-Goldman Sachs",
        "CFA Charterholder",
        "Best-Selling Author",
      ],
    },
    {
      name: "Elena Rodriguez",
      role: "Algorithmic Trader",
      experience: "10+ years",
      specialty: "Algo Trading & Quantitative Analysis",
      rating: "5.0",
      students: "290+",
      image: "/professional-latina-woman-programmer.jpg",
      achievements: ["MIT Graduate", "Hedge Fund Manager", "Tech Innovator"],
    },
  ];

  const mentorshipPlans = [
    {
      name: "Group Mentorship",
      price: "$499",
      period: "/month",
      description: "Learn alongside peers with weekly group sessions",
      features: [
        "Weekly group video calls",
        "Private Discord community",
        "Monthly strategy reviews",
        "Trading journal feedback",
        "Resource library access",
      ],
      icon: Users,
      popular: false,
    },
    {
      name: "1-on-1 Mentorship",
      price: "$1,299",
      period: "/month",
      description: "Personalized guidance tailored to your trading goals",
      features: [
        "2 private sessions per week",
        "Direct messaging access",
        "Personalized trading plan",
        "Real-time trade reviews",
        "Priority support",
        "Custom strategy development",
      ],
      icon: Video,
      popular: true,
    },
    {
      name: "Elite Program",
      price: "$2,999",
      period: "/month",
      description: "Intensive program for serious traders seeking mastery",
      features: [
        "Daily 1-on-1 sessions",
        "24/7 mentor access",
        "Live trading room access",
        "Advanced strategy sessions",
        "Portfolio management",
        "Networking events",
        "Lifetime community access",
      ],
      icon: Award,
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Target className="w-3 h-3 mr-1" />
              Personalized Guidance
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Learn from Elite Trading Mentors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get personalized guidance from experienced traders who have
              mastered the markets. Accelerate your journey with proven
              strategies and real-world insights.
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Your Mentors
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <Card
                  key={mentor.name}
                  className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 overflow-hidden animate-in fade-in slide-in-from-bottom-5"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <Avatar className="relative w-32 h-32 border-4 border-background group-hover:scale-105 transition-transform duration-300">
                        <AvatarImage
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                        />
                        <AvatarFallback className="text-2xl">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-2xl mb-1">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-primary mb-2">
                      {mentor.role}
                    </CardDescription>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-chart-2 text-chart-2" />
                        {mentor.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {mentor.students}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold mb-2">
                        Specialty
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {mentor.specialty}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">
                        Experience
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {mentor.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">
                        Achievements
                      </div>
                      <div className="space-y-1">
                        {mentor.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Award className="w-3 h-3 text-primary flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-primary to-chart-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Mentorship Plans */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-4">
              Choose Your Path
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Select the mentorship program that aligns with your goals and
              commitment level
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {mentorshipPlans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-5 ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/10 scale-105"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground text-center py-2 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <plan.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-chart-2 hover:shadow-lg hover:shadow-primary/30"
                          : "bg-primary hover:bg-primary/90"
                      } transition-all duration-300`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
