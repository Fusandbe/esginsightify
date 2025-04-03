
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
  BarChart3, 
  LineChart, 
  PieChart, 
  Shield, 
  Zap, 
  Rocket,
  Award,
  Star,
  ArrowRight,
  Diamond,
  Gem
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
    <div className="container mx-auto px-4 py-16 md:py-24 relative">
      {/* Premium decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/4 blur-3xl pointer-events-none"></div>
      
      <div className="text-center mb-16 relative">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center justify-center p-1.5 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <Diamond className="w-3.5 h-3.5 mr-1.5" />
            Premium ESG Assessment Solution
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl lg:text-6xl">
          <span className="gradient-heading">Request a Personalized Demo</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience how our AI-powered ESG assessment tool transforms your investment due diligence process.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 md:gap-16">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full opacity-70 blur-xl"></div>
          
          <div className="space-y-8 bg-gradient-to-b from-card to-background p-8 rounded-2xl border shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/15 p-3.5">
                <Gem className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">ESG Assessment Platform</h3>
            </div>
            
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <p className="text-muted-foreground leading-relaxed">
              Our AI-powered ESG assessment tool helps VCs and angel investors evaluate startups based on Environmental, Social, and Governance factors, providing actionable insights for better investment decisions.
            </p>
            
            <ul className="space-y-4 mt-6">
              <li className="flex gap-3.5">
                <div className="rounded-full bg-esg-green-500/15 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-esg-green-600" />
                </div>
                <span className="text-foreground/90">Analyze startup pitch decks, business plans, and public content</span>
              </li>
              <li className="flex gap-3.5">
                <div className="rounded-full bg-esg-green-500/15 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-esg-green-600" />
                </div>
                <span className="text-foreground/90">Generate comprehensive ESG scores with detailed breakdowns</span>
              </li>
              <li className="flex gap-3.5">
                <div className="rounded-full bg-esg-green-500/15 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-esg-green-600" />
                </div>
                <span className="text-foreground/90">Identify ESG-related risks and opportunities</span>
              </li>
              <li className="flex gap-3.5">
                <div className="rounded-full bg-esg-green-500/15 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-esg-green-600" />
                </div>
                <span className="text-foreground/90">Track ESG performance over time</span>
              </li>
              <li className="flex gap-3.5">
                <div className="rounded-full bg-esg-green-500/15 p-1.5 h-7 w-7 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-esg-green-600" />
                </div>
                <span className="text-foreground/90">Benchmark startups against industry peers</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2.5">
              <Award className="h-6 w-6 text-esg-amber-500" />
              Why Choose Our Platform
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card className="overflow-hidden border-t-4 border-t-esg-green-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2.5">
                    <LineChart className="h-5 w-5 text-esg-green-500" />
                    Startup Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">Tailored specifically for evaluating early-stage companies</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-t-4 border-t-esg-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2.5">
                    <Zap className="h-5 w-5 text-esg-blue-500" />
                    Quick Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">Get results in minutes, not days or weeks</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-t-4 border-t-esg-amber-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2.5">
                    <Shield className="h-5 w-5 text-esg-amber-500" />
                    High Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">Over 85% accuracy in ESG factor identification</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2.5">
                    <PieChart className="h-5 w-5 text-primary" />
                    Comprehensive View
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">Evaluate E, S, and G factors with detailed breakdowns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="overflow-hidden border shadow-xl relative backdrop-blur-sm bg-gradient-to-br from-card via-background/90 to-card/80">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full opacity-70 blur-xl"></div>
            
            <CardHeader className="border-b bg-card/60 backdrop-blur-sm">
              <CardTitle className="flex items-center gap-2.5">
                <Star className="h-5 w-5 text-esg-amber-500" />
                Request Your Demo
              </CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you shortly to schedule a personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="border-input/60 focus-visible:ring-primary/60 transition-all duration-200" />
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
                            <Input placeholder="john@example.com" {...field} className="border-input/60 focus-visible:ring-primary/60 transition-all duration-200" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} className="border-input/60 focus-visible:ring-primary/60 transition-all duration-200" />
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
                            <Input placeholder="Investment Analyst" {...field} className="border-input/60 focus-visible:ring-primary/60 transition-all duration-200" />
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
                            <SelectTrigger className="border-input/60 focus-visible:ring-primary/60 transition-all duration-200">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card/95 backdrop-blur-md border-primary/10">
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
                            className="min-h-[120px] border-input/60 focus-visible:ring-primary/60 transition-all duration-200" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:shadow-lg transition-all duration-300 group">
                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-6 rounded-xl border bg-gradient-to-r from-card/80 to-background/95 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/15 p-3">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Ready to transform your ESG analysis?</h3>
                <p className="text-sm text-muted-foreground mt-1">Demos typically last 30 minutes and are tailored to your specific investment needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoPage;
