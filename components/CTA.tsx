export default function CTA({
  href = "/contact",
  light = false,
}: {
  href?: string;
  /** false = default dark style. "cloud"/"beige" render a light variant in that background colour. */
  light?: false | "cloud" | "beige";
}) {
  return (
    <section className={light ? `bg-${light} py-20 text-navy` : "bg-navy-deep/75 py-20 text-white"}>
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Ready to transform your workplace or facility?
        </h2>
        <p className={`mx-auto mt-5 max-w-2xl font-body text-lg ${light ? "text-navy/70" : "text-white/80"}`}>
          At Faith Property Services, we help businesses across Victoria
          maintain spotless, safe, and professional environments from offices
          and factories to schools, hospitals, and retail spaces.
        </p>
        <div className="mt-8 flex justify-center">
          <a href={href} className="btn-primary">Get a Free Quote</a>
        </div>
      </div>
    </section>
  );
}
