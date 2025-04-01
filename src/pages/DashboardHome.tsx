
import ESGScoreCard from "@/components/dashboard/ESGScoreCard";
import PortfolioOverviewCard from "@/components/dashboard/PortfolioOverviewCard";
import StartupCard from "@/components/dashboard/StartupCard";
import DocumentUploadCard from "@/components/dashboard/DocumentUploadCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import ESGCategoryBreakdown from "@/components/dashboard/ESGCategoryBreakdown";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  const categoryData = [
    { name: "Environmental", value: 35, color: "#22c55e" },
    { name: "Social", value: 40, color: "#3b82f6" },
    { name: "Governance", value: 25, color: "#f59e0b" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your portfolio's ESG performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Startup
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ESGScoreCard
          title="Overall ESG Score"
          score={72}
          change={4.5}
          description="Based on 12 companies in portfolio"
          color="green"
        />
        <ESGScoreCard
          title="Environmental Score"
          score={68}
          change={7.2}
          description="Carbon footprint, resource usage, policies"
          color="blue"
        />
        <ESGScoreCard
          title="Social Score"
          score={75}
          change={2.8}
          description="Diversity, labor practices, community engagement"
          color="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioOverviewCard />
        </div>
        <div>
          <ESGCategoryBreakdown
            data={categoryData}
            title="ESG Category Breakdown"
            description="Distribution of ESG factors across portfolio"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StartupCard
          name="EcoTech Solutions"
          industry="Cleantech"
          stage="Series A"
          funding="$8.5M"
          founder="Michael Chen"
          location="San Francisco, CA"
          date="Founded 2020"
          esgScore={82}
          onClick={() => navigate("/dashboard/portfolio/ecotech")}
        />
        <StartupCard
          name="FinHealth"
          industry="Fintech"
          stage="Seed"
          funding="$2.2M"
          founder="Sarah Johnson"
          location="Boston, MA"
          date="Founded 2021"
          esgScore={68}
          onClick={() => navigate("/dashboard/portfolio/finhealth")}
        />
        <StartupCard
          name="AI Sustainability"
          industry="AI/ML"
          stage="Series B"
          funding="$15M"
          founder="David Park"
          location="Austin, TX"
          date="Founded 2019"
          esgScore={75}
          onClick={() => navigate("/dashboard/portfolio/aisustainability")}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentUploadCard />
        <RecentActivityCard />
      </div>
    </div>
  );
};

export default DashboardHome;
