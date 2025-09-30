export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl  md:text-6xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p>Everything you need to know about Stellarplx AI agents</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium text-lg">
                How do AI agents save time and money?
              </h3>
              <p className="text-muted-foreground mt-4">
                Our AI agents automate repetitive tasks like appointment scheduling and proposal generation, reducing manual work by up to 85%. This translates to significant cost savings and allows your team to focus on high-value activities.
              </p>

              <ol className="list-outside list-decimal space-y-2 pl-4">
                <li className="text-muted-foreground mt-4">
                  Automated appointment setting reduces administrative overhead by 75%
                </li>
                <li className="text-muted-foreground mt-4">
                  AI-powered proposal generation cuts creation time from hours to minutes
                </li>
                <li className="text-muted-foreground mt-4">
                  Integration with existing tools eliminates duplicate data entry
                </li>
              </ol>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">
                Which platforms do you integrate with?
              </h3>
              <p className="text-muted-foreground mt-4">
                We integrate seamlessly with Notion, N8N, Make.com, Zapier, Google Drive, Salesforce, Slack, GitHub, and GoHighLevel to ensure smooth workflow automation across your existing tech stack.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">Can you customize agents for our specific needs?</h3>
              <p className="text-muted-foreground my-4">
                Absolutely. We specialize in creating personalized AI agents tailored to your unique business requirements and workflows.
              </p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">
                  Custom agent development based on your industry and use cases
                </li>
                <li className="text-muted-foreground">
                  Training on your specific data and business processes
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">
                How quickly can we get started?
              </h3>
              <p className="text-muted-foreground mt-4">
                Implementation typically takes 1-2 weeks depending on complexity. We provide comprehensive onboarding and training to ensure your team is fully equipped to leverage the AI agents effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}