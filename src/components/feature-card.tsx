import { Feature } from "@/lib/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const FeatureCard = (feature: Feature) => {
  const { title, description } = feature;
  return (
    <Card className="h-full transition-shadow duration-100 hover:shadow-md">
      <CardHeader className="gap-3">
        <div className="space-y-2">
          <div className="w-fit rounded-full bg-teal-100 p-2 text-teal-600">
            <feature.icon />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
