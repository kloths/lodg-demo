import { MenuIcon } from "lucide-react";
import Link from "next/link";
import HeaderCTAs from "./header-ctas";
import HeaderLinks from "./header-links";
import Logo from "./logo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Main navigation">
          <MenuIcon className="size-fit" />
        </Button>
      </SheetTrigger>
      <SheetContent className="text-zinc-800">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Logo />
            </Link>
          </SheetTitle>
          <ul className="flex flex-col gap-4 py-4">
            <HeaderLinks />
          </ul>
          <HeaderCTAs />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
