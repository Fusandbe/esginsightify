
import { Link } from "react-router-dom";
import { BarChart3, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-16 border-t border-primary/10 relative overflow-hidden french-pattern">
      {/* Luxury decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-esg-gold-500/5 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-1.5 shadow-sm">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-serif font-bold">ESGInsightify</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered ESG assessment platform designed for VC and angel investors to evaluate startups with comprehensive insights.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-serif font-semibold tracking-wider uppercase">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Features
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Pricing
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Request Demo
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Integrations
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-serif font-semibold tracking-wider uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  About
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Contact
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Blog
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group"
                >
                  Careers
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-serif font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-esg-gold-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-esg-gold-500" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-esg-gold-500" />
                <a href="mailto:info@esginsightify.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@esginsightify.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-center md:text-left text-xs text-muted-foreground">
            &copy; {currentYear} ESGInsightify. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
