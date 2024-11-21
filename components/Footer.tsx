import Image from "next/image";
import P from "./ui/p";
import H4 from "./ui/h4";
import { Button } from "./ui/button";

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
    bg: "bg-coral",
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
      <div className="max-w-screen-lg mx-auto w-full px-4 py-10 absolute z-[-1] bottom-0 hidden xl:block left-20">
        <Image src="/Giraffe.svg" width={500} height={400} alt="" />
      </div>
      <div className="w-full bg-darkblue">
        <div className="w-full">
          <img src="/lime-strip.png" width={"100%"} height={50} alt="" />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 py-10 text-white ">
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

            <div className="flex-1 flex flex-col gap-4 text-sm">
              <P>
                Grow ECD is a non-profit social enterprise. We equip and connect
                early learning centres with the skills, support, and resources
                they need to run successful preschools where children can
                thrive.
              </P>
              <div className="flex flex-col">
                <P>NPO number 161-786NPO</P>
                <P>PBO number 930048936</P>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <H4>Stay in Touch</H4>
              {btns1.map((btn, index) => (
                <Button
                  key={index}
                  className={`${btn.bg} w-full`}
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
              <H4>Quick Links</H4>
              {btns2.map((btn, index) => (
                <Button
                  key={index}
                  className={`${btn.bg} w-full`}
                  variant="custom"
                >
                  {btn.content}
                </Button>
              ))}
              <P className="text-sm text-center mt-2 cursor-pointer">
                Privacy Policy
              </P>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
