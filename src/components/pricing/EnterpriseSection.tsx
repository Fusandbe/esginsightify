
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EnterpriseFeature from "./EnterpriseFeature";

const EnterpriseSection = () => {
  return (
    <div className="mt-24 rounded-xl border bg-card p-8 shadow-sm md:p-12">
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold">Need a custom solution?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            We offer tailored ESG assessment solutions for large investment firms with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <Link to="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
        <div className="flex-1 space-y-4">
          <EnterpriseFeature title="Custom Integration" description="Connect with your existing portfolio management systems" />
          <EnterpriseFeature title="Customized Scoring" description="Tailor ESG metrics to your firm's investment thesis" />
          <EnterpriseFeature title="Advanced Analytics" description="Get deeper insights with custom dashboards and reporting" />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSection;
