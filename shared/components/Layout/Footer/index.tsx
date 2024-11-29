import Image from "next/image"
import { Button } from "@/shared/components/ui/Button"
import Giraffe from "@/shared/components/common/Giraffe"
import Butterfly from "@/shared/components/common/Butterfly"

const btns1 = [
  {
    content: "Contact Us",
    bg: "bg-lime",
  },
  {
    content: "Subscribe",
    bg: "bg-yellow",
  },
]
const btns2 = [
  {
    content: "ECD App",
    bg: "bg-lightblue",
  },
  {
    content: "ECD Accelerator",
    bg: "bg-green",
  },
  {
    content: "ECD Curriculum",
    bg: "bg-red",
  },
]

const socials = [
  {
    src: "/icons/social/facebook.svg",
    name: "Facebook",
  },
  {
    src: "/icons/social/linkedin.svg",
    name: "LinkedIn",
  },
  {
    src: "/icons/social/youtube.svg",
    name: "Youtube",
  },
]

const Footer = () => {
  return (
    <footer className="relative z-20 w-full">
      <div className="w-full bg-darkblue">
        <div className="relative h-6 w-full">
          <Image src="/images/lime-strip.png" fill alt="" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white">
          <Giraffe />
          <Butterfly />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            <div className="flex w-[60%] items-start sm:items-center lg:w-[100%] lg:items-start">
              <Image src="/icons/ui/logo-white.svg" alt="logo" width={200} height={100} className="flex-1" />
            </div>

            <div className="flex flex-1 flex-col gap-4 text-sm text-white">
              <p className="text-inherit">
                Grow ECD is a non-profit social enterprise. We equip and connect early learning centres with the skills,
                support, and resources they need to run successful preschools where children can thrive.
              </p>
              <div className="flex flex-col text-white">
                <p className="text-inherit">NPO number 161-786NPO</p>
                <p className="text-inherit">PBO number 930048936</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white">Stay in Touch</h4>
              {btns1.map((btn, index) => (
                <Button key={index} className={`${btn.bg} w-[50%] lg:w-full`} variant="custom">
                  {btn.content}
                </Button>
              ))}
              <div className="flex gap-2">
                {socials.map((social, index) => (
                  <Image
                    key={index}
                    src={social.src}
                    width={32}
                    height={32}
                    alt={social.name}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white">Quick Links</h4>
              {btns2.map((btn, index) => (
                <Button key={index} className={`${btn.bg} w-[50%] lg:w-full`} variant="custom">
                  {btn.content}
                </Button>
              ))}
              <p className="mt-2 cursor-pointer text-sm lg:text-center">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
