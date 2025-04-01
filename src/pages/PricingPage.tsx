
import { useState } from "react";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingCards from "@/components/pricing/PricingCards";
import EnterpriseSection from "@/components/pricing/EnterpriseSection";
import FaqSection from "@/components/pricing/FaqSection";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsAnnual(value);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <PricingHeader />

      {/* Pricing Toggle */}
      <div className="mb-8">
        <PricingToggle isAnnual={isAnnual} onToggle={handleToggle} />
      </div>

      {/* Pricing Cards */}
      <PricingCards isAnnual={isAnnual} />

      {/* Enterprise Section */}
      <EnterpriseSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default PricingPage;
