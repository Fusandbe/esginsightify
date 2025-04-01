
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ChevronRight, 
  Leaf, 
  Users, 
  Shield, 
  TrendingUp, 
  BarChart, 
  Search,
  FileText,
  Bell,
  CheckCircle2
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esg-green-50 to-esg-blue-50 dark:from-esg-green-900/20 dark:to-esg-blue-900/20" />
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-heading mb-6">
              AI-Powered ESG Assessment for Smart Investments
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help your VC firm or angel investments make better decisions with comprehensive ESG analysis tailored for early-stage companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="h-12 px-8">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-esg-green-500 to-esg-blue-500 blur-md opacity-25"></div>
            <div className="relative rounded-xl border bg-card shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80" 
                alt="ESG Dashboard Preview" 
                className="w-full h-auto max-w-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">ESG Insights that Drive Value</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our comprehensive platform helps investors assess, track, and improve the ESG performance of their portfolio companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center border">
              <div className="h-14 w-14 rounded-full bg-esg-green-100 dark:bg-esg-green-900/20 flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-esg-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Analysis</h3>
              <p className="text-muted-foreground">
                Assess carbon footprint, resource usage, waste management, and environmental policies to identify risks and opportunities.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center border">
              <div className="h-14 w-14 rounded-full bg-esg-blue-100 dark:bg-esg-blue-900/20 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-esg-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
              <p className="text-muted-foreground">
                Evaluate diversity & inclusion, labor practices, community engagement, and data privacy protocols.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center border">
              <div className="h-14 w-14 rounded-full bg-esg-amber-100 dark:bg-esg-amber-900/20 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-esg-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Governance Oversight</h3>
              <p className="text-muted-foreground">
                Review board composition, transparency practices, business ethics, and risk management frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How ESGInsightify Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI-powered platform transforms complex data into actionable ESG insights in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 relative">
                <span className="text-primary-foreground font-bold">1</span>
                <div className="absolute right-0 top-1/2 h-0.5 w-full translate-x-full -translate-y-1/2 bg-primary hidden md:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
              <p className="text-muted-foreground">
                Upload pitch decks, financial reports, and other company documents for analysis.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 relative">
                <span className="text-primary-foreground font-bold">2</span>
                <div className="absolute right-0 top-1/2 h-0.5 w-full translate-x-full -translate-y-1/2 bg-primary hidden md:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI analyzes documents, news, social media, and other data sources.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 relative">
                <span className="text-primary-foreground font-bold">3</span>
                <div className="absolute right-0 top-1/2 h-0.5 w-full translate-x-full -translate-y-1/2 bg-primary hidden md:block"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Generate Scores</h3>
              <p className="text-muted-foreground">
                Receive comprehensive ESG scores with detailed breakdowns by component.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Act on Insights</h3>
              <p className="text-muted-foreground">
                Use actionable insights to improve portfolio company ESG performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform delivers tangible value to VCs and angel investors focused on sustainable investing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Reduce Investment Risk</h3>
                <p className="text-muted-foreground">
                  Identify ESG risks before they impact company performance and valuation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Align with LP Mandates</h3>
                <p className="text-muted-foreground">
                  Meet increasing LP demands for ESG considerations in investment decisions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Enhance Due Diligence</h3>
                <p className="text-muted-foreground">
                  Complement financial analysis with comprehensive ESG assessment.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Portfolio Monitoring</h3>
                <p className="text-muted-foreground">
                  Track ESG performance over time and identify improvement opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Identify Opportunities</h3>
                <p className="text-muted-foreground">
                  Discover companies with strong ESG practices that may outperform peers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Streamlined Reporting</h3>
                <p className="text-muted-foreground">
                  Generate professional ESG reports for LPs, boards, and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Investment Strategy?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Join forward-thinking investors who use ESGInsightify to make more informed, sustainable investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="h-12 px-8">
                  Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
