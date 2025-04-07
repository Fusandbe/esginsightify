
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/providers/AuthProvider";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signIn(email, password);
      // Note: Navigation and toast are handled in the AuthProvider's signIn method
    } catch (error: any) {
      console.error("Sign in error:", error);
      toast({
        title: "Authentication Error",
        description: error.message || "An unexpected error occurred during sign in.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignIn, isLoading };
};

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signUp } = useAuth();

  const handleSignUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      
      // Split name into first and last name for profile
      const nameParts = name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      await signUp(email, password, { first_name: firstName, last_name: lastName });
      
      toast({
        title: "Account created",
        description: "You have successfully created an account. Please check your email to verify your account.",
      });
      
      return true;
    } catch (error: any) {
      console.error("Sign up error:", error);
      
      // Handle specific error cases
      if (error.message?.includes("User already registered")) {
        toast({
          title: "Email already in use",
          description: "This email is already registered. Please sign in instead.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error?.message || "An error occurred during sign up. Please try again.",
          variant: "destructive",
        });
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignUp, isLoading };
};
