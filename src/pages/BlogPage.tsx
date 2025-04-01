
import { Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "ESG Reporting Requirements for VC Firms in 2023",
    excerpt: "New ESG regulations are changing how venture capital firms need to report their portfolio's environmental and social impact. Here's what you need to know.",
    date: "May 15, 2023",
    author: "Emma Rodriguez",
    category: "Regulations",
    tags: ["ESG", "Venture Capital", "Compliance"],
    image: "/lovable-uploads/fb3ff521-aef9-4832-80ba-a774b98ea0e6.png",
  },
  {
    id: 2,
    title: "How AI is Transforming ESG Assessment",
    excerpt: "Artificial intelligence is making ESG assessment more accurate and efficient. Learn how AI tools are helping investors make better decisions.",
    date: "June 2, 2023",
    author: "David Chen",
    category: "Technology",
    tags: ["AI", "ESG", "Assessment"],
    image: "https://images.unsplash.com/photo-1677442135133-4da243d348f9?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Rise of Impact Investing in Climate Tech",
    excerpt: "Impact investors are increasingly focusing on climate technologies. Discover the trends and opportunities in this growing sector.",
    date: "June 20, 2023",
    author: "Sarah Johnson",
    category: "Investing",
    tags: ["Impact Investing", "Climate Tech", "Sustainability"],
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop",
  },
];

// Featured post component
const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="grid gap-8 md:grid-cols-2 items-center">
    <div>
      <img 
        src={post.image} 
        alt={post.title} 
        className="rounded-lg object-cover w-full aspect-video"
      />
    </div>
    <div className="space-y-4">
      <Badge variant="outline" className="bg-primary/10 text-primary">
        {post.category}
      </Badge>
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-muted-foreground">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      </div>
      <Button asChild>
        <Link to={`/blog/${post.id}`}>
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
);

// Blog post card component
const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="border rounded-lg overflow-hidden bg-card">
    <img 
      src={post.image} 
      alt={post.title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6 space-y-4">
      <Badge variant="outline" className="bg-primary/10 text-primary">
        {post.category}
      </Badge>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-muted-foreground">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      </div>
      <Button variant="outline" asChild>
        <Link to={`/blog/${post.id}`}>
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
);

// Popular tags component
const PopularTags = () => {
  const tags = ["ESG", "Sustainability", "Impact Investing", "Climate Tech", "Venture Capital", "AI", "Regulations", "Compliance"];
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
            <Tag className="mr-1 h-3 w-3" />
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="container py-12 space-y-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold gradient-heading">ESGInsightify Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay up-to-date with the latest insights, trends, and best practices in ESG assessment for investors.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
        <FeaturedPost post={featuredPost} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recent Posts</h2>
          <Button variant="outline">View All Posts</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex gap-4 items-start border-b pb-8 last:border-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="rounded w-24 h-24 object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Button variant="link" asChild className="p-0">
                      <Link to={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
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
          <PopularTags />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
