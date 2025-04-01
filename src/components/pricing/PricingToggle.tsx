
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

const PricingToggle = ({ isAnnual, onToggle }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Monthly
      </span>
      <Switch 
        checked={isAnnual} 
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`font-medium flex items-center gap-2 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Annual 
        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
          Save 15%
        </span>
      </span>
    </div>
  );
};

export default PricingToggle;
