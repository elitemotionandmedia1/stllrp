import { Button } from "@/components/ui/button";

export default function ProposalAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">AI Proposal Automation</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Generate polished proposals, SoWs and briefs in minutes. Pulls from your CRM/Notion, applies your brand voice, and exports to PDF ready to send.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-lg border bg-muted/30 p-6">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded border bg-white mb-4">
              {/* Healthcare PDF Preview */}
              <iframe
                className="h-full w-full"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/The-Future-of-Healthcare-Innovation-Excellence-and-Patient-Centred-Care-1759169378875.pdf"
                title="Healthcare Proposal Preview"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Healthcare Proposal</h3>
                <p className="text-sm text-muted-foreground">Innovation, excellence & patient-centered care</p>
              </div>
              <Button size="sm" asChild>
                <a href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/The-Future-of-Healthcare-Innovation-Excellence-and-Patient-Centred-Care-1759169378875.pdf" target="_blank" rel="noreferrer noopener">Open PDF</a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/30 p-6">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded border bg-white mb-4">
              {/* Legal PDF Preview */}
              <iframe
                className="h-full w-full"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Legal-Organisation-Excellence-1759169375356.pdf"
                title="Legal Proposal Preview"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Legal Proposal</h3>
                <p className="text-sm text-muted-foreground">Building professional legal framework</p>
              </div>
              <Button size="sm" asChild>
                <a href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Legal-Organisation-Excellence-1759169375356.pdf" target="_blank" rel="noreferrer noopener">Open PDF</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-16">
          <Button asChild>
            <a href="https://cal.com/himanshu8/30min" target="_blank" rel="noreferrer noopener">Book a Call</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/case-studies">View Case Studies</a>
          </Button>
        </div>
      </section>

      <section className="border-t bg-muted/20">
        <div className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-10 items-start">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164809242.png"
            alt="Proposal automation icon"
            className="col-span-1 mx-auto max-h-56 object-contain"
          />
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-light">What it does</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 text-base">
              <li>Pulls data from CRM/Docs to draft complete proposals</li>
              <li>Brand voice and pricing blocks are applied automatically</li>
              <li>Exports to PDF and routes for e‑signature</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}