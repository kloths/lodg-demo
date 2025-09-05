import { config } from "@/lib/config";
import Link from "next/link";
import { ComponentProps } from "react";
import Logo from "./logo";

type FooterProps = ComponentProps<"footer">;

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={`py-6 text-zinc-800 sm:py-8 md:py-12 lg:py-16 ${
        className || ""
      }`}
      {...props}
    >
      <div className="mx-auto flex max-w-[1080px] flex-col gap-5 px-4">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          {config.navigation.footer.map((item) => (
            <div key={item.category}>
              <h3 className="mb-2 font-medium">{item.category}</h3>
              <ul className="space-y-2">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-zinc-700">
          © {new Date().getFullYear()} {config.name}, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
