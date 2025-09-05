import { plans } from "@/data/plans";
import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 text-zinc-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1080px] px-4">
        <h2 className="mb-5 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          Pricing
        </h2>
        <ul className="flex flex-col justify-center gap-4 lg:flex-row">
          {plans.map((plan) => (
            <li key={plan.name} className="lg:flex-1">
              <PricingCard {...plan} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
