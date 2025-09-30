import { Button } from "@/components/ui/button";

export default function AppointmentAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Appointment Setter AI</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Automate outreach, qualify leads, and schedule meetings hands‑free. Our agent coordinates time zones, handles rescheduling, and updates your calendar with zero back‑and‑forth.
        </p>
        <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/SUvLnnD4tCI"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href="https://cal.com/himanshu8/30min" target="_blank" rel="noreferrer noopener">Book a Talk</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/case-studies">See case studies</a>
          </Button>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-8 items-start">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759164812251.png"
            alt="Appointment automation icon"
            className="col-span-1 mx-auto max-h-56 object-contain"
          />
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-2xl md:text-3xl">What it does</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>AI inbox that replies, qualifies and routes conversations</li>
              <li>Auto‑schedules on your calendar, handles no‑shows and follow‑ups</li>
              <li>Works with Notion, Slack, Google Calendar, Zapier, n8n and more</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}