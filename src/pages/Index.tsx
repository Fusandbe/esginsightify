
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  useEffect(() => {
    // Check for auth session in URL on initial page load
    // This helps with OAuth redirects to ensure they're properly handled
    const checkForSession = async () => {
      const { error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking session:", error);
      }
    };

    checkForSession();
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;
