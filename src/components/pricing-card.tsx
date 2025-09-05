import { Plan } from "@/lib/types";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PricingCard = (plan: Plan) => {
  const { name, description, price, features, includesPlan, billing } = plan;
  return (
    <Card className="h-full transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="gap-6">
        <div className="space-y-1.5">
          <CardTitle className="text-lg">{name}</CardTitle>
          {description && (
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          )}
        </div>
        <span>
          <span className="mb-4 text-3xl font-semibold">
            {price && `$${price}`}
          </span>
          {billing === "monthly" && <span>/month</span>}
          {billing === "annual" && <span>/year</span>}
        </span>
      </CardHeader>
      <CardContent className="h-full">
        <ul className="space-y-3">
          {includesPlan && (
            <li className="flex gap-2">
              <ArrowLeftIcon className="mt-1 size-4 min-h-4 min-w-4 rotate-90 lg:rotate-0" />
              <span>Everything in {includesPlan}, and...</span>
            </li>
          )}
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <CheckIcon className="mt-1 size-4 min-h-4 min-w-4" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full cursor-pointer">Get started</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
