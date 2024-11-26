"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Butterfly = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" && (
        <div className="absolute z-[-1] hidden xl:block -right-52 bottom-40 ">
          <Image src="/Butterfly.svg" width={400} height={400} alt="" />
        </div>
      )}
    </>
  );
};

export default Butterfly;
