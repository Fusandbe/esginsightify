
import { Check } from "lucide-react";

interface EnterpriseFeatureProps {
  title: string;
  description: string;
}

const EnterpriseFeature = ({ title, description }: EnterpriseFeatureProps) => {
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

export default EnterpriseFeature;
