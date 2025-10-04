import Link from "next/link";
import { Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { label: "Courses", href: "#courses" },
      { label: "Mentorship", href: "#mentorship" },
      { label: "Community", href: "#community" },
      { label: "Pricing", href: "#pricing" },
    ],
    Resources: [
      { label: "Blog", href: "#blog" },
      { label: "Market Insights", href: "#insights" },
      { label: "Trading Guides", href: "#guides" },
      { label: "Help Center", href: "#help" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Partners", href: "#partners" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Disclaimer", href: "#disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.ico"
                alt="Trading Pride Logo"
                width={32}
                height={32}
                className="w-8 h-8 hover:scale-105 transition-all duration-500"
              />
              <span className="text-xl font-bold text-foreground font-brand">
                Trading Pride
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering traders worldwide with professional education,
              mentorship, and real-time market insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Trading Pride. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-md text-center sm:text-right">
            Trading involves risk. Past performance does not guarantee future
            results. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
