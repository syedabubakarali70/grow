import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import P from "@/components/ui/p";
import Image from "next/image";

const cards = [
  {
    src: "/homepageCards/card1.png",
  },
  {
    src: "/homepageCards/card2.png",
  },
  {
    src: "/homepageCards/card3.png",
  },
  {
    src: "/homepageCards/card4.png",
  },
  {
    src: "/homepageCards/card5.png",
  },
  {
    src: "/homepageCards/card6.png",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection>
        <H1>ECD Resource Centre!</H1>
        <P className="text-white font-semibold">
          Free downloads for preschool owners, managers, teachers and parents.
        </P>
        <P className="text-white">
          Welcome to the Early Childhood Development (ECD) Resource Centre, a
          helpful library of free downloadable policies, procedures, templates,
          educational guides, classroom tools and more. These resources were
          contributed by local ECD experts - thank you!
        </P>
        <Button variant="custom" className="bg-lime">
          Access Resources Here
        </Button>
      </HeroSection>
      <section className="custom-container pb-5 flex flex-col gap-6 relative -top-6">
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cards.map((card, index) => (
            <div key={index}>
              <Image
                src={card.src}
                width={100}
                height={200}
                alt={`card-${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center sm:justify-end sm:items-end gap-4 flex-col text-darkblue sm:text-right">
          <P className="font-semibold">Need more support?</P>
          <P className="max-w-lg">
            Discover our free ECD management apps for ECD centre owners,
            teachers and parents. These one-stop-shop mobile apps are easy to
            use and designed for South African preschools specifically.
          </P>
          <Button variant="custom" className="bg-lightCoral">
            Explore the ECD apps
          </Button>
        </div>
      </section>
    </main>
  );
}
