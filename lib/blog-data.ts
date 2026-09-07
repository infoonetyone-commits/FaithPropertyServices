export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string; // ISO
  readTime: string;
  body: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-your-office-needs-a-professional-clean",
    title: "5 Signs Your Office Needs a Professional Clean",
    excerpt:
      "From tired carpets to overflowing bins, your workspace sends signals long before anyone complains out loud. Here's what to watch for.",
    image: "/sp-commercial.jpg",
    date: "2026-07-06",
    readTime: "4 min read",
    body: [
      "A clean office isn't just about appearances — it directly affects how your team feels walking in each morning, and how clients judge your business in the first thirty seconds of a visit. The trouble is, day-to-day wear builds up so gradually that it's easy to stop noticing it.",
      "Dull, matted carpet is usually the first sign. Foot traffic grinds dust and grit into fibres that a vacuum alone can't lift, and over time this both dulls the appearance and shortens the carpet's life. If high-traffic areas look noticeably different from the corners, it's time for a deeper clean.",
      "Overflowing bins and a build-up of dust on shelving and monitors are close behind — small things individually, but together they signal that cleaning has become reactive rather than scheduled. Streaky glass partitions and meeting-room tables are another giveaway, especially in offices that rely on glass for an open-plan feel.",
      "Finally, watch for a rise in sick days. Shared surfaces — door handles, kitchen benches, lift buttons — are the biggest vector for spreading colds and flu through a workplace, and irregular cleaning schedules let that build-up compound.",
      "None of these signs mean your team isn't trying — they mean the cleaning cadence hasn't kept pace with how the space is actually used. A scheduled commercial clean, tailored to your foot traffic and floor plan, fixes all five at once and keeps them from creeping back.",
    ],
  },
  {
    slug: "whats-actually-included-in-a-commercial-clean",
    title: "What's Actually Included in a Commercial Clean",
    excerpt:
      "Not all cleans are equal. Here's exactly what a proper commercial cleaning service covers — and what to check before you sign a contract.",
    image: "/service-commercial.jpg",
    date: "2026-07-27",
    readTime: "5 min read",
    body: [
      "\"Commercial cleaning\" can mean very different things depending on who you ask, and that ambiguity is where a lot of businesses end up disappointed with a provider that technically did what the contract said, just not what they expected.",
      "At minimum, a proper commercial clean covers all shared and working surfaces — desks, benches, partitions — along with floors (vacuumed or mopped depending on surface type), bathrooms fully sanitised, kitchen and breakroom areas, and rubbish and recycling collection. Window sills, light switches, and door handles should be included as standard high-touch points, not an add-on.",
      "Beyond the basics, a good provider will document a site-specific scope during the initial inspection — what gets done daily versus weekly, which areas need extra attention (server rooms, medical suites, food-prep areas), and what frequency actually matches your foot traffic rather than a generic template.",
      "It's worth asking directly about compliance: is the team insured, are staff police-checked, and are chemicals and equipment appropriate for your industry's safety standards? These aren't add-ons either — they're the difference between a cleaner and a compliant commercial cleaning partner.",
      "When you know exactly what's included, comparing quotes becomes far easier, and there are no surprises three months into the contract when something you assumed was covered turns out not to be.",
    ],
  },
  {
    slug: "office-hygiene-tips-for-flu-season",
    title: "Office Hygiene Tips for Flu Season",
    excerpt:
      "Cold and flu season hits shared workspaces hardest. Here's a practical checklist to keep your team healthier through winter.",
    image: "/service-healthcare.jpg",
    date: "2026-07-20",
    readTime: "4 min read",
    body: [
      "Winter reliably brings a spike in sick days, and in an office environment the cause is almost always the same: high-touch surfaces that get cleaned far less often than they get touched. Door handles, lift buttons, shared keyboards, and kitchen taps are the biggest offenders.",
      "The first practical step is increasing the frequency of touchpoint cleaning specifically — not necessarily a full deep clean every day, but a targeted wipe-down of handles, switches, and shared equipment at least once, ideally twice, during the working day.",
      "Hand sanitiser stations at entry points and near shared equipment (printers, kitchen appliances) make a measurable difference, especially when paired with simple signage reminding staff to use them — visibility matters more than people expect.",
      "Ventilation is the other half of the equation. Where possible, keeping air moving through a space — even opening windows briefly between meetings — reduces how long airborne particles linger in a room.",
      "None of this replaces a proper cleaning schedule, but layering these habits on top of one noticeably reduces how far a single cold spreads through a team. If your current cleaning schedule doesn't already flex up during flu season, that's worth raising with your provider.",
    ],
  },
  {
    slug: "why-after-hours-cleaning-works-better-for-busy-workplaces",
    title: "Why After-Hours Cleaning Works Better for Busy Workplaces",
    excerpt:
      "A fresh office every morning, with zero disruption to your working day. Here's why after-hours cleaning is the default for busy sites.",
    image: "/banner-carpet-steam.jpg",
    date: "2026-07-29",
    readTime: "3 min read",
    body: [
      "For any workplace with a steady flow of staff, clients, or the public, cleaning during business hours is a constant compromise — vacuuming around meetings, mopping around foot traffic, and never quite getting into the corners that need real attention.",
      "After-hours cleaning removes that trade-off entirely. The team works once everyone's gone, has full access to every space, and your office is simply ready — desks clear, floors done, bins emptied — by the time the first person arrives the next morning.",
      "It also allows for tasks that are impractical during the day: full floor treatments, detailed bathroom sanitising, and equipment that needs space to operate safely, like steam cleaners or floor buffers.",
      "The main adjustment is logistics — building access, security, and alarm arrangements need to be sorted upfront — but once that's set up, it runs quietly in the background and your team never has to think about it.",
    ],
  },
  {
    slug: "why-property-managers-choose-professional-cleaners",
    title: "Why Property Managers Choose Professional Cleaners",
    excerpt:
      "Property managers juggle enough. Here's why outsourcing cleaning to a dedicated, documented provider consistently pays off.",
    image: "/sp-legacy.jpg",
    date: "2026-07-24",
    readTime: "4 min read",
    body: [
      "Property managers are accountable for buildings they don't occupy, which makes cleaning one of the hardest things to manage directly — you're relying on tenant feedback and periodic inspections rather than being there every day.",
      "That's exactly why a dedicated commercial cleaning partner matters more here than almost anywhere else. A provider that documents every visit — what was done, when, and by whom — gives a property manager the paper trail they need if a tenant raises an issue, without having to chase it down after the fact.",
      "Consistency is the other piece. Buildings with multiple tenancies need a cleaning standard that doesn't vary depending on which contractor happened to be rostered that week. A single accountable provider, with a fixed scope and regular supervision, removes that variability.",
      "The result is fewer tenant complaints reaching the property manager's desk in the first place, and when something does come up, a clear record of what's been done to resolve it — which is ultimately what property managers are being judged on.",
    ],
  },
  {
    slug: "how-a-clean-workspace-boosts-productivity",
    title: "How a Clean Workspace Boosts Productivity",
    excerpt:
      "A tidy desk isn't just a tidy mind — there's a real, measurable link between workplace cleanliness and how teams perform.",
    image: "/service-industrial.jpg",
    date: "2026-07-13",
    readTime: "3 min read",
    body: [
      "It's tempting to file \"a clean office helps productivity\" under common sense that doesn't need proving, but the mechanism is worth understanding, because it points to what actually matters when you're deciding how often to clean.",
      "Clutter and mess add a small but constant cognitive load — every visible pile of unfiled paperwork or dusty shelf is something the brain registers, even passively, as unfinished business. Over a full working day, that adds up to real, measurable fatigue.",
      "There's also a direct health link: offices with irregular cleaning schedules see more dust, allergens, and surface bacteria, which translates into more sick days and, for people with allergies or asthma, more days working below their best even when they're technically present.",
      "None of this requires an aggressive cleaning schedule — it requires a consistent one, calibrated to how the space is actually used. The payoff isn't dramatic on any single day, but compounds steadily across a year in fewer sick days and a team that's simply more comfortable coming to work.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
