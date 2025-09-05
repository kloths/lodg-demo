import LinkButton from "./link-button";

const Hero = () => {
  return (
    <section className="bg-white py-16 text-zinc-800 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center px-4 text-center">
        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Simplify managing your rentals
        </h1>
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed sm:text-xl">
          Manage listings with detailed amenities, key details, and guest
          add-ons all in one place. Save time and increase your rental income
          with Lodg.
        </p>
        <LinkButton href="/#pricing">Get started</LinkButton>
      </div>
    </section>
  );
};

export default Hero;
