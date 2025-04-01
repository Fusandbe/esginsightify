
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Shield, LineChart, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Our Mission: Making ESG Accessible for <span className="gradient-heading">Early-Stage Investing</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We're building the tools that help investors identify sustainable, responsible startups
          that will shape a better future while delivering strong returns.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-24 flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            ESGInsightify was founded in 2023 by a team of investors, sustainability experts, and AI engineers who saw a gap in the market: while ESG assessment tools existed for public companies, there was nothing designed specifically for venture capital and angel investors evaluating early-stage companies.
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            Our founding team had experienced firsthand the challenges of evaluating ESG factors in startups with limited operational history, minimal public reporting, and rapidly evolving business models. We knew that traditional ESG methodologies simply didn't work for early-stage investing.
          </p>
          <p className="text-lg text-muted-foreground">
            So we built ESGInsightify—combining advanced AI with specialized ESG frameworks designed specifically for startups—to help investors make more informed decisions, reduce risks, and identify opportunities that others might miss.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/placeholder.svg"
            alt="ESGInsightify Team"
            className="aspect-video w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="Integrity"
            description="We believe in transparent, honest assessments based on data, not opinions. Our scoring methodology is always transparent and explainable."
          />
          <ValueCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Inclusivity"
            description="We design our tools to be accessible and useful for all investors, from solo angels to large VC firms, recognizing the diversity of investment approaches."
          />
          <ValueCard
            icon={<LineChart className="h-8 w-8 text-primary" />}
            title="Innovation"
            description="We're constantly evolving our technology and methodologies to provide the most accurate, relevant ESG insights for early-stage investing."
          />
          <ValueCard
            icon={<Award className="h-8 w-8 text-primary" />}
            title="Impact"
            description="We measure our success not just by our business growth, but by our contribution to more sustainable and responsible investment practices."
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TeamMember
            name="Alex Morgan"
            title="CEO & Co-Founder"
            bio="Former VC partner with 10+ years of experience in sustainable investing. MBA from Stanford with a focus on responsible business practices."
            imageSrc="/placeholder.svg"
          />
          <TeamMember
            name="Sarah Chen"
            title="CTO & Co-Founder"
            bio="AI researcher and engineer with experience at leading tech companies. PhD in Machine Learning with a focus on NLP and document understanding."
            imageSrc="/placeholder.svg"
          />
          <TeamMember
            name="Marcus Johnson"
            title="Head of ESG Research"
            bio="Sustainability expert with background in corporate ESG strategy. Previously led ESG integration at a major asset management firm."
            imageSrc="/placeholder.svg"
          />
          <TeamMember
            name="Priya Patel"
            title="Head of Product"
            bio="Product leader with experience building analytics platforms for financial services. Passionate about making complex data accessible."
            imageSrc="/placeholder.svg"
          />
          <TeamMember
            name="David Kim"
            title="Lead AI Engineer"
            bio="Machine learning specialist focused on building ethical, explainable AI systems. Previously developed ESG data analysis tools for institutional investors."
            imageSrc="/placeholder.svg"
          />
          <TeamMember
            name="Elena Rodriguez"
            title="Head of Customer Success"
            bio="Former investment analyst turned customer advocate. Focused on helping investors get the most value from ESG insights in their decision-making."
            imageSrc="/placeholder.svg"
          />
        </div>
      </div>

      {/* Investors Section */}
      <div className="mb-24">
        <h2 className="mb-8 text-center text-3xl font-bold">Backed By</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <InvestorCard
            name="Green Future Ventures"
            description="Leading climate tech VC firm focused on sustainability solutions"
            imageSrc="/placeholder.svg"
          />
          <InvestorCard
            name="Impact Partners"
            description="Early-stage impact investing fund with focus on tech for good"
            imageSrc="/placeholder.svg"
          />
          <InvestorCard
            name="Tech Horizon Capital"
            description="B2B SaaS specialists with portfolio across fintech and analytics"
            imageSrc="/placeholder.svg"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl bg-muted p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Join Our Mission</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Ready to revolutionize how you evaluate the ESG factors in your investment opportunities?
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/signup">
            <Button size="lg">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Team Member Component
const TeamMember = ({
  name,
  title,
  bio,
  imageSrc,
}: {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <img
        src={imageSrc}
        alt={name}
        className="mb-4 aspect-square w-full rounded-lg object-cover"
      />
      <h3 className="text-xl font-medium">{name}</h3>
      <p className="mb-2 text-sm font-medium text-primary">{title}</p>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  );
};

// Investor Card Component
const InvestorCard = ({
  name,
  description,
  imageSrc,
}: {
  name: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card p-6 shadow-sm">
      <img
        src={imageSrc}
        alt={name}
        className="h-16 w-16 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AboutPage;
