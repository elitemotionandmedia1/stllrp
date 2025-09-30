import { Button } from "@/components/ui/button";
import { Check, Calendar, Play, Users, Zap, Bot, FileText, Clock } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-center text-4xl lg:text-6xl">AI Agent Solutions</h2>
          <p>
            Stellarplx delivers custom AI agents that save time, reduce costs
            and boost efficiency. Build personalized automation for your business.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="border-black/20 border-dotted flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="size-5" />
                  <h2 className="font-medium">Appointment Setter</h2>
                </div>
                <span className="my-3 block text-2xl font-semibold">
                  Custom Quote
                </span>
                <p className="text-muted-foreground text-sm">Per automation setup</p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="https://cal.com/himanshu8/30min">Schedule Demo</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "24/7 Intelligent Scheduling",
                  "Multi-Channel Integration",
                  "CRM Synchronization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted border-dotted border border-black/30 p-6  md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="size-5" />
                    <h2 className="font-medium">Proposal Automation</h2>
                  </div>
                  <span className="my-3 block text-2xl font-semibold">
                    Custom Quote
                  </span>
                  <p className="text-muted-foreground text-sm">Per automation setup</p>
                </div>

                <Button asChild className="w-full">
                  <Link href="https://cal.com/himanshu8/30min">Book Consultation</Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium mb-4">
                  Complete AI Solutions Include:
                </div>

                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Healthcare Proposal Generation",
                    "Legal Document Automation",
                    "Custom AI Agent Development",
                    "Multi-Platform Integration",
                    "Notion & Salesforce Sync",
                    "N8N & Make.com Workflows",
                    "Zapier & Google Drive Setup",
                    "Slack & GitHub Integration",
                    "GoHighLevel Automation",
                    "24/7 Technical Support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bot className="size-4" />
              <span>Custom AI Agents</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="size-4" />
              <span>Process Automation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>Save 80% Time</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="size-4" />
              <span>Expert Team Support</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-medium">Ready to transform your business with AI?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://cal.com/himanshu8/30min">
                  <Calendar className="size-4 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://www.youtube.com/watch?v=SUvLnnD4tCI">
                  <Play className="size-4 mr-2" />
                  Watch Demo Video
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Contact us at <a href="mailto:harsh@stellarplx.in" className="underline">harsh@stellarplx.in</a> or connect with founder{" "}
              <a href="https://www.linkedin.com/in/himanshu-chawla1" className="underline">Himanshu Chawla</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}