
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, FileText, BarChart3, Upload, AlertTriangle } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "alert" | "document" | "score" | "upload";
  title: string;
  description: string;
  time: string;
  user?: {
    name: string;
    avatar?: string;
    initials: string;
  };
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "alert",
    title: "Risk Alert",
    description: "Potential governance issue detected for EcoTech Solutions",
    time: "10 minutes ago",
  },
  {
    id: "2",
    type: "document",
    title: "New Report Available",
    description: "Quarterly ESG analysis report is now available",
    time: "1 hour ago",
  },
  {
    id: "3",
    type: "score",
    title: "Score Update",
    description: "GreenMobility's environmental score increased by 12 points",
    time: "3 hours ago",
  },
  {
    id: "4",
    type: "upload",
    title: "Documents Uploaded",
    description: "5 new documents uploaded for ClimateFin",
    time: "Yesterday",
    user: {
      name: "Sarah Johnson",
      initials: "SJ",
    },
  },
  {
    id: "5",
    type: "alert",
    title: "Opportunity Identified",
    description: "Positive social impact initiative detected for HealthAI",
    time: "Yesterday",
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "alert":
      return <AlertTriangle className="h-5 w-5 text-esg-amber-500" />;
    case "document":
      return <FileText className="h-5 w-5 text-esg-blue-500" />;
    case "score":
      return <BarChart3 className="h-5 w-5 text-esg-green-500" />;
    case "upload":
      return <Upload className="h-5 w-5 text-accent" />;
    default:
      return <Bell className="h-5 w-5 text-muted-foreground" />;
  }
};

const RecentActivityCard = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>Latest updates from your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div className="mt-0.5">{getActivityIcon(activity.type)}</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{activity.title}</p>
                  {activity.user && (
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={activity.user.avatar} />
                      <AvatarFallback className="text-[10px]">
                        {activity.user.initials}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
