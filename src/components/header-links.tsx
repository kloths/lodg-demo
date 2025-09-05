import { config } from "@/lib/config";
import Link from "next/link";

const HeaderLinks = () => {
  return (
    <>
      {config.navigation.header.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );
};

export default HeaderLinks;
