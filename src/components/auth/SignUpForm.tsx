
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, User, Sparkles, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [setupDialogOpen, setSetupDialogOpen] = useState(false);
  const [providerName, setProviderName] = useState<string>("");
  const [configError, setConfigError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Split name into first and last name for profile
      const nameParts = name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      await signUp(email, password, { first_name: firstName, last_name: lastName });
      
      toast({
        title: "Account created",
        description: "You have successfully created an account. Please check your email to verify your account.",
      });
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setProviderName('Google');
      setConfigError(null);
      setErrorDetails(null);
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
        console.error(`Google sign up error:`, error);
        setIsLoading(false);
        
        if (error.message.includes('provider is not enabled')) {
          setSetupDialogOpen(true);
        } else if (error.message.includes('403')) {
          // Handle 403 error specifically
          setConfigError("403 Forbidden Error");
          setErrorDetails("Your Google OAuth configuration has URI mismatch issues");
          setSetupDialogOpen(true);
        } else {
          setConfigError(`${error.message}`);
          toast({
            title: "Google Sign Up Failed",
            description: error.message,
            variant: "destructive",
          });
        }
      }
      // No need to set isGoogleLoading to false on success as we're redirecting
    } catch (error: any) {
      setIsLoading(false);
      console.error('Unexpected error during Google sign up:', error);
      setConfigError(`${error.message || "Unknown error occurred"}`);
      toast({
        title: "Authentication Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Card className="mx-auto max-w-md relative overflow-hidden glow-border bg-background/70 backdrop-blur-md">
        {/* Premium decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        
        <CardHeader className="space-y-1 relative">
          <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary/70 animate-pulse-slow" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Create an account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {configError && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Authentication Error</AlertTitle>
              <AlertDescription>
                {configError}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-primary" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/90">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground/90">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-primary" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long with 1 uppercase, 1 lowercase and 1 number.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm font-normal text-foreground/90">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Button type="submit" className="w-full premium-button" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-4 flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <div className="mt-4">
            <Button 
              variant="outline" 
              type="button" 
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="w-full border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
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
              Sign up with Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-muted-foreground w-full">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>

      <Dialog open={setupDialogOpen} onOpenChange={setSetupDialogOpen}>
        <DialogContent className="sm:max-w-md glass-effect">
          <DialogHeader>
            <DialogTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{configError || `${providerName} Login Not Configured`}</DialogTitle>
            <DialogDescription className="space-y-3 pt-4">
              {errorDetails && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>
                    {errorDetails}
                  </AlertDescription>
                </Alert>
              )}
              <p>
                You need to configure the {providerName} OAuth provider correctly in both Supabase and Google Cloud Console.
              </p>
              <p className="font-medium">Complete configuration steps:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Go to the Supabase dashboard Authentication &gt; Providers</li>
                <li>Ensure the Google provider is enabled with your OAuth credentials</li>
                <li>Go to Google Cloud Console &gt; APIs &amp; Services &gt; Credentials</li>
                <li>Edit your OAuth 2.0 Client ID</li>
                <li><strong>Add both of these URLs as Authorized JavaScript origins:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><code className="bg-muted p-1 rounded text-xs">{window.location.origin}</code></li>
                    <li><code className="bg-muted p-1 rounded text-xs">https://tpmgctkizfvcxdaqptfh.supabase.co</code></li>
                  </ul>
                </li>
                <li><strong>Add both of these URLs as Authorized redirect URIs:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><code className="bg-muted p-1 rounded text-xs">{window.location.origin}/dashboard</code></li>
                    <li><code className="bg-muted p-1 rounded text-xs">https://tpmgctkizfvcxdaqptfh.supabase.co/auth/v1/callback</code></li>
                  </ul>
                </li>
                <li>In Supabase Authentication settings, set your site URL to: <code className="bg-muted p-1 rounded text-xs">{window.location.origin}</code></li>
                <li>Wait a few minutes for changes to propagate after saving</li>
              </ol>
              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-md">
                <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">Fixing 403 errors:</p>
                <ul className="list-disc pl-5 mt-1 text-sm text-amber-700 dark:text-amber-400">
                  <li>403 errors occur when the redirect URI or JavaScript origin doesn't match exactly</li>
                  <li>Make sure to add <strong>both</strong> your app URL and the Supabase callback URL</li>
                  <li>There must be <strong>no trailing slash</strong> in JavaScript origins</li>
                  <li>Check for typos and exact matches in all URLs</li>
                  <li>Remember that changes can take up to 5-10 minutes to propagate</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-between">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="glow-border"
              >
                Close
              </Button>
            </DialogClose>
            <Button
              type="button"
              variant="outline"
              className="glow-border bg-primary/5"
              onClick={() => {
                window.open('https://console.cloud.google.com/apis/credentials', '_blank');
              }}
            >
              Open Google Console
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignUpForm;
