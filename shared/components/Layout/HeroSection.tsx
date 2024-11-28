import Image from "next/image";
import clsx from "clsx";

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full bg-darkblue pb-6 min-h-56">
      <div className="ml-auto pl-4 h-24 max-w-72 ">
        <div className="relative w-full h-full max-w-72">
          <Image src="/favicon/favicon.svg" fill alt="logo" />
        </div>
      </div>
      <div
        className={clsx({
          "custom-container-md  pt-8 pb-4 flex flex-col gap-4 items-start relative z-30":
            children,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
