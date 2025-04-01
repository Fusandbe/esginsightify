
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ESGScoreCardProps {
  title: string;
  score: number;
  change: number;
  description: string;
  color: "green" | "blue" | "amber" | "red";
}

const ESGScoreCard = ({ title, score, change, description, color }: ESGScoreCardProps) => {
  const colorClasses = {
    green: "text-esg-green-600",
    blue: "text-esg-blue-600",
    amber: "text-esg-amber-600",
    red: "text-esg-red-600",
  };

  const bgColorClasses = {
    green: "bg-esg-green-600",
    blue: "bg-esg-blue-600",
    amber: "bg-esg-amber-600",
    red: "bg-esg-red-600",
  };

  const bgLightColorClasses = {
    green: "bg-esg-green-100",
    blue: "bg-esg-blue-100",
    amber: "bg-esg-amber-100",
    red: "bg-esg-red-100",
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="flex items-baseline justify-between">
          <span className={cn("text-2xl font-bold", colorClasses[color])}>
            {score}
          </span>
          <div className="flex items-center gap-1 text-sm">
            {change > 0 ? (
              <TrendingUp className="h-4 w-4 text-esg-green-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-esg-red-600" />
            )}
            <span
              className={
                change > 0 ? "text-esg-green-600" : "text-esg-red-600"
              }
            >
              {change > 0 ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={cn("h-2 w-full rounded-full", bgLightColorClasses[color])}>
          <div
            className={cn("h-2 rounded-full", bgColorClasses[color])}
            style={{ width: `${score}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ESGScoreCard;
