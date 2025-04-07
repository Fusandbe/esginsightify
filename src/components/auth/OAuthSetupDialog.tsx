
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface OAuthSetupDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  providerName: string;
  configError: string | null;
  errorDetails: string | null;
}

const OAuthSetupDialog = ({
  isOpen,
  onOpenChange,
  providerName,
  configError,
  errorDetails
}: OAuthSetupDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{configError || `${providerName} Login Not Configured`}</DialogTitle>
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
            >
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="outline" 
            className="bg-primary/5"
            onClick={() => {
              window.open('https://console.cloud.google.com/apis/credentials', '_blank');
            }}
          >
            Open Google Console
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OAuthSetupDialog;
