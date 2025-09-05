import LinkButton from "./link-button";

const CTAFooter = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-4 text-center">
        <h2 className="mb-6 text-center text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
          Simplify and streamline your rentals
        </h2>
        <p className="mb-10 text-lg leading-relaxed sm:text-xl">
          Join Lodg and showcase your listing(s) detailed amenities, key
          details, and guest add-ons in minutes.
        </p>
        <LinkButton href="/#pricing" variant="secondary">
          Simplify now
        </LinkButton>
      </div>
    </section>
  );
};

export default CTAFooter;
