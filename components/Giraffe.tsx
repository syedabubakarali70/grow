"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Giraffe = () => {
  const pathname = usePathname();
  const width = pathname === "/" ? 535 : 435;

  return (
    <>
      {(pathname === "/" || pathname === "/login") && (
        <div className="absolute z-[-1] bottom-32 lg:bottom-0 hidden md:block -left-10 xl:-left-20  ">
          <Image src="/Giraffe.svg" width={width} height={1000} alt="" />
        </div>
      )}
    </>
  );
};

export default Giraffe;
