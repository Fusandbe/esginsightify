
import SignInForm from "@/components/auth/SignInForm";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
