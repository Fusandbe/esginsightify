
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface GoogleAuthButtonProps {
  action: "signin" | "signup";
  onError: (error: any, configError?: string, errorDetails?: string) => void;
  isDisabled?: boolean;
}

const GoogleAuthButton = ({ action, onError, isDisabled = false }: GoogleAuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      
      const redirectTo = `${window.location.origin}/dashboard`;
      console.log("Redirecting to:", redirectTo);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectTo
        }
      });
      
      if (error) {
        console.error(`Google ${action} error:`, error);
        setIsLoading(false);
        
        if (error.message.includes('provider is not enabled')) {
          onError(error, null, null);
        } else if (error.message.includes('403')) {
          // Handle 403 error specifically
          onError(error, "403 Forbidden Error", "Your Google OAuth configuration has URI mismatch issues");
        } else {
          onError(error, `${error.message}`, null);
        }
      }
      // No need to set isLoading to false on success as we're redirecting
    } catch (error: any) {
      setIsLoading(false);
      console.error(`Unexpected error during Google ${action}:`, error);
      onError(error, `${error.message || "Unknown error occurred"}`, null);
    }
  };

  return (
    <Button 
      variant="outline" 
      type="button" 
      onClick={handleGoogleAuth}
      disabled={isDisabled || isLoading}
      className="w-full relative"
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></span>
      ) : (
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      )}
      {isLoading ? "Processing..." : `Sign ${action === "signin" ? "in" : "up"} with Google`}
    </Button>
  );
};

export default GoogleAuthButton;
