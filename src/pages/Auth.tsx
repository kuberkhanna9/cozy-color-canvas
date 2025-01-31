import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (isSignUp: boolean) => {
    try {
      setIsLoading(true);
      const { error } = isSignUp 
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      if (isSignUp) {
        toast.success("Check your email for the confirmation link!");
      } else {
        toast.success("Successfully signed in!");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Welcome</h1>
          <p className="text-secondary-foreground">Sign in to continue</p>
        </div>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          
          <div className="space-y-2">
            <Button 
              className="w-full" 
              onClick={() => handleAuth(false)}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleAuth(true)}
              disabled={isLoading}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Auth;