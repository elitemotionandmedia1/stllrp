export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Terms & Conditions</h1>
        <div className="prose prose-neutral max-w-none">
          <p>By using Stellarplx you agree to these terms. Replace this copy with your finalized legal text.</p>
          <h2>Use of service</h2>
          <ul>
            <li>Do not misuse or attempt to disrupt services</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <h2>Liability</h2>
          <p>Services are provided as‑is. Liability is limited to the maximum extent permitted by law.</p>
        </div>
      </section>
    </main>
  );
}