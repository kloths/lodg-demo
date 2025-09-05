import { config } from "@/lib/config";
import LinkButton from "./link-button";

const HeaderCTAs = () => {
  return (
    <>
      <LinkButton href="#" variant="outline">
        Sign in
      </LinkButton>
      <LinkButton href="/#pricing">Get {config.name}</LinkButton>
    </>
  );
};

export default HeaderCTAs;
