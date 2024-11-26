import Image from "next/image";
import { Button } from "./ui/button";
import Giraffe from "./Giraffe";

const btns1 = [
  {
    content: "Contact Us",
    bg: "bg-lime",
  },
  {
    content: "Subscribe",
    bg: "bg-yellow",
  },
];
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
];

const socials = [
  {
    src: "/facebook.svg",
    name: "Facebook",
  },
  {
    src: "/linkedin.svg",
    name: "LinkedIn",
  },
  {
    src: "/youtube.svg",
    name: "Youtube",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-20 w-full">
      <div className="w-full bg-darkblue">
        <div className="w-full relative h-6">
          <Image src="/lime-strip.png" fill alt="" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 text-white relative">
          <Giraffe />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <div className="items-start flex sm:items-center lg:items-start w-[60%] lg:w-[100%]">
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={200}
                height={100}
                className="flex-1"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4 text-sm text-white">
              <p className="text-inherit">
                Grow ECD is a non-profit social enterprise. We equip and connect
                early learning centres with the skills, support, and resources
                they need to run successful preschools where children can
                thrive.
              </p>
              <div className="flex flex-col text-white">
                <p className="text-inherit">NPO number 161-786NPO</p>
                <p className="text-inherit">PBO number 930048936</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white">Stay in Touch</h4>
              {btns1.map((btn, index) => (
                <Button
                  key={index}
                  className={`${btn.bg} w-[50%] lg:w-full`}
                  variant="custom"
                >
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
                <Button
                  key={index}
                  className={`${btn.bg} w-[50%] lg:w-full`}
                  variant="custom"
                >
                  {btn.content}
                </Button>
              ))}
              <p className="text-sm lg:text-center mt-2 cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
