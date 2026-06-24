export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-teal px-8 py-14 text-center text-white sm:px-14">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Ready to transform your workplace or facility?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-white/80">
            At Faith Property Services, we help businesses across Victoria
            maintain spotless, safe, and professional environments from offices
            and factories to schools, hospitals, and retail spaces.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-light">Get a Free Quote</a>
            <a href="tel:1300849252" className="btn-outline">Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
