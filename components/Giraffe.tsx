"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Giraffe = () => {
  const pathname = usePathname();
  const width = pathname === "/resources" ? 500 : 400;

  return (
    <>
      {(pathname === "/resources" || pathname === "/login") && (
        <div className="max-w-screen-lg mx-auto w-full px-4 py-10 absolute z-[-1] bottom-0 hidden xl:block left-20 ">
          <Image src="/Giraffe.svg" width={width} height={400} alt="" />
        </div>
      )}
    </>
  );
};

export default Giraffe;
