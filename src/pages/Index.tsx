import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, BookOpen, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">UniVibe</h1>
          <Button 
            variant="outline"
            onClick={() => navigate("/login")}
          >
            Sign In / Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold">
            Connect with Your<br />
            <span className="gradient-text">Campus Community</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-xl">
            UniVibe is your all-in-one platform for campus life. Share experiences, join events,
            and make your university journey unforgettable.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gradient-bg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/lovable-uploads/5bca9310-0ed3-448e-8a15-f6f03e8ed684.png"
            alt="Campus Life"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need for<br />
          <span className="gradient-text">Campus Life</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-card p-6 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Social Connections</h3>
            <p className="text-foreground/70">Connect with fellow students and build lasting friendships</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Event Planning</h3>
            <p className="text-foreground/70">Discover and organize campus events with ease</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Study Groups</h3>
            <p className="text-foreground/70">Find study partners and share academic resources</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Campus Life</h3>
            <p className="text-foreground/70">Stay updated with all things happening on campus</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;