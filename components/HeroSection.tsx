import Image from "next/image";

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full bg-darkblue relative">
      <div className="hidden absolute w-full right-0 top-5 md:flex justify-end ">
        <Image src="/logo-lime.svg" width={300} height={100} alt="logo" />
      </div>
      <div className="custom-container pt-10 md:pt-40 pb-10 flex flex-col gap-4 items-start">
        {children}
      </div>
      ;
    </div>
  );
};

export default HeroSection;
