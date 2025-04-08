
import { supabase } from "@/integrations/supabase/client";
import { ToastProps } from "@/hooks/use-toast";

export async function signInWithEmail(
  email: string, 
  password: string, 
  options: { 
    showToast: (props: ToastProps) => void,
    navigate: (path: string) => void,
    setIsLoading: (value: boolean) => void,
  }
) {
  const { showToast, navigate, setIsLoading } = options;
  
  try {
    setIsLoading(true);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign in error details:", error);
      throw error;
    }

    showToast({
      title: "Success",
      description: "You have successfully logged in.",
    });
    navigate("/dashboard");
  } catch (error: any) {
    console.error("Authentication error:", error);
    throw error;
  } finally {
    setIsLoading(false);
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  metadata: { first_name: string; last_name: string },
  options: { 
    showToast: (props: ToastProps) => void,
    navigate: (path: string) => void,
    setIsLoading: (value: boolean) => void,
  }
) {
  const { showToast, navigate, setIsLoading } = options;
  
  try {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });

    if (error) {
      showToast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    showToast({
      title: "Account created",
      description: "Please check your email to confirm your account.",
    });
    navigate("/signin");
  } catch (error) {
    showToast({
      title: "Error",
      description: "An unexpected error occurred. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
}

export async function sendPasswordResetEmail(
  email: string,
  options: { 
    showToast: (props: ToastProps) => void
  }
) {
  const { showToast } = options;
  
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      showToast({
        title: "Password reset failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    showToast({
      title: "Password reset email sent",
      description: "Check your email for the password reset link.",
    });
  } catch (error) {
    showToast({
      title: "Error",
      description: "An unexpected error occurred. Please try again.",
      variant: "destructive",
    });
  }
}
