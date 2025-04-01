
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Choose the plan that's right for your investment strategy. All plans include a 14-day free trial.
        </p>
      </div>

      {/* Pricing Toggle - Add functionality later if needed */}
      <div className="mb-8 flex justify-center gap-4">
        <span className="font-medium">Monthly</span>
        <div className="relative inline-flex h-6 w-12 items-center rounded-full bg-muted">
          <span className="absolute h-4 w-4 transform rounded-full bg-background transition-transform"></span>
        </div>
        <span className="font-medium">Annual <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">Save 15%</span></span>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        <PricingCard
          title="Solo Angels"
          price={199}
          description="Perfect for individual angel investors"
          features={[
            "Up to 10 startups in portfolio",
            "Basic ESG scoring",
            "Document uploads (20/month)",
            "Standard support (24-hour response)",
            "1 user account",
            "Basic export options"
          ]}
          cta="Start Free Trial"
          popular={false}
        />
        <PricingCard
          title="Mid-Size VCs"
          price={799}
          description="Ideal for small to medium VC firms"
          features={[
            "Up to 50 startups in portfolio",
            "Advanced ESG scoring and breakdowns",
            "Document uploads (100/month)",
            "Priority support (8-hour response)",
            "5 user accounts",
            "Advanced export options",
            "Custom tags and filtering",
            "API access (limited)"
          ]}
          cta="Start Free Trial"
          popular={true}
        />
        <PricingCard
          title="Enterprise VCs"
          price={3000}
          description="For established VC firms with extensive portfolios"
          features={[
            "Unlimited startups",
            "Comprehensive ESG analysis",
            "Unlimited document uploads",
            "Premium support with dedicated manager",
            "Unlimited user accounts",
            "White-labeled reports",
            "Full API access",
            "Custom integrations",
            "Advanced benchmarking",
            "Historical trend analysis",
            "Predictive risk modeling"
          ]}
          cta="Contact Sales"
          popular={false}
          enterprise={true}
        />
      </div>

      {/* Enterprise Section */}
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

      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FaqItem
            question="How does the 14-day free trial work?"
            answer="You can sign up for any plan without providing credit card information. You'll have full access to all features in your chosen plan for 14 days. At the end of the trial, you can choose to subscribe or your account will be downgraded to a limited version."
          />
          <FaqItem
            question="Can I change plans later?"
            answer="Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the end of your current billing cycle."
          />
          <FaqItem
            question="What payment methods do you accept?"
            answer="We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also offer invoice-based payments."
          />
          <FaqItem
            question="Is there a discount for annual billing?"
            answer="Yes, we offer a 15% discount for annual billing on all plans. This is automatically applied when you select the annual billing option."
          />
          <FaqItem
            question="How do you handle my data?"
            answer="We take data security very seriously. All your data is encrypted both in transit and at rest. We never share your data with third parties without your explicit consent. For more information, please see our Privacy Policy."
          />
          <FaqItem
            question="What kind of support is included?"
            answer="All plans include email support with varying response times. The Mid-Size VC plan includes priority support with 8-hour response times. The Enterprise plan includes a dedicated account manager for personalized support."
          />
        </div>
      </div>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({
  title,
  price,
  description,
  features,
  cta,
  popular = false,
  enterprise = false,
}: {
  title: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  enterprise?: boolean;
}) => {
  return (
    <div className={`relative rounded-lg border ${popular ? 'border-primary shadow-lg' : 'shadow-sm'} bg-card p-6`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">${price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 mt-1">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={enterprise ? "/contact" : "/signup"} className="block w-full">
        <Button variant={popular ? "default" : "outline"} className="w-full">
          {cta}
        </Button>
      </Link>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-medium">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

// Enterprise Feature Component
const EnterpriseFeature = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
        <Check className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default PricingPage;
