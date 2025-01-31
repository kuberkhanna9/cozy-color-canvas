import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">UniVibe</h1>
          <Button 
            variant="outline"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;