"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Giraffe = () => {
  const pathname = usePathname();
  const width = pathname === "/" ? 535 : 435;

  return (
    <>
      {(pathname === "/" || pathname === "/login") && (
        <div className="absolute z-[-1] bottom-0 hidden xl:block -left-20 ">
          <Image src="/Giraffe.svg" width={width} height={400} alt="" />
        </div>
      )}
    </>
  );
};

export default Giraffe;
