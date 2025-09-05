import { config } from "@/lib/config";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative size-6 sm:size-8">
        <Image
          src="/icon-512x512.png"
          alt="Lodg Logo"
          className="object-contain"
          fill
        />
      </div>
      <span className="text-lg font-bold sm:text-xl">{config.name}</span>
    </div>
  );
};

export default Logo;
