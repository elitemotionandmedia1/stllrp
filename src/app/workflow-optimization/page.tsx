import { Button } from "@/components/ui/button";

export default function WorkflowOptimizationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">AI Workflow Optimization</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Map, automate, and optimize your processes end-to-end. Reduce manual busywork, shorten cycle times, and connect tools with reliable automations.
        </p>
        <div className="rounded-lg border bg-muted/30 p-6 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164809242.png"
            alt="Workflow optimization icon"
            className="mx-auto max-h-56 object-contain"
          />
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>System design for reliability and observability</li>
            <li>Event-driven integrations across your stack</li>
            <li>Governance, access controls, and error handling</li>
          </ul>
        </div>
        <div className="mt-10 flex gap-4">
          <Button asChild>
            <a href="https://cal.com/himanshu8/30min" target="_blank" rel="noreferrer noopener">Book a Talk</a>
          </Button>
        </div>
      </section>
    </main>
  );
}