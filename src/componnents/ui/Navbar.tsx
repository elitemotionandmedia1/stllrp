"use client";

import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Bot,
  FileText,
  Brain,
  Cloud,
  Code,
  Database,
  Factory,
  Fingerprint,
  Gamepad2,
  Globe,
  Home,
  Lock,
  Menu,
  MessageSquare,
  Plane,
  Settings,
  Shield,
  ShoppingCart,
  Sparkle,
  Truck,
  Users,
  X,
  Zap,
  Building2,
  Mail,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Solution {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_SOLUTIONS: Solution[] = [
  {
    title: "Appointment Setter AI",
    description: "Automate scheduling and calendar management with AI precision.",
    href: "/appointment-automation",
    icon: Calendar,
  },
  {
    title: "Proposal Automation",
    description: "Generate professional proposals with intelligent AI assistance.",
    href: "/proposal-automation",
    icon: FileText,
  },
  {
    title: "Custom AI Agents",
    description: "Personalized AI agents built for your specific business needs.",
    href: "/custom-ai-agents",
    icon: Bot,
  },
  {
    title: "Workflow Optimization",
    description: "Streamline operations with intelligent process automation.",
    href: "/workflow-optimization",
    icon: Zap,
  },
];

interface Platfrom {
  title: string;
  href: string;
  icon: LucideIcon;
}

const DATA_PLATFORM_CASE: Platfrom[] = [
  {
    title: "Healthcare",
    href: "#",
    icon: Building2,
  },
  {
    title: "Legal Services",
    href: "#",
    icon: Shield,
  },
  {
    title: "E-commerce",
    href: "#",
    icon: ShoppingCart,
  },
  {
    title: "Real Estate",
    href: "#",
    icon: Home,
  },
  {
    title: "Manufacturing",
    href: "#",
    icon: Factory,
  },
  {
    title: "Logistics",
    href: "#",
    icon: Truck,
  },
  {
    title: "Professional Services",
    href: "#",
    icon: Users,
  },
  {
    title: "Technology",
    href: "#",
    icon: Code,
  },
];

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_RESOURCES: Resource[] = [
  {
    title: "AI Case Studies",
    description: "Real-world AI implementation success stories",
    href: "/case-studies",
    icon: Sparkle,
  },
  {
    title: "Demo Video",
    description: "See our AI agents in action",
    href: "/demo",
    icon: Globe,
  },
  {
    title: "About Us",
    description: "Who we are and how we work",
    href: "/about",
    icon: Users,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="fixed inset-x-0 top-0 z-20 bg-stone-100">
      <div className="container max-w-7xl mx-auto px-4 ">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full items-center justify-between gap-12 py-4">
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tighter">Stellarplx</span>
            </a>
            <NavigationMenuList className="hidden lg:flex">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-stone-100">
                  AI Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[760px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="max-w-[760px] flex-1">
                      <div className="text-xs tracking-widest text-muted-foreground">
                        AI Automations
                      </div>
                      <div className="grid grid-rows-1 gap-6">
                        {DATA_SOLUTIONS.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group flex flex-row items-center first:mt-4 hover:bg-transparent"
                          >
                            <div className="mr-4 rounded-lg bg-muted p-4 shadow-sm">
                              <solution.icon className="size-6 text-muted-foreground transition-all fade-in group-hover:text-foreground" />
                            </div>
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="font-medium text-foreground">
                                {solution.title}
                              </div>
                              <div className="text-sm font-normal text-muted-foreground">
                                {solution.description}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-[760px] flex-1">
                      <div className="text-xs tracking-widest text-muted-foreground">
                        By Industry
                      </div>
                      <div className="mt-4 gap-6">
                        {DATA_PLATFORM_CASE.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group flex flex-row items-center hover:bg-transparent"
                          >
                            <div className="mr-4 rounded-lg bg-muted p-2 shadow-sm">
                              <solution.icon className="size-4 text-muted-foreground transition-all fade-in group-hover:text-foreground" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="text-sm font-medium">
                                {solution.title}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <Button variant="ghost" asChild>
                <a href="/case-studies">Case Studies</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/about">About</a>
              </Button>
            </NavigationMenuList>
            <div className="hidden items-center gap-4 lg:flex">
              <Button className="" variant="ghost" asChild>
                <a href="mailto:harsh@stellarplx.in">Contact Us</a>
              </Button>
              <Button className="rounded-full" asChild>
                <a href="https://cal.com/himanshu8/30min">Book a Call</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className="absolute inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-border bg-background lg:hidden">
              <div>
                <a
                  href="/appointment-automation"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">AI Solutions</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/case-studies"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">Case Studies</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/about"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">About</span>
                  <span className="shrink-0"></span>
                </a>
              </div>
              <div className="mx-[2rem] mt-auto flex flex-col gap-4 py-12">
                <span className="text-center">
                  Need Help? <b>Contact Us</b>
                </span>
                <Button className="relative" size="lg" asChild>
                  <a href="https://cal.com/himanshu8/30min">Book a Call</a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar };