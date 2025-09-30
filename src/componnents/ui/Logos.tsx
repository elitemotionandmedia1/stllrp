const Logos = () => {
  const topRowCompanies = [
    {
      name: "Notion",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Notion_Symbol_1-1759169442707.png",
      width: 143,
      height: 26,
      href: "https://notion.so",
    },
    {
      name: "n8n",
      logo: "https://n8n.io/favicon.svg",
      width: 154,
      height: 31,
      href: "https://n8n.io",
    },
    {
      name: "Make",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/make-logo-freelogovectors.net_-1759169612788.png",
      width: 113,
      height: 22,
      href: "https://make.com",
    },
    {
      name: "Zapier",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image1-1759169727471.png",
      width: 112,
      height: 27,
      href: "https://zapier.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Google Drive",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      width: 141,
      height: 32,
      href: "https://drive.google.com",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      width: 104,
      height: 18,
      href: "https://salesforce.com",
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
      width: 105,
      height: 28,
      href: "https://slack.com",
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      width: 128,
      height: 33,
      href: "https://github.com",
    },
    {
      name: "GoHighLevel",
      logo: "https://www.gohighlevel.com/images/ghl_text_logo.png",
      width: 140,
      height: 28,
      href: "https://gohighlevel.com",
    },
  ];

  return (
    <section className="py-32 mx-auto pt-0">
      <div className="container mx-auto space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl  text-balance md:text-2xl lg:text-4xl">
            Build AI agents that save time & money
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Integrate with tools your team already uses every day.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-4 md:gap-x-20 lg:gap-x-28">
            {topRowCompanies.map((company, index) => (
              <a href={company.href} target="_blank" key={index}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-opacity hover:opacity-70 filter grayscale brightness-0"
                />
              </a>
            ))}
          </div>

          {/* Bottom row - 5 logos, Google Drive in color */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-5 md:gap-x-20 lg:gap-x-28">
            {bottomRowCompanies.map((company, index) => (
              <a href={company.href} target="_blank" key={index}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className={`object-contain transition-opacity hover:opacity-70 ${
                    company.name === "Google Drive" 
                      ? "" 
                      : "filter grayscale brightness-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos };