import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface list {
  title: string;
  value: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
}

const LIST: Array<list> = [
  {
    title: "Automate appointment scheduling with intelligent AI agents.",
    value: "1",
    summary:
      "Stellarplx creates custom AI agents that handle appointment booking, rescheduling, and patient communications automatically, saving hours of administrative work daily.",
    image: {
      src: "https://cdn.cosmos.so/a13978fa-5536-4e89-a976-5d24b239a389?format=jpeg",
      alt: "AI appointment scheduling automation",
    },
  },
  {
    title: "Generate professional proposals in minutes, not days.",
    value: "2",
    summary:
      "Our proposal automation AI creates tailored, professional proposals for healthcare, legal, and business services. Focus on client relationships while AI handles documentation.",
    image: {
      src: "https://cdn.cosmos.so/31a4b92a-1b71-47ee-87e2-7594ad90e52a?format=jpeg",
      alt: "AI proposal generation platform",
    },
  },
  {
    title: "Deploy custom AI agents across all your business tools.",
    value: "3",
    summary:
      "Stellarplx integrates seamlessly with Notion, Zapier, Salesforce, Slack, and more. Build personalized AI solutions that work with your existing workflow.",
    image: {
      src: "https://cdn.cosmos.so/65975927-a67d-4024-9f78-cc6a3f6c737f?format=jpeg",
      alt: "AI integration across business platforms",
    },
  },
];
const FeatureSectionTwo = () => {
  return (
    <section className="">
      <div className="container max-w-7xl mx-auto ">
        <div className="mx-auto mb-8 flex  flex-col items-start justify-between gap-6 md:mb-20">
          <h2 className="text-left text-5xl max-w-4xl text-foreground lg:text-6xl">
            Transform your{" "}
            <span className="text-muted-foreground">
              business operations with intelligent AI automation
            </span>
          </h2>
        </div>
        <div>
          <Tabs defaultValue={LIST[0].value} className="gap-14 xl:flex-row">
            <TabsList className="h-fit w-fit flex-col gap-2.5 bg-transparent p-0">
              {LIST.map((item, i) => (
                <TabsTrigger
                  className="flex-col items-start rounded-none p-5 text-left shadow-none border whitespace-normal data-[state=active]:bg-muted data-[state=active]:outline cursor-pointer xl:max-w-[34.0625rem]"
                  key={`tab-trigger-${i}`}
                  value={item.value}
                >
                  <div className="leading-normal font-bold">{item.title}</div>
                  <div className="leading-normal text-muted-foreground">
                    {item.summary}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {LIST.map((item, i) => (
              <TabsContent
                className="w-full"
                key={`tab-content-${i}`}
                value={item.value}
              >
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-[0.75rem]"
                >
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeatureSectionTwo };