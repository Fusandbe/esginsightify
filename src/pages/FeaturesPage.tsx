
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Advanced ESG Analytics for <span className="gradient-heading">Smart Investing</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Our AI-powered platform provides deep ESG insights for VCs and angel investors,
          helping you make better investment decisions and manage portfolio risk.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">
              Start Free Trial <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="AI-Powered ESG Assessment"
          description="Our advanced AI analyzes multiple data sources to provide comprehensive ESG scores for startups at any stage."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2H2v10h10V2Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-5v5h5V2Z"/><path d="M22 12h-5v10h5V12Z"/><path d="M17 7h-5v5h5V7Z"/></svg>
          </div>}
        />
        <FeatureCard
          title="Document Processing"
          description="Upload pitch decks, financial reports, and other documents for instant ESG analysis and scoring."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13v-1h4v1"/><path d="M10 17v-1h4v1"/><path d="M10 9v1"/></svg>
          </div>}
        />
        <FeatureCard
          title="Risk Identification"
          description="Automatically identify ESG risks and red flags in potential investments before they become problems."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          </div>}
        />
        <FeatureCard
          title="Continuous Monitoring"
          description="Track ESG performance over time with automated alerts for significant changes or emerging issues."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
          </div>}
        />
        <FeatureCard
          title="Benchmarking & Comparison"
          description="Compare startups against industry peers, best practices, and your own portfolio benchmarks."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="8" y1="21" y2="17"/><line x1="16" x2="16" y1="21" y2="17"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M7 10h2v4H7z"/><path d="M11 7h2v7h-2z"/><path d="M15 12h2v2h-2z"/></svg>
          </div>}
        />
        <FeatureCard
          title="Custom Reporting"
          description="Generate detailed ESG reports for LPs, stakeholders, and internal use with flexible templates."
          icon={<div className="rounded-lg bg-primary/10 p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          </div>}
        />
      </div>

      {/* Detailed Feature Sections */}
      <div className="space-y-32">
        <FeatureSection
          title="AI-Powered ESG Analysis"
          description="Our advanced machine learning models analyze multiple data sources to provide comprehensive ESG assessments for startups at any stage."
          image="/placeholder.svg"
          imageAlt="AI-Powered ESG Analysis"
          reversed={false}
          features={[
            "Environmental impact assessment",
            "Social responsibility evaluation",
            "Governance structure analysis",
            "Risk identification and scoring",
            "Opportunity recognition"
          ]}
        />
        
        <FeatureSection
          title="Comprehensive Portfolio Management"
          description="Track, manage, and optimize your entire investment portfolio with powerful ESG insights and analytics."
          image="/placeholder.svg"
          imageAlt="Portfolio Management"
          reversed={true}
          features={[
            "Portfolio-wide ESG scoring",
            "Company comparison tools",
            "Progress tracking over time",
            "Custom tags and organization",
            "Detailed company profiles"
          ]}
        />
        
        <FeatureSection
          title="Document Processing & Data Extraction"
          description="Upload company documents for automatic processing and ESG analysis, saving you hours of manual review."
          image="/placeholder.svg"
          imageAlt="Document Processing"
          reversed={false}
          features={[
            "Pitch deck analysis",
            "Financial report processing",
            "Policy document evaluation",
            "OCR for image-based content",
            "Automatic text extraction"
          ]}
        />
      </div>

      {/* CTA Section */}
      <div className="mt-24 rounded-xl bg-muted p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to enhance your ESG due diligence?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Join leading VCs and angel investors who use ESGInsightify to make smarter, more sustainable investment decisions.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/signup">
            <Button size="lg">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Feature Section Component
const FeatureSection = ({
  title,
  description,
  image,
  imageAlt,
  reversed,
  features,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed: boolean;
  features: string[];
}) => {
  return (
    <div className={`flex flex-col gap-8 md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mb-6 text-lg text-muted-foreground">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeaturesPage;
