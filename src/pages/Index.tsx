import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, Zap, Search, MessageCircle, Shield, TrendingUp, ArrowRight } from "lucide-react";
import AuthModal from "@/components/auth/AuthModal";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const featuredSkills = [
    "React Development", "UI/UX Design", "Python Programming", "Digital Marketing",
    "Photography", "Language Exchange", "Guitar Lessons", "Data Science"
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Skills Exchanged", value: "50,000+", icon: Award },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
    { label: "Trust Score", value: "4.9/5", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">SkillSwap</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How it Works</a>
            <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">Community</a>
          </nav>
          <div className="flex items-center space-x-3">
            <AuthModal mode="login">
              <Button variant="ghost">Sign In</Button>
            </AuthModal>
            <AuthModal mode="register">
              <Button>Get Started</Button>
            </AuthModal>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-4">🚀 Revolutionizing Peer-to-Peer Learning</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Exchange Skills,<br />Transform Lives
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners who share knowledge, build connections, and grow together in our trusted skill-exchange community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <AuthModal mode="register">
              <Button size="lg" className="text-lg px-8">
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </AuthModal>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => navigate('/discovery')}>
              <Search className="w-5 h-5 mr-2" />
              Browse Skills
            </Button>
          </div>
          
          {/* Featured Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {featuredSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SkillSwap?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with community-driven features to create the ultimate learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Credit Banking System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn credits by teaching skills and spend them to learn new ones. No money exchanged, just pure knowledge sharing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  AI-Powered Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our smart algorithms connect you with the perfect learning partners based on skills, location, and availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Trust & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Verified profiles, peer endorsements, and comprehensive rating system ensure safe and quality exchanges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Real-time Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built-in messaging, video calls, and scheduling tools make coordinating skill sessions seamless.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Gamified Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unlock achievements, climb leaderboards, and showcase your expertise with badges and certifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Global Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with learners worldwide, share on social media, and build lasting professional relationships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of passionate learners and start exchanging skills today. It's free, it's fun, and it's transformative.
          </p>
          <AuthModal mode="register">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Join SkillSwap Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </AuthModal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">SkillSwap</span>
          </div>
          <p>&copy; 2024 SkillSwap. Empowering learners worldwide.</p>
        </div>
      </footer>

    </div>
  );
};

export default Index;