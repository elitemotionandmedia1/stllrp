import { PocketKnife } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Appointment Setter Automation",
    description:
      "AI agents that manage your entire appointment booking process, reducing no-shows by 85% and saving hours of manual work.",
    icon: "CircleHelp",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164812251.png",
    href: "/appointment-automation",
  },
  {
    title: "Proposal Automation System",
    description:
      "Generate professional proposals and documents automatically, cutting proposal creation time by 90% with AI precision.",
    icon: "Volume2",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164809242.png",
    href: "/proposal-automation",
  },
  {
    title: "Custom AI Agent Solutions",
    description:
      "Personalized AI agents built for your specific workflows, integrating with Notion, Zapier, Salesforce and more.",
    icon: "Lightbulb",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164806814.png",
    href: "/custom-ai-agents",
  },
];
const FeatureSection = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto ">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8 px-7">
          <h2 className="text-3xl leading-tight tracking-tight  font-extralight md:text-4xl lg:text-6xl">
            AI Automation Solutions with Stellarplx
          </h2>
          <p className="text-muted-foreground max-w-[600px] tracking-[-0.32px]">
            Transform your business with custom AI agents that save time, reduce costs, and boost efficiency across your entire workflow.
          </p>
        </div>
      </div>

      <div className="lg:px-0! container border-x">
        <div className="items-center">
          <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
            {DATA.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="relative isolate pt-5 text-start lg:pt-20 block hover:bg-muted/30 transition-colors"
              >
                <h3 className="mt-2 px-4 text-lg  tracking-tight lg:px-8">
                  {item.title}
                </h3>
                <p className="text-muted-foreground pb-6 pt-2 px-4 lg:px-8">
                  {item.description}
                </p>
                <div className="border-t">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-muted object-contain w-full h-64"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { FeatureSection };