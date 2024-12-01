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
        <div className="w-full overflow-x-scroll">
          <div className="flex h-[40vw] max-h-40 w-[250vw] gap-4 md:grid md:h-24 md:w-full md:grid-cols-6">
            {cards.map((card, index) => (
              <div key={index} className="relative w-[40vw] max-w-40 md:h-auto md:w-auto">
                <Image src={card.src} fill alt={`card-${index + 1}`} className="rounded-lg md:h-full md:w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-4 text-right text-darkblue">
          <p className="font-bold">Need more support?</p>
          <p className="w-[60vw] md:max-w-[34rem]">
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
