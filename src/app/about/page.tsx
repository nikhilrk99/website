import { coreValues } from "@/lib/about";
import ContactForm from "@/components/ContactForm";

const bio = [
  `I found product at a college recruiting seminar. Someone described the job and I realized I had been doing an unpaid version of it my whole life. Pulling apps apart, complaining about the ones that got it wrong, sketching the ones that should have existed. I had never thought of it as work. It was the first time a career felt obvious to me.`,
  `The instinct is more disciplined now. I want to know what people are struggling with before anyone writes a spec. The decision I'm proudest of was arguing against a feature leadership wanted, one that would have demoed beautifully and wasn't attached to a problem anyone had. I made the case for fixing the mobile app's UX instead, and keeping the users we had before building for the ones who weren't staying.`,
  `AI runs through most of how I work now, though the useful version of it is unglamorous. Most of my discovery starts with a rough prototype I build in Claude, real enough to put in front of a user and watch them react to. Finding out I'm wrong costs a day instead of a design sprint. Elsewhere it's quieter: pressure-testing a spec for the gaps I'd otherwise hit in sprint planning, getting a first read on a dataset in minutes. What I'm deliberate about is where it gets a vote. It makes me much faster at producing, and it still can't tell me what a user is quietly working around.`,
  `Away from work I'm happiest around anything with an engine. Cars, planes, racing especially. There's a sim rig at home I use to switch my brain off, though I'm also chasing lap times.`,
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
      <div className="flex flex-col gap-16 sm:flex-row">
        <div className="flex flex-1 flex-col gap-6 sm:flex-[3]">
          <h1 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Hi, I'm Nikhil.
          </h1>
          {bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-6 sm:flex-[2]">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-bold text-offwhite">
              Core values &amp; beliefs
            </h2>
            <div className="flex flex-col gap-6">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-card p-6"
                >
                  <h3 className="font-display text-lg font-bold text-signal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="mt-24 flex w-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            Get in touch
          </h2>
          <p className="text-muted">
            Have a role, a product question, or just want to say hi? Send me a message.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
