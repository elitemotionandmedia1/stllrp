import { Button } from "@/components/ui/button";

export default function CustomAgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Custom AI Agent Solutions</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          We build agents tailored to your workflows — from inbox triage and research copilots to data sync and RPA-style automations. Integrated with your stack: Notion, Slack, Salesforce, Zapier, n8n, Google Drive and more.
        </p>
        <div className="rounded-lg border bg-muted/30 p-6 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164806814.png"
            alt="Custom AI agent icon"
            className="mx-auto max-h-56 object-contain"
          />
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Data-aware agents grounded in your knowledge base</li>
            <li>Human-in-the-loop approvals and auditable logs</li>
            <li>Secure by design with least-privilege integrations</li>
          </ul>
        </div>
        <div className="mt-10 flex gap-4">
          <Button asChild>
            <a href="https://cal.com/himanshu8/30min" target="_blank" rel="noreferrer noopener">Book a Talk</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/case-studies">View case studies</a>
          </Button>
        </div>
      </section>
    </main>
  );
}