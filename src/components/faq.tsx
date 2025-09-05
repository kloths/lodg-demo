import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-12 text-zinc-800 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1080px] px-4">
        <h2 className="mb-5 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          FAQ
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="text-base">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
