import { config } from "@/lib/config";

const Why = () => {
  return (
    <section className="py-12 text-zinc-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1080px] px-4 text-center">
        <h2 className="mb-5 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          Why {config.name}?
        </h2>
        <p className="text-muted-foreground leading-relaxed sm:text-lg">
          Stop sending guests back and forth between Airbnb or PDFs. With Lodg,
          share all your property&apos;s detailed amenities, key details, and
          guest add-ons on a single secure page. Optional add-ons help boost
          revenue or improve guest experiences — all while saving time and
          reducing repetitive questions.
        </p>
      </div>
    </section>
  );
};

export default Why;
