export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">About Stellarplx</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          We build pragmatic AI agents that save time and money. Founded by Himanshu Chawla, Stellarplx focuses on outcomes: fewer manual steps, faster cycles, and measurable ROI.
        </p>
        <div className="rounded-lg border p-6 bg-muted/30">
          <h2 className="text-2xl mb-4">Founder</h2>
          <div className="flex items-start gap-6 mb-4">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQGxR7tXQO0YZg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702389763321?e=1744243200&v=beta&t=KvJO0vqZ5h7XfZ8dJmK8p3g_SBfW5cWx7aQJ5qYZqEg"
              alt="Himanshu Chawla"
              className="w-24 h-24 rounded-full object-cover border-2"
            />
            <div>
              <p className="text-lg font-medium">Himanshu Chawla</p>
              <p className="text-muted-foreground">
                <a className="underline hover:text-foreground" href="https://www.linkedin.com/in/himanshu-chawla1" target="_blank" rel="noreferrer noopener">LinkedIn Profile</a>
              </p>
              <p className="text-muted-foreground mt-2">Founder & CEO</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">Team: 3–5 specialists in agent design, automation, and integrations.</p>
        </div>
      </section>
    </main>
  );
}