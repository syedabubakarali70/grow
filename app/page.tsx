"use client";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

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
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  console.log(isLoggedIn);
  const link = isLoggedIn ? "/categories" : "/login";
  return (
    <>
      <HeroSection>
        <h1 className="text-white">ECD Resource Centre!</h1>
        <p className="text-white font-semibold">
          Free downloads for preschool owners, managers, teachers and parents.
        </p>
        <p className="text-white">
          Welcome to the Early Childhood Development (ECD) Resource Centre, a
          helpful library of free downloadable policies, procedures, templates,
          educational guides, classroom tools and more. These resources were
          contributed by local ECD experts - thank you!
        </p>
        <Link href={link}>
          <Button variant="custom" className="bg-lime">
            Access Resources Here
          </Button>
        </Link>
      </HeroSection>
      <section className="custom-container-md pb-5 flex flex-col gap-6 relative -top-6">
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
          <p className="font-semibold">Need more support?</p>
          <p className="max-w-lg">
            Discover our free ECD management apps for ECD centre owners,
            teachers and parents. These one-stop-shop mobile apps are easy to
            use and designed for South African preschools specifically.
          </p>
          <Button variant="custom" className="bg-lightCoral">
            Explore the ECD apps
          </Button>
        </div>
      </section>
    </>
  );
}
