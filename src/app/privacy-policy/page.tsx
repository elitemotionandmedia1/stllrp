export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Privacy Policy</h1>
        <div className="prose prose-neutral max-w-none">
          <p>We respect your privacy. This page describes how we collect, use, and safeguard information.</p>
          <h2>What we collect</h2>
          <ul>
            <li>Contact details you share (e.g., email)</li>
            <li>Usage data to improve reliability</li>
          </ul>
          <h2>How we use data</h2>
          <ul>
            <li>To provide and improve our services</li>
            <li>To communicate with you about updates</li>
          </ul>
        </div>
      </section>
    </main>
  );
}