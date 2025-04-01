
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, DollarSign, User, MapPin } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StartupCardProps {
  name: string;
  industry: string;
  stage: string;
  funding: string;
  founder: string;
  location: string;
  date: string;
  esgScore: number;
  onClick?: () => void;
}

const StartupCard = ({
  name,
  industry,
  stage,
  funding,
  founder,
  location,
  date,
  esgScore,
  onClick,
}: StartupCardProps) => {
  // Determine badge color based on stage
  const stageBadgeColor = () => {
    switch (stage.toLowerCase()) {
      case "seed":
        return "bg-esg-amber-500 hover:bg-esg-amber-600";
      case "series a":
        return "bg-esg-blue-500 hover:bg-esg-blue-600";
      case "series b":
        return "bg-esg-green-500 hover:bg-esg-green-600";
      case "growth":
        return "bg-esg-green-700 hover:bg-esg-green-800";
      default:
        return "bg-muted";
    }
  };

  // Determine score color
  const scoreColor = () => {
    if (esgScore >= 80) return "text-esg-green-600";
    if (esgScore >= 60) return "text-esg-blue-600";
    if (esgScore >= 40) return "text-esg-amber-600";
    return "text-esg-red-600";
  };

  // Determine progress color
  const progressColor = () => {
    if (esgScore >= 80) return "bg-esg-green-600";
    if (esgScore >= 60) return "bg-esg-blue-600";
    if (esgScore >= 40) return "bg-esg-amber-600";
    return "bg-esg-red-600";
  };

  return (
    <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <Badge className={stageBadgeColor()}>{stage}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <Badge variant="outline">{industry}</Badge>
          <div className="flex items-center gap-1">
            <span className={`font-bold ${scoreColor()}`}>{esgScore}</span>
            <span className="text-xs text-muted-foreground">ESG Score</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <User className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{founder}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{funding}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">ESG Score</span>
            <span className={`text-xs font-medium ${scoreColor()}`}>{esgScore}%</span>
          </div>
          <Progress value={esgScore} className="h-1.5 bg-muted" indicatorClassName={progressColor()} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupCard;
