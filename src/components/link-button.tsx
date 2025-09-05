import Link from "next/link";
import { ComponentProps } from "react";
import { Button } from "./ui/button";

interface LinkButtonProps extends ComponentProps<typeof Button> {
  href: string;
}

const LinkButton = ({ href, children, ...props }: LinkButtonProps) => {
  return (
    <Button {...props} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default LinkButton;
