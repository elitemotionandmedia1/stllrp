import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Amanda Clark",
    role: "Chief Marketing Officer, Nebula Health",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Stellarplx's expert understanding of healthcare marketing challenges and commitment to aligning technology with our mission has been exceptional. Their AI-driven approach simplified our outreach while amplifying our impact.",
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Operations Officer, Western Wisconsin Health",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Thanks to Stellarplx, we enhanced both operational efficiency and patient experience. The 20% reduction in administrative workload allowed our team to focus on what matters most - patient care.",
  },
  {
    name: "Michael Roberts",
    role: "Legal Operations Director",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Stellarplx transformed our legal organisation's efficiency. Their AI automation solutions reduced our administrative costs by 25% while improving client satisfaction scores significantly.",
  },
  {
    name: "Jennifer Hayes",
    role: "Healthcare Innovation Lead",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "The appointment setting automation from Stellarplx revolutionized our patient scheduling. We saw a 12% decrease in no-shows and 85% patient satisfaction rate within months.",
  },
  {
    name: "David Thompson",
    role: "Practice Administrator",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Stellarplx's proposal automation has been a game-changer. What used to take days now takes hours, and the quality is consistently professional and tailored to our needs.",
  },
  {
    name: "Lisa Chen",
    role: "Digital Transformation Manager",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "The AI agents created by Stellarplx seamlessly integrate with our existing workflow. Their understanding of our specific needs made the implementation smooth and effective.",
  },
  {
    name: "Robert Martinez",
    role: "Operations Excellence Director",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Stellarplx doesn't just provide technology - they provide solutions that align with our mission. Their personalized AI agents have transformed how we engage with clients.",
  },
  {
    name: "Sarah Johnson",
    role: "Client Experience Manager",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "The 24/7 patient query chatbot from Stellarplx ensures our clients always have support. It's been instrumental in improving our overall service delivery.",
  },
  {
    name: "Mark Williams",
    role: "Efficiency Consultant",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Stellarplx's AI-driven solutions saved us 40% of administrative time. Their technology amplifies human capabilities rather than replacing them - exactly what we needed.",
  },
  {
    name: "Rachel Green",
    role: "Process Optimization Lead",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    quote:
      "The automated reminder system from Stellarplx reduced our revenue loss by 15%. Their multi-channel approach ensures patients stay engaged throughout their journey.",
  },
  {
    name: "Thomas Anderson",
    role: "Healthcare Technology Director",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "Stellarplx's deep understanding of healthcare operations sets them apart. Their solutions don't just work - they work specifically for our industry's unique challenges.",
  },
  {
    name: "Amanda Foster",
    role: "Business Development Manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "The personalized AI agents from Stellarplx have revolutionized our client acquisition. Their technology meets patients where they are, creating meaningful connections that translate to better outcomes.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function TestimonialSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-title text-6xl text-foreground ">
              Trusted by Industry Leaders
            </h2>
            <p className="text-body mt-6">
              Stellarplx helps organizations build efficient AI agents and automation systems that save time, money, and resources while improving client satisfaction.
            </p>
          </div>
          <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="space-y-3 *:border-none *:shadow-none"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card
                    className="rounded-none outline outline-dotted divide-dotted bg-stone-100"
                    key={index}
                  >
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}