import Image from "next/image";

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full bg-darkblue relative">
      <div className="hidden absolute w-full right-0 top-1 md:flex justify-end ">
        <Image src="/favicon/favicon.svg" width={300} height={100} alt="logo" />
      </div>
      <div className="custom-container-md pt-40 pb-10 flex flex-col gap-4 items-start">
        {children}
      </div>
      ;
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
