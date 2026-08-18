import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects";

// Incrementing per-section delay so the page cascades in on load/scroll
// instead of every section fading up simultaneously.
const STAGGER = 0.08;

const testimonials = [
  {
    // Blank lines below become paragraph breaks. Add/remove blank lines to
    // control spacing — an extra blank line adds extra gap.
    quote: `Nikhil joined SpotDraft in 2023 and quickly became a key driver of product success. He has a remarkable ability to take feedback - from both leadership and customers—and turn it into impactful solutions.

            One of his key contributions was streamlining the contract signing process, significantly reducing turnaround time - a feature widely adopted by executives across our customer base. His strategic thinking and execution have made a tangible difference. 

            Any company would be lucky to have Nikhil as a Product Manager.`,
    name: "[Shashank Bijapur, CEO @ SpotDraft]",
  },
  {
    quote: `Nikhil joined SpotDraft as a product manager and quickly became an essential part of the team. He consistently demonstrated a strong ability to identify key problems, collaborate across teams, and build impactful solutions.

            What stands out most about Nikhil is his growth mindset. He transformed from someone still developing his data skills into a data-first PM who uses metrics to guide decisions without losing sight of customer needs. His proactive ownership of projects, like implementing a feature to help signatures on SpotDraft be collected 80% faster, made a tangible impact on the overall customer experience.

            Any team would benefit from Nikhil’s curiosity, execution skills, and customer-centric approach. I highly recommend him!`,
    name: "[Rohith Salim, Ex-Founder & CPO @ SpotDraft]",
  },
  {
    quote: `Nikhil joined SpotDraft as a young PM in 2023, full of energy and fresh ideas. From the start, he showed an eagerness to take on complex projects, quickly proving himself as someone I could trust to engage with customers, gather insights, and make well-informed decisions.

            While he was initially raw in how he approached data, he actively worked on sharpening that skill—and today, he is a data-first PM who balances intuition with metrics-driven decision-making. His ability to navigate ambiguity, and willingness to take ownership have made him an invaluable part of the team. 

            Anyone looking for a product manager who learns fast, listens well, and isn’t afraid to take on challenges would be lucky to work with Nikhil.`,
    name: "[Rammath Shenoy, Ex-Head of Product @ SpotDraft]",
  },
  {
    quote: `I had the opportunity to work with Nikhil on several projects at SpotDraft, and he is an exceptional product manager. He thinks deeply about the end-to-end user experience and uses data to make thoughtful decisions. He stays focused on solving user problems at their core and is excellent at collaborating with stakeholders. 
    
            Nikhil also has strong design judgment and consistently helps teams refine the product through insightful feedback and additional research. 

            I really enjoyed working with him, and together with our engineering team, we were able to move quickly and ship products efficiently. His dedication to delivering the best possible experience for users makes him a valuable addition to any team.`,
    name: "[Mohit Kumar Singh, Ex-Principal Product Designer @ SpotDraft]",
  },
];

export default function Home() {
  const heroProject = projects[0];

  return (
    <main className="flex-1">
      {/* Landing */}
      <ScrollReveal
        delay={0 * STAGGER}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:py-32"
      >
        <div className="flex flex-1 flex-col gap-6 text-center sm:text-left">
          <p className="font-mono text-md uppercase tracking-widest text-signal">
            Product Manager - AI / UX
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-offwhite sm:text-6xl">
            Building products <span className="text-red-500">people</span> actually want to use
          </h1>
          <p className="max-w-l text-lg text-muted sm:mx-0 mx-auto">
            I'm a product manager in Chicago. I'd rather solve the real problem than ship the impressive-looking feature. I let data settle most arguments, and I move fast without waiting to be told what matters.
          </p>
        </div>
        <Image
          src="/profilephoto.jpg"
          alt="Your photo"
          width={320}
          height={320}
          className="aspect-square w-64 shrink-0 rounded-2xl object-cover sm:w-80"
        />
      </ScrollReveal>

      {/* Hero project */}
      <ScrollReveal
        delay={1 * STAGGER}
        className="mx-auto w-full max-w-6xl px-6 py-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-muted">
          Featured project
        </p>
        <Link
          href={`/projects/${heroProject.slug}`}
          className="group mt-6 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-signal/50 sm:h-[28rem] sm:flex-row"
        >
          <div className="relative h-[28rem] w-full sm:h-full sm:w-1/2">
            {heroProject.photo ? (
              <Image
                src={heroProject.photo}
                alt={`${heroProject.title} photo`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder label="Hero project photo" className="h-full w-full" />
            )}
          </div>
          <div className="flex w-full flex-col justify-center gap-3 px-8 py-8 sm:w-1/2">
            <h2 className="font-display text-3xl font-bold text-offwhite group-hover:text-signal">
              {heroProject.title}
            </h2>
            <p className="text-muted">{heroProject.description}</p>
          </div>
        </Link>
      </ScrollReveal>

      {/* Navigation boxes */}
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3">
        {[
          { href: "/projects", label: "Projects" },
          { href: "/resume", label: "Resume" },
          { href: "/about", label: "About Me" },
        ].map((item, i) => (
          <ScrollReveal key={item.href} delay={2 * STAGGER + i * 0.06}>
            <Link
              href={item.href}
              className="flex aspect-square flex-col items-start justify-end rounded-2xl border border-white/10 bg-card p-8 transition-colors hover:border-signal/50"
            >
              <span className="font-display text-2xl font-bold text-offwhite">
                {item.label}
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      {/* Testimonials */}
      <ScrollReveal
        delay={3 * STAGGER}
        className="mx-auto w-full max-w-6xl px-6 py-16"
      >
        <h2 className="font-display text-3xl font-bold text-offwhite">
          What people say
        </h2>
        <TestimonialCarousel className="mt-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="w-[85%] flex-none snap-start sm:w-[calc((100%-3rem)/2.5)]"
            >
              <TestimonialCard quote={testimonial.quote} name={testimonial.name} />
            </div>
          ))}
        </TestimonialCarousel>
      </ScrollReveal>

      {/* Contact form */}
      <div id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
        <ScrollReveal
          delay={4 * STAGGER}
          className="flex w-full flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
              Get in touch
            </h2>
            <p className="text-muted">
              Have a role, a product question, or just want to say hi? Send me a message.
            </p>
          </div>
          <ContactForm />
        </ScrollReveal>
      </div>
    </main>
  );
}
