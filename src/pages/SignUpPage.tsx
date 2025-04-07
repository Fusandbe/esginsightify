
import SignUpForm from "@/components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Join EcoVest
          </h1>
          <p className="text-muted-foreground">
            Create an account to get started
          </p>
        </div>
        <SignUpForm />
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need help setting up Google signup?
            <a 
              href="https://console.cloud.google.com/apis/credentials" 
              target="_blank" 
              rel="noreferrer" 
              className="text-primary hover:underline ml-1">
              Open Google Console
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
