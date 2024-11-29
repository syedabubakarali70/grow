import HeroSection from "@/shared/components/Layout/HeroSection"
import { Button } from "@/shared/components/ui/Button"
import Image from "next/image"
import Link from "next/link"

const cards = [
  {
    src: "/images/homepageCards/card1.png",
  },
  {
    src: "/images/homepageCards/card2.png",
  },
  {
    src: "/images/homepageCards/card3.png",
  },
  {
    src: "/images/homepageCards/card4.png",
  },
  {
    src: "/images/homepageCards/card5.png",
  },
  {
    src: "/images/homepageCards/card6.png",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection>
        <h1 className="text-white">ECD Resource Centre!</h1>
        <p className="font-semibold text-white">Free downloads for preschool owners, managers, teachers and parents.</p>
        <p className="text-white">
          Welcome to the Early Childhood Development (ECD) Resource Centre, a helpful library of free downloadable
          policies, procedures, templates, educational guides, classroom tools and more. These resources were
          contributed by local ECD experts - thank you!
        </p>
        <Link href="/categories">
          <Button variant="custom" className="bg-lime">
            Access Resources Here
          </Button>
        </Link>
        <p className="font-medium text-white">Our resources partners</p>
      </HeroSection>
      <section className="custom-container-md relative -top-6 flex flex-col gap-6 pb-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-6">
          {/* <div className=" flex flex-wrap gap-4"> */}
          {cards.map((card, index) => (
            <div key={index} className="max-h-[363px]">
              <Image
                src={card.src}
                width={363}
                height={363}
                alt={`card-${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 text-darkblue sm:items-end sm:justify-end sm:text-right">
          <p className="font-bold">Need more support?</p>
          <p className="max-w-[34rem]">
            Discover our free ECD management apps for ECD centre owners, teachers and parents. These one-stop-shop
            mobile apps are easy to use and designed for South African preschools specifically.
          </p>
          <Button variant="custom" className="bg-lightCoral">
            Explore the ECD apps
          </Button>
        </div>
      </section>
    </>
  )
}
