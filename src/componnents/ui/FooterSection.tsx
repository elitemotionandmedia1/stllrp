import { Logo } from "@/components/logo";
import Link from "next/link";

const links = [
  {
    group: "Platform",
    items: [
      {
        title: "AI Agents",
        href: "/custom-ai-agents",
      },
      {
        title: "Automations",
        href: "/workflow-optimization",
      },
      {
        title: "Integrations",
        href: "/workflow-optimization",
      },
      {
        title: "Pricing",
        href: "/#pricing",
      },
      {
        title: "Demo",
        href: "/demo",
      },
      {
        title: "About Us",
        href: "/about",
      },
    ],
  },
  {
    group: "Solutions",
    items: [
      {
        title: "Appointment Setter",
        href: "/appointment-automation",
      },
      {
        title: "Proposal Automation",
        href: "/proposal-automation",
      },
      {
        title: "Healthcare",
        href: "/case-studies",
      },
      {
        title: "Legal Firms",
        href: "/case-studies",
      },
      {
        title: "Small Business",
        href: "/case-studies",
      },
      {
        title: "Enterprise",
        href: "/case-studies",
      },
      {
        title: "Custom AI Agents",
        href: "/custom-ai-agents",
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        title: "About Stellarplx",
        href: "/about",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
      },
      {
        title: "Testimonials",
        href: "/#testimonials",
      },
      {
        title: "Team",
        href: "/about",
      },
      {
        title: "Contact",
        href: "mailto:harsh@stellarplx.in",
      },
      {
        title: "Support",
        href: "mailto:harsh@stellarplx.in",
      },
    ],
  },
  {
    group: "Resources",
    items: [
      {
        title: "Documentation",
        href: "/demo",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        href: "/terms",
      },
      {
        title: "Security",
        href: "/security",
      },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="go home"
              className="block flex gap-2 size-fit items-center"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" fill="none"/>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <polygon points="200,80 260,140 200,200 140,140"/>
                  <polygon points="200,200 260,140 320,200 260,260"/>
                  <polygon points="200,200 260,260 200,320 140,260"/>
                  <polygon points="200,200 140,260 80,200 140,140"/>
                  <polygon points="200,140 230,110 230,170 200,140"/>
                  <polygon points="260,200 290,170 290,230 260,200"/>
                  <polygon points="200,260 230,290 170,290 200,260"/>
                  <polygon points="140,200 110,230 110,170 140,200"/>
                  <circle cx="200" cy="200" r="10" fill="currentColor"/>
                </g>
              </svg>
              <span className="font-bold text-xl">Stellarplx</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm max-w-md">
              Building next-generation AI agents that save time, money, and resources. Specialized in appointment automation and proposal generation for modern businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs">
              <span className="font-medium">Integrates with:</span>
              <div className="flex flex-wrap gap-3 text-muted-foreground">
                <span>Notion</span>
                <span>N8N</span>
                <span>Make.com</span>
                <span>Zapier</span>
                <span>Google Drive</span>
                <span>Salesforce</span>
                <span>Slack</span>
                <span>GitHub</span>
                <span>GoHighLevel</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <div className="order-last flex flex-col gap-2 text-center md:order-first md:text-left">
            <span className="text-muted-foreground block text-sm">
              © {new Date().getFullYear()} Stellarplx AI
            </span>
            <span className="text-muted-foreground block text-xs">
              Contact: harsh@stellarplx.in
            </span>
          </div>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link
              href="https://www.linkedin.com/company/stellarplx-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}