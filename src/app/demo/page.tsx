export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Demo Video</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">A quick walkthrough of our appointment setter agent. This is an auxiliary reference, not the centerpiece.</p>
        <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/SUvLnnD4tCI"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}