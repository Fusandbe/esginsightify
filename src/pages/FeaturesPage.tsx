
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FeaturesPage = () => {
  const { toast } = useToast();

  const showFeaturePreview = (feature: string) => {
    toast({
      title: "Feature Preview",
      description: `${feature} preview coming soon!`,
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section with enhanced design */}
      <div className="mb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
        </div>
        
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Powered by AI
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Advanced ESG Analytics for <span className="gradient-heading">Smart Investing</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Our AI-powered platform provides deep ESG insights for VCs and angel investors,
            helping you make better investment decisions and manage portfolio risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md group transition-all duration-300 h-12">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg" className="border-primary/20 bg-background/50 backdrop-blur-sm h-12">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Key Features Grid with enhanced styling */}
      <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="AI-Powered ESG Assessment"
          description="Our advanced AI analyzes multiple data sources to provide comprehensive ESG scores for startups at any stage."
          icon={<div className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2H2v10h10V2Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-5v5h5V2Z"/><path d="M22 12h-5v10h5V12Z"/><path d="M17 7h-5v5h5V7Z"/></svg>
          </div>}
          onClick={() => showFeaturePreview("AI-Powered ESG Assessment")}
        />
        <FeatureCard
          title="Document Processing"
          description="Upload pitch decks, financial reports, and other documents for instant ESG analysis and scoring."
          icon={<div className="rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 p-3 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13v-1h4v1"/><path d="M10 17v-1h4v1"/><path d="M10 9v1"/></svg>
          </div>}
          onClick={() => showFeaturePreview("Document Processing")}
        />
        <FeatureCard
          title="Risk Identification"
          description="Automatically identify ESG risks and red flags in potential investments before they become problems."
          icon={<div className="rounded-lg bg-gradient-to-br from-esg-amber-400/20 to-esg-amber-400/5 p-3 text-esg-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          </div>}
          onClick={() => showFeaturePreview("Risk Identification")}
        />
        <FeatureCard
          title="Continuous Monitoring"
          description="Track ESG performance over time with automated alerts for significant changes or emerging issues."
          icon={<div className="rounded-lg bg-gradient-to-br from-esg-green-500/20 to-esg-green-500/5 p-3 text-esg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
          </div>}
          onClick={() => showFeaturePreview("Continuous Monitoring")}
        />
        <FeatureCard
          title="Benchmarking & Comparison"
          description="Compare startups against industry peers, best practices, and your own portfolio benchmarks."
          icon={<div className="rounded-lg bg-gradient-to-br from-esg-blue-500/20 to-esg-blue-500/5 p-3 text-esg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="8" y1="21" y2="17"/><line x1="16" x2="16" y1="21" y2="17"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M7 10h2v4H7z"/><path d="M11 7h2v7h-2z"/><path d="M15 12h2v2h-2z"/></svg>
          </div>}
          onClick={() => showFeaturePreview("Benchmarking & Comparison")}
        />
        <FeatureCard
          title="Custom Reporting"
          description="Generate detailed ESG reports for LPs, stakeholders, and internal use with flexible templates."
          icon={<div className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          </div>}
          onClick={() => showFeaturePreview("Custom Reporting")}
        />
      </div>

      {/* Detailed Feature Sections with improved visuals */}
      <div className="space-y-40">
        <FeatureSection
          title="AI-Powered ESG Analysis"
          description="Our advanced machine learning models analyze multiple data sources to provide comprehensive ESG assessments for startups at any stage."
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&auto=format&fit=crop&q=80"
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
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
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
          image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=80"
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

      {/* CTA Section with premium design */}
      <div className="mt-32 rounded-xl bg-gradient-to-br from-background to-muted border border-primary/10 backdrop-blur-sm p-12 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
        </div>
        <div className="relative">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to enhance your ESG due diligence?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join leading VCs and angel investors who use ESGInsightify to make smarter, more sustainable investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md group transition-all duration-300 h-12">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-primary/20 bg-background/50 backdrop-blur-sm h-12">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component with enhanced styling
const FeatureCard = ({ 
  title, 
  description, 
  icon,
  onClick
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div 
      className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Feature Section Component with improved visuals
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
    <div className={`flex flex-col gap-12 md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mb-8 text-lg text-muted-foreground">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-md">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 transition-all duration-500 hover:scale-[1.02]">
        <div className="relative overflow-hidden rounded-xl border shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-60 z-10"></div>
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
