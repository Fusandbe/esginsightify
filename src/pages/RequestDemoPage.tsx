
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, BarChart, Cpu, FileText, LineChart, GitCompare, Shield, Leaf } from "lucide-react";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  position: z.string().min(2, { message: "Position is required." }),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "501+"]),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequestDemoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      companySize: "1-10",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      toast.success("Demo request submitted successfully! Our team will contact you shortly.");
      form.reset();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Experience Our <span className="gradient-heading">AI-Powered ESG Assessment</span> Tool
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          See firsthand how our advanced AI models can transform your investment due diligence 
          process and improve your portfolio's ESG performance.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* Form Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Request a Demo</CardTitle>
              <CardDescription>
                Fill out the form below and our team will contact you to schedule a personalized demonstration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <FormControl>
                            <Input placeholder="Investment Manager" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Size</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="1-10" />
                                </FormControl>
                                <FormLabel className="font-normal">1-10</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="11-50" />
                                </FormControl>
                                <FormLabel className="font-normal">11-50</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="51-200" />
                                </FormControl>
                                <FormLabel className="font-normal">51-200</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="201-500" />
                                </FormControl>
                                <FormLabel className="font-normal">201-500</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="501+" />
                                </FormControl>
                                <FormLabel className="font-normal">501+</FormLabel>
                              </FormItem>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your specific ESG assessment needs or questions..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Demo"} 
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        {/* Info Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Our AI-Powered ESG Assessment Platform</h2>
          
          <p className="text-muted-foreground">
            The ESGInsightify platform leverages seven interconnected AI models to provide comprehensive 
            ESG analysis for early-stage startups, helping VCs and angel investors make better investment decisions.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <ModelCard 
              icon={<FileText className="h-6 w-6 text-primary" />}
              title="ESG Text Classification"
              description="Categorizes text into E, S, G, or non-ESG categories with fine-grained subcategories"
            />
            
            <ModelCard 
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Named Entity Recognition"
              description="Identifies ESG-specific entities like '20% carbon reduction' or 'diverse board'"
            />
            
            <ModelCard 
              icon={<LineChart className="h-6 w-6 text-primary" />}
              title="ESG Sentiment Analysis"
              description="Assesses sentiment of ESG-related content and detects greenwashing"
            />
            
            <ModelCard 
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="ESG Scoring Model"
              description="Generates quantitative ESG scores with sub-scores and confidence intervals"
            />
            
            <ModelCard 
              icon={<Leaf className="h-6 w-6 text-primary" />}
              title="Risk Detection"
              description="Identifies ESG risks and red flags with severity scores"
            />
            
            <ModelCard 
              icon={<Cpu className="h-6 w-6 text-primary" />}
              title="Opportunity Identification"
              description="Highlights ESG strengths and opportunities for growth"
            />
            
            <ModelCard 
              icon={<GitCompare className="h-6 w-6 text-primary" />}
              title="Benchmark & Comparison"
              description="Compares startups to peers with dynamic peer group generation"
            />
          </div>
          
          <div className="mt-4 space-y-4">
            <h3 className="text-xl font-semibold">Key Performance Metrics</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Text classification accuracy: &gt;85% F1 score</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Entity recognition accuracy: &gt;80% F1 score</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Document analysis speed: &lt;30 seconds per pitch deck</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Score correlation with expert ratings: r &gt; 0.8</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Risk detection: &lt;10% false positives, &gt;80% recall</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Demo Preview Section */}
      <div className="mt-24 rounded-xl bg-muted p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">What to Expect in Your Demo</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          During your personalized demo, our team will show you how ESGInsightify can:
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          <DemoFeature 
            number="1"
            title="Analyze Your Documents"
            description="Upload pitch decks, financial reports, and other documents for instant ESG analysis."
          />
          
          <DemoFeature 
            number="2"
            title="Generate ESG Scores"
            description="See how our AI models generate comprehensive ESG scores with detailed breakdowns."
          />
          
          <DemoFeature 
            number="3"
            title="Identify Risks & Opportunities"
            description="Discover potential ESG risks and opportunities in your investment portfolio."
          />
        </div>
        
        <Button size="lg" className="mt-8">
          Request Your Demo Today <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Model Card Component
const ModelCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="rounded-md bg-primary/10 p-2 text-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Demo Feature Component
const DemoFeature = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default RequestDemoPage;
