export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Security</h1>
        <div className="prose prose-neutral max-w-none">
          <p>We implement industry best practices for data protection and access control.</p>
          <ul>
            <li>Least‑privilege access and audit logs</li>
            <li>Encrypted data in transit and at rest (where applicable)</li>
            <li>Vendor risk review for integrations</li>
          </ul>
          <p>Contact: harsh@stellarplx.in</p>
        </div>
      </section>
    </main>
  );
}