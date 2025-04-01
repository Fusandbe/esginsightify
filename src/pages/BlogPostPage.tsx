
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "ESG Reporting Requirements for VC Firms in 2023",
    content: `
      <p>New ESG regulations are changing how venture capital firms need to report their portfolio's environmental and social impact. Here's what you need to know.</p>
      
      <h2>The Changing Landscape of ESG Reporting</h2>
      <p>As environmental, social, and governance (ESG) factors become increasingly important to investors and stakeholders, regulatory bodies worldwide are implementing new reporting requirements for investment firms, including venture capital.</p>
      
      <p>In 2023, we're seeing a significant shift toward mandatory ESG disclosures, moving away from the primarily voluntary reporting structures of the past. This change presents both challenges and opportunities for VC firms.</p>
      
      <h2>Key Regulatory Changes</h2>
      <p>The European Union's Sustainable Finance Disclosure Regulation (SFDR) now requires financial market participants, including VC firms, to disclose how they integrate sustainability risks into their investment decision-making processes.</p>
      
      <p>In the United States, the Securities and Exchange Commission (SEC) has proposed rules that would require public companies to disclose climate-related risks, emissions, and net-zero transition plans. While these rules directly affect public companies, they have downstream implications for VC firms, especially those with portfolio companies approaching IPO.</p>
      
      <h2>Best Practices for Compliance</h2>
      <ul>
        <li>Start with a materiality assessment to determine which ESG factors are most relevant to your portfolio</li>
        <li>Develop consistent metrics and data collection processes across your portfolio</li>
        <li>Implement software solutions to streamline ESG data collection and reporting</li>
        <li>Train investment teams on ESG factors and reporting requirements</li>
        <li>Consider third-party verification to enhance credibility</li>
      </ul>
      
      <h2>Beyond Compliance: The Strategic Advantage</h2>
      <p>Forward-thinking VC firms are recognizing that robust ESG reporting goes beyond regulatory compliance. It can also:</p>
      
      <ul>
        <li>Attract limited partners who increasingly screen for ESG integration</li>
        <li>Identify risks and opportunities in portfolio companies</li>
        <li>Support portfolio companies in their own sustainability journeys</li>
        <li>Position firms favorably for future regulatory developments</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The evolving ESG reporting landscape presents a clear directive for VC firms: adapt now or face challenges later. By implementing robust ESG reporting frameworks today, firms can not only ensure compliance but also gain a competitive edge in an increasingly ESG-conscious investment ecosystem.</p>
    `,
    date: "May 15, 2023",
    author: "Emma Rodriguez",
    authorTitle: "ESG Compliance Specialist",
    authorBio: "Emma has over 10 years of experience in ESG compliance and reporting, with a focus on the investment sector.",
    category: "Regulations",
    tags: ["ESG", "Venture Capital", "Compliance"],
    image: "/lovable-uploads/fb3ff521-aef9-4832-80ba-a774b98ea0e6.png",
  },
  {
    id: "2",
    title: "How AI is Transforming ESG Assessment",
    content: `
      <p>Artificial intelligence is making ESG assessment more accurate and efficient. Learn how AI tools are helping investors make better decisions.</p>
      
      <h2>The AI Revolution in ESG Data Analysis</h2>
      <p>The intersection of artificial intelligence and ESG assessment is creating powerful new tools for investors seeking to evaluate sustainability factors. These technologies are addressing longstanding challenges in ESG analysis, including data inconsistency, subjective interpretations, and resource-intensive processes.</p>
      
      <h2>Key AI Applications in ESG Assessment</h2>
      
      <h3>Natural Language Processing</h3>
      <p>NLP algorithms can analyze vast amounts of unstructured text data from corporate reports, news articles, social media, and other sources to identify ESG risks and opportunities that might be missed in traditional analysis.</p>
      
      <h3>Machine Learning for Rating Prediction</h3>
      <p>Advanced ML models can predict ESG ratings by learning from historical data patterns, helping investors identify companies likely to improve or deteriorate in their ESG performance.</p>
      
      <h3>Computer Vision</h3>
      <p>AI-powered image and video analysis can verify environmental claims, assess factory conditions, and monitor supply chain activities through satellite imagery and other visual data sources.</p>
      
      <h2>Benefits of AI-Driven ESG Assessment</h2>
      <ul>
        <li>Greater objectivity through data-driven analysis</li>
        <li>Enhanced ability to process diverse and voluminous data sources</li>
        <li>Real-time monitoring of ESG risks</li>
        <li>More consistent application of ESG criteria across investments</li>
        <li>Identification of emerging ESG trends before they become widely recognized</li>
      </ul>
      
      <h2>Challenges and Limitations</h2>
      <p>Despite its promise, AI in ESG assessment faces several challenges:</p>
      
      <ul>
        <li>Data quality issues, including gaps and inconsistencies</li>
        <li>The "black box" problem, where AI decision-making lacks transparency</li>
        <li>Potential for algorithmic bias reflecting historical inequities</li>
        <li>Need for human oversight and interpretation</li>
      </ul>
      
      <h2>The Future of AI in ESG</h2>
      <p>Looking ahead, we can expect to see:</p>
      
      <ul>
        <li>More sophisticated integration of diverse data sources</li>
        <li>Increased standardization of AI methodologies for ESG assessment</li>
        <li>Greater emphasis on explainable AI for transparency</li>
        <li>Customizable AI tools that align with specific investor values and priorities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI is not replacing human judgment in ESG assessment, but it is dramatically expanding what's possible. By combining technological capabilities with human expertise, investors can develop more comprehensive, consistent, and forward-looking approaches to sustainable investing.</p>
    `,
    date: "June 2, 2023",
    author: "David Chen",
    authorTitle: "AI & ESG Technology Researcher",
    authorBio: "David specializes in the application of artificial intelligence to sustainability challenges in the investment sector.",
    category: "Technology",
    tags: ["AI", "ESG", "Assessment"],
    image: "https://images.unsplash.com/photo-1677442135133-4da243d348f9?q=80&w=1932&auto=format&fit=crop",
  },
];

// Related Posts component
const RelatedPosts = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Related Posts</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden bg-card">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <Badge variant="outline" className="mb-2 bg-primary/10 text-primary">
                {post.category}
              </Badge>
              <h4 className="font-medium mb-2">{post.title}</h4>
              <Button variant="link" asChild className="p-0">
                <Link to={`/blog/${post.id}`}>
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button variant="outline" asChild className="mb-4">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        <div className="space-y-4">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full rounded-lg aspect-video object-cover"
          />
          
          <div className="flex gap-4 justify-end">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" /> Save
            </Button>
          </div>
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <span className="font-medium">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          <div className="border-t border-b py-8 my-8">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-muted-foreground text-sm mb-2">{post.authorTitle}</p>
                <p>{post.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest ESG insights delivered to your inbox.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 border rounded-md"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <RelatedPosts />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
