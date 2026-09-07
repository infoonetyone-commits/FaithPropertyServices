"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Office Manager",
    img: "/testimonial-01.png",
    quote:
      "Faith Property Services has been incredible to work with. Their cleaning team is always on time, professional, and leaves our workspace spotless every single day.",
  },
  {
    name: "Justin King",
    role: "Silverton Cricket Club President",
    img: "/testimonial-02.png",
    quote:
      "Highly recommend Faith Property Services, friendly people always willing to go the extra mile and not cut corners. Whilst there work is first class they are also community first type of company giving back to local clubs. You definitely wont be upset using this company as they get it done thanks for all your work guys",
  },
  {
    name: "Ash Hughes",
    role: "Google Review",
    initial: "A",
    color: "#4a9c6d",
    quote:
      "We recently had our floors cleaned and polished and the results are absolutely outstanding. From start to finish, Joseph was professional, punctual, and took great care in his work. He explained the process clearly and made sure everything was done right.",
  },
  {
    name: "Prasad Perera",
    role: "Google Review",
    initial: "P",
    color: "#5b7fbd",
    quote:
      "Definitely the best cleaning service in Melbourne! Faith Property Services delivers outstanding service every single time. The team is extremely professional, reliable, and pays great attention to detail. They take pride in their work.",
  },
  {
    name: "Shiran Anthonylage",
    role: "Google Review",
    initial: "S",
    color: "#8b6bbd",
    quote:
      "Really impressed with their work! They did an amazing job cleaning my home and paid attention to every detail. The staff was polite and very efficient. Will definitely book again.",
  },
  {
    name: "Dimuthu Weerasinghe",
    role: "Google Review",
    initial: "D",
    color: "#c17a3f",
    quote:
      "I've hired them a few times. Professional from start to finish. Easy booking, great communication, and an outstanding service. Never let me down.",
  },
  {
    name: "Amy Varley",
    role: "Google Review",
    initial: "A",
    color: "#bd5b6b",
    quote:
      "Joseph was so excellent to work with! I required an end of lease clean on a commercial property and Joseph and his team were fantastic. Extra cleaning had to be done at the request of the landlord and they came back promptly and delivered.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#3aa6b9">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.4 5.4 0 0 1-2.39 3.58v2.97h3.86c2.26-2.09 3.55-5.17 3.55-8.79z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.32a7.2 7.2 0 0 1 0-4.63V6.6H1.29a12 12 0 0 0 0 10.8l3.98-3.08z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.6l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="flex w-[380px] shrink-0 flex-col rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/10 sm:w-[420px]">
      <div className="flex items-center justify-between">
        <Stars />
        <GoogleMark />
      </div>
      <blockquote className="mt-4 line-clamp-4 font-body text-[0.95rem] leading-relaxed text-white/75">
        {r.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {"img" in r && r.img ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image src={r.img} alt={r.name} fill className="object-cover" />
          </div>
        ) : (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ring-1 ring-white/10"
            style={{ backgroundColor: "color" in r ? r.color : "#3aa6b9" }}
          >
            {"initial" in r ? r.initial : r.name[0]}
          </div>
        )}
        <div>
          <div className="font-heading text-sm font-semibold text-white">{r.name}</div>
          <div className="font-body text-xs text-white/50">{r.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

// Repeat the review set enough times that the belt is always wider than the
// viewport — with only 2 reviews, a single copy left long gaps of empty
// track between passes instead of a continuous stream of cards.
const REPEAT = 6;
const unit = Array.from({ length: REPEAT }, () => reviews).flat();

export default function Testimonials() {
  // Track is the (repeated) review list duplicated once more; animating it
  // from -50% to 0% scrolls the visible content left-to-right and loops
  // seamlessly the instant the duplicate half lines back up with the first.
  const track = [...unit, ...unit];

  return (
    <section className="bg-navy-deep/75 py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Honest Reviews from our Customers
          </h2>
        </Reveal>
      </div>

      <div
        className="group relative mt-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${REPEAT * 32}s` }}
        >
          {track.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
