import { Button } from "@/components/ui/button";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Case Studies</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Real transformations powered by Stellarplx AI. See how our clients achieved measurable results with intelligent automation.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-lg border p-4 bg-muted/30">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded border bg-white">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop" 
                alt="Business transformation case study"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Operations Efficiency Uplift</h3>
                <p className="text-xs text-muted-foreground">85% reduction in manual tasks</p>
              </div>
              <Button asChild>
                <a href="https://drive.google.com/your-transformation-case-study-a" target="_blank" rel="noreferrer noopener">Open PDF</a>
              </Button>
            </div>
          </article>

          <article className="rounded-lg border p-4 bg-muted/30">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded border bg-white">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop" 
                alt="Revenue growth case study"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Revenue Growth & Time Savings</h3>
                <p className="text-xs text-muted-foreground">90% faster proposal generation</p>
              </div>
              <Button asChild>
                <a href="https://drive.google.com/your-transformation-case-study-b" target="_blank" rel="noreferrer noopener">Open PDF</a>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}