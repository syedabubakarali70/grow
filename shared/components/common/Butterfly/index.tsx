"use client"
import Image from "next/image"

import { usePathname } from "next/navigation"
const Butterfly = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname === "/login" && (
        <div className="absolute bottom-96 z-[-1] hidden md:right-0 md:block lg:bottom-40 xl:-right-36">
          <Image src="/icons/ui/Butterfly.svg" width={400} height={400} alt="" />
        </div>
      )}
    </>
  )
}

export default Butterfly
