
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  useEffect(() => {
    // More efficient session check that doesn't block rendering
    const checkForSession = async () => {
      await supabase.auth.getSession();
    };

    checkForSession();
  }, []);

  return <Navigate to="/" replace />;
};

export default Index;
