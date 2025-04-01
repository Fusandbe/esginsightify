
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: number;
  annualPrice: number;
  monthlySavings: number;
  totalSavings: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  enterprise?: boolean;
  isAnnual?: boolean;
}

const PricingCard = ({
  title,
  price,
  annualPrice,
  monthlySavings,
  totalSavings,
  description,
  features,
  cta,
  popular = false,
  enterprise = false,
  isAnnual = false,
}: PricingCardProps) => {
  return (
    <div className={`relative rounded-lg border ${popular ? 'border-primary shadow-lg' : 'shadow-sm'} bg-card p-6`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex flex-col">
          {isAnnual ? (
            <>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${annualPrice}</span>
                <span className="ml-1 text-muted-foreground">/year</span>
              </div>
              <div className="mt-1 text-sm text-green-600 font-medium">
                Save ${totalSavings}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                ${monthlySavings}/mo billed annually
              </div>
            </>
          ) : (
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">${price}</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
          )}
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

export default PricingCard;
