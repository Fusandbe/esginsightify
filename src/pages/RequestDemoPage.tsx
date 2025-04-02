
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
import { Check, Server, Code, Database, RefreshCw, Layers, Zap } from "lucide-react";

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
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Request a Demo</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how our AI-powered ESG assessment tool can enhance your investment due diligence process.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 md:gap-16">
        <div>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="models">AI Models</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">ESG Assessment Tool</h3>
                <p>Our AI-powered ESG assessment tool helps VCs and angel investors evaluate startups based on Environmental, Social, and Governance factors.</p>
                
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Analyze startup pitch decks, business plans, and public content</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Generate comprehensive ESG scores with detailed breakdowns</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Identify ESG-related risks and opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Track ESG performance over time</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Benchmark startups against industry peers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Why Choose Our Tool?</h3>
                <p className="mb-4">Our platform is specifically designed for early-stage investments with:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Startup Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Tailored specifically for evaluating early-stage companies</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Quick Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Get results in minutes, not days or weeks</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">High Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Over 85% accuracy in ESG factor identification</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Comprehensive View</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Evaluate E, S, and G factors with detailed breakdowns</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="models" className="space-y-6 mt-6">
              <h3 className="text-2xl font-bold">Our AI Models</h3>
              <p className="mb-4">Our platform leverages 7 interconnected ML and NLP models:</p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>ESG Text Classification Models</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Categorizes text into E, S, G, or non-ESG categories with fine-grained subcategories.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Multi-label classification with industry context</li>
                      <li>Understanding of startup-specific ESG terminology</li>
                      <li>Built on pre-trained transformers (BERT, RoBERTa)</li>
                      <li>Achieves &gt;85% F1 score accuracy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Named Entity Recognition (NER) for ESG</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Identifies ESG-specific entities like "20% carbon reduction" or "diverse board".</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Custom ESG entity types within E, S, G hierarchy</li>
                      <li>Relationship extraction between entities</li>
                      <li>Confidence scoring for identified entities</li>
                      <li>Achieves &gt;80% F1 score</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>ESG Sentiment Analysis</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Assesses sentiment (positive, negative, neutral) of ESG-related content.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ESG-specific sentiment analysis</li>
                      <li>Detection of greenwashing attempts</li>
                      <li>Time-based sentiment tracking</li>
                      <li>Achieves &gt;80% accuracy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>ESG Scoring Model</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Generates quantitative ESG scores from qualitative data.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Overall ESG score with E, S, G sub-scores</li>
                      <li>Confidence intervals for all scores</li>
                      <li>Industry-normalized scoring</li>
                      <li>&lt;10% mean absolute error vs. expert ratings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Risk Detection Model</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Identifies ESG risks and red flags in startup documentation.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pre-defined risk categories with severity scores</li>
                      <li>Threshold-based alerts</li>
                      <li>False positive mitigation</li>
                      <li>&lt;10% false positives, &gt;80% recall</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Opportunity Identification Model</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Highlights ESG strengths and potential opportunities.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pattern matching with successful ESG strategies</li>
                      <li>Impact estimation</li>
                      <li>Growth prediction based on ESG factors</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>Benchmark & Comparative Model</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Compares startups to industry peers for relative ESG performance.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Dynamic peer group generation</li>
                      <li>Statistical significance testing</li>
                      <li>Visualization-ready outputs (radar charts, etc.)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="technical" className="space-y-6 mt-6">
              <h3 className="text-2xl font-bold">Technical Implementation</h3>
              <p className="mb-4">Our ESG assessment platform leverages cutting-edge technology:</p>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <h4 className="text-xl font-semibold">Architecture</h4>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Model Architecture</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex gap-2">
                        <Server className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>NLP base: Transformer models (BERT, RoBERTa)</span>
                      </div>
                      <div className="flex gap-2">
                        <Server className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Scoring: Ensemble of gradient boosting and neural networks</span>
                      </div>
                      <div className="flex gap-2">
                        <Server className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Risk detection: Hybrid rules + anomaly detection</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Deployment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex gap-2">
                        <Code className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Containerized microservices (Docker)</span>
                      </div>
                      <div className="flex gap-2">
                        <Code className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>RESTful APIs with batch and real-time processing</span>
                      </div>
                      <div className="flex gap-2">
                        <Code className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Model versioning and A/B testing support</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    <h4 className="text-xl font-semibold">Development Approach</h4>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Iterative Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Start with MVP classification models</span>
                      </div>
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Expand to scoring, risk, and opportunity models</span>
                      </div>
                      <div className="flex gap-2">
                        <Check className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span>Refine with user feedback</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Validation</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>Expert reviews, comparisons with existing ratings, continuous benchmarking</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Updating</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>Scheduled retraining, drift detection, feedback loops</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <h4 className="text-xl font-semibold">Integration Requirements</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>APIs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>RESTful endpoints with JSON outputs, authentication, and error handling</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Input/Output</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Handle PDFs, DOCX, PPTX, URLs; export CSV/JSON</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Pipeline</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Ingest, preprocess, analyze, aggregate, and format results</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Request Your Demo</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you shortly to schedule a personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
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
                            <Input placeholder="Investment Analyst" {...field} />
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
                            <SelectTrigger>
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
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">Request Demo</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-6 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Zap className="h-4 w-4 text-primary" />
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
