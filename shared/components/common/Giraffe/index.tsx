// "use client";
// import Image from "next/image";

// import { usePathname } from "next/navigation";
// const Giraffe = () => {
//   const pathname = usePathname();
//   const width = pathname === "/" ? 535 : 625;
//   const src = pathname === "/" ? "/Giraffe.svg" : "/longGiraffe.svg";
//   return (
//     <>
//       {(pathname === "/" || pathname === "/login") && (
//         <div className="absolute z-[-1] bottom-32 lg:bottom-0  h-screen hidden md:block -left-10 xl:-left-20  ">
//           <div className={` w-[700px] min-h-screen relative`}>
//             <Image src={src} fill alt="" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Giraffe;

"use client"
import Image from "next/image"

import { usePathname } from "next/navigation"
const Giraffe = () => {
  const pathname = usePathname()
  // const width = pathname === "/" ? 535 : 535;

  return (
    <>
      {(pathname === "/" || pathname === "/login") && (
        <div className="absolute -left-10 bottom-32 z-[-1] hidden md:block lg:bottom-0 xl:-left-20">
          <Image src="/icons/ui/Giraffe.svg" width={535} height={1000} alt="" />
        </div>
      )}
    </>
  )
}

export default Giraffe
