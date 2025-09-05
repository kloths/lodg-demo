import { features } from "@/data/features";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <section id="features" className="py-12 text-zinc-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1080px] px-4">
        <h2 className="mb-5 text-center text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Features
        </h2>
        <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
