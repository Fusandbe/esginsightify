
import PricingCard from "./PricingCard";

interface PricingCardsProps {
  isAnnual: boolean;
}

const PricingCards = ({ isAnnual }: PricingCardsProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <PricingCard
        title="Solo Angels"
        price={199}
        annualPrice={2030}
        monthlySavings={169}
        totalSavings={358}
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
        isAnnual={isAnnual}
      />
      <PricingCard
        title="Mid-Size VCs"
        price={799}
        annualPrice={8150}
        monthlySavings={679}
        totalSavings={1438}
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
        isAnnual={isAnnual}
      />
      <PricingCard
        title="Enterprise VCs"
        price={3000}
        annualPrice={30600}
        monthlySavings={2550}
        totalSavings={5400}
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
        isAnnual={isAnnual}
      />
    </div>
  );
};

export default PricingCards;
