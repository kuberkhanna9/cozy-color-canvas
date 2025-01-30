import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowRight, BookOpen, Users, Calendar, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect with Your
              <span className="gradient-text block">Campus Community</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              UniVibe is your all-in-one platform for campus life. Share experiences, join events, and make your university journey unforgettable.
            </p>
            <div className="flex gap-4">
              <Button className="gradient-bg text-lg px-8">Get Started</Button>
              <Button variant="outline" className="text-lg px-8">Learn More</Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Students collaborating"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything You Need for
          <span className="gradient-text block">Campus Life</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 bg-card hover:bg-card/80 transition-colors">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Feed</h3>
            <p className="text-foreground/70">Share updates, photos, and stay connected with your campus community.</p>
          </Card>
          <Card className="p-6 bg-card hover:bg-card/80 transition-colors">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Event Hosting</h3>
            <p className="text-foreground/70">Create and discover campus events, from study groups to social gatherings.</p>
          </Card>
          <Card className="p-6 bg-card hover:bg-card/80 transition-colors">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resource Sharing</h3>
            <p className="text-foreground/70">Exchange study materials and collaborate on academic projects.</p>
          </Card>
          <Card className="p-6 bg-card hover:bg-card/80 transition-colors">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mental Health</h3>
            <p className="text-foreground/70">Access resources and connect with support groups on campus.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Your Campus Community?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Get started with UniVibe today and make the most of your university experience.
            </p>
            <Button className="gradient-bg text-lg px-8 py-6">
              Join UniVibe Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;