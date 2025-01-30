import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Apple, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication will be added once Supabase is connected
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-8 bg-card">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Welcome Back!</h1>
          <p className="text-secondary-foreground">Sign in to continue to UniVibe</p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-between"
            onClick={() => console.log("Google login")}
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button 
            variant="outline" 
            className="w-full justify-between"
            onClick={() => console.log("Apple login")}
          >
            <Apple className="w-5 h-5" />
            <span>Continue with Apple</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-muted"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-muted"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button 
              type="button" 
              variant="link" 
              className="px-0"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </Button>
            <Button 
              type="button" 
              variant="link" 
              className="px-0"
              onClick={() => navigate("/register")}
            >
              Create account
            </Button>
          </div>
          <Button type="submit" className="w-full gradient-bg">
            <Mail className="mr-2 h-4 w-4" /> Sign in with Email
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;