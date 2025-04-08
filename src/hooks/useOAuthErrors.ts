
import { useState } from "react";
import { useToast, type Toast } from "@/hooks/use-toast";

export const useOAuthErrors = () => {
  const [setupDialogOpen, setSetupDialogOpen] = useState(false);
  const [providerName, setProviderName] = useState<string>("");
  const [configError, setConfigError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOAuthError = (error: any, customConfigError?: string | null, customErrorDetails?: string | null) => {
    if (error.message.includes('provider is not enabled')) {
      setProviderName('Google');
      setConfigError(null);
      setErrorDetails(null);
      setSetupDialogOpen(true);
    } else if (error.message.includes('403')) {
      setConfigError("403 Forbidden Error");
      setErrorDetails(customErrorDetails || "Your Google OAuth configuration has URI mismatch issues");
      setProviderName('Google');
      setSetupDialogOpen(true);
    } else {
      setConfigError(customConfigError || `${error.message}`);
      toast({
        title: "Authentication Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return {
    setupDialogOpen,
    setSetupDialogOpen,
    providerName,
    configError,
    errorDetails,
    handleOAuthError
  };
};

export default useOAuthErrors;
