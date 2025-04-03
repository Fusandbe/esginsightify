
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, 
  Sparkles, 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  LineChart, 
  LineUp, 
  PieChart, 
  RefreshCw, 
  Scan, 
  Shield, 
  Zap, 
  Rocket,
  LightbulbIcon
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  jobTitle: z.string().optional(),
  companySize: z.string(),
  message: z.string().optional(),
});

const RequestDemoPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Demo request submitted!",
      description: "We'll contact you soon to schedule your personalized demo.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl lg:text-6xl">
          <span className="gradient-heading">Request a Demo</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how our AI-powered ESG assessment tool can enhance your investment due diligence process.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 md:gap-16">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview" className="text-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="models" className="text-sm">
                <Brain className="mr-2 h-4 w-4" />
                AI Models
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="space-y-5 bg-gradient-to-b from-card to-background p-6 rounded-xl border shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">ESG Assessment Tool</h3>
                </div>
                <p className="text-muted-foreground">Our AI-powered ESG assessment tool helps VCs and angel investors evaluate startups based on Environmental, Social, and Governance factors.</p>
                
                <ul className="space-y-3 mt-5">
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Analyze startup pitch decks, business plans, and public content</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Generate comprehensive ESG scores with detailed breakdowns</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Identify ESG-related risks and opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Track ESG performance over time</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>Benchmark startups against industry peers</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Why Choose Our Tool?
                </h3>
                <p className="mb-6 text-muted-foreground">Our platform is specifically designed for early-stage investments with:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="overflow-hidden border-t-4 border-t-esg-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2 bg-gradient-to-r from-card to-background">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <LineUp className="h-5 w-5 text-esg-green-500" />
                        Startup Focus
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm">Tailored specifically for evaluating early-stage companies</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-t-4 border-t-esg-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2 bg-gradient-to-r from-card to-background">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-esg-blue-500" />
                        Quick Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm">Get results in minutes, not days or weeks</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-t-4 border-t-esg-amber-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2 bg-gradient-to-r from-card to-background">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-esg-amber-500" />
                        High Accuracy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm">Over 85% accuracy in ESG factor identification</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-2 bg-gradient-to-r from-card to-background">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-primary" />
                        Comprehensive View
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm">Evaluate E, S, and G factors with detailed breakdowns</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="models" className="space-y-6 mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our AI Models</h3>
              </div>
              <p className="mb-6 text-muted-foreground">Our platform leverages 7 interconnected ML and NLP models to provide comprehensive ESG insights:</p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <Scan className="h-5 w-5 text-esg-blue-600" />
                      <span className="font-medium">ESG Text Classification Models</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Categorizes text into E, S, G, or non-ESG categories with fine-grained subcategories.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Multi-label classification with industry context</li>
                      <li>Understanding of startup-specific ESG terminology</li>
                      <li>Built on pre-trained transformers (BERT, RoBERTa)</li>
                      <li>Achieves &gt;85% F1 score accuracy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <Code className="h-5 w-5 text-esg-green-600" />
                      <span className="font-medium">Named Entity Recognition (NER) for ESG</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Identifies ESG-specific entities like "20% carbon reduction" or "diverse board".</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Custom ESG entity types within E, S, G hierarchy</li>
                      <li>Relationship extraction between entities</li>
                      <li>Confidence scoring for identified entities</li>
                      <li>Achieves &gt;80% F1 score</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <LineChart className="h-5 w-5 text-esg-amber-600" />
                      <span className="font-medium">ESG Sentiment Analysis</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Assesses sentiment (positive, negative, neutral) of ESG-related content.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>ESG-specific sentiment analysis</li>
                      <li>Detection of greenwashing attempts</li>
                      <li>Time-based sentiment tracking</li>
                      <li>Achieves &gt;80% accuracy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span className="font-medium">ESG Scoring Model</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Generates quantitative ESG scores from qualitative data.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Overall ESG score with E, S, G sub-scores</li>
                      <li>Confidence intervals for all scores</li>
                      <li>Industry-normalized scoring</li>
                      <li>&lt;10% mean absolute error vs. expert ratings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <Shield className="h-5 w-5 text-esg-red-600" />
                      <span className="font-medium">Risk Detection Model</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Identifies ESG risks and red flags in startup documentation.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Pre-defined risk categories with severity scores</li>
                      <li>Threshold-based alerts</li>
                      <li>False positive mitigation</li>
                      <li>&lt;10% false positives, &gt;80% recall</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <LightbulbIcon className="h-5 w-5 text-esg-amber-500" />
                      <span className="font-medium">Opportunity Identification Model</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Highlights ESG strengths and potential opportunities.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Pattern matching with successful ESG strategies</li>
                      <li>Impact estimation</li>
                      <li>Growth prediction based on ESG factors</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <div className="flex items-center gap-2 text-left">
                      <PieChart className="h-5 w-5 text-esg-blue-500" />
                      <span className="font-medium">Benchmark & Comparative Model</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <p className="mb-2">Compares startups to industry peers for relative ESG performance.</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Dynamic peer group generation</li>
                      <li>Statistical significance testing</li>
                      <li>Visualization-ready outputs (radar charts, etc.)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="overflow-hidden border shadow-xl relative backdrop-blur-sm">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
            
            <CardHeader className="border-b bg-card/40 backdrop-blur-sm">
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                Request Your Demo
              </CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you shortly to schedule a personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="border-input/60 focus-visible:ring-primary/60" />
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
                            <Input placeholder="john@example.com" {...field} className="border-input/60 focus-visible:ring-primary/60" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} className="border-input/60 focus-visible:ring-primary/60" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Investment Analyst" {...field} className="border-input/60 focus-visible:ring-primary/60" />
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
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-input/60 focus-visible:ring-primary/60">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501+">501+ employees</SelectItem>
                          </SelectContent>
                        </Select>
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
                            placeholder="Tell us about your specific ESG assessment needs..." 
                            className="min-h-[120px] border-input/60 focus-visible:ring-primary/60" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Request Demo
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-6 rounded-lg border bg-gradient-to-r from-card to-background p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground">Demos typically last 30 minutes and are tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoPage;
