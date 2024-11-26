import Image from "next/image";
import clsx from "clsx";

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full bg-darkblue relative md:pt-40 pb-6 min-h-56">
      <div className="hidden absolute w-full right-0 top-1 md:flex justify-end   ">
        <Image src="/favicon/favicon.svg" width={300} height={100} alt="logo" />
      </div>
      <div
        className={clsx(
          "custom-container-md   pb-4 flex flex-col gap-4 items-start relative z-30"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="w-full max-w-sm relative h-24 md:hidden">
      <Image src="/favicon/favicon.svg" fill alt="" />
    </div>
  );
};

export default HeroSection;
