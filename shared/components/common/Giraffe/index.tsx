"use client"
import clsx from "clsx"
import Image from "next/image"

import { usePathname } from "next/navigation"
const Giraffe = () => {
  const path = usePathname()

  return (
    <>
      {(path === "/" || path === "/login") && (
        <div
          className={clsx(
            "absolute bottom-[500px] left-0 z-[-1] sm:bottom-[300px] md:-left-10 md:bottom-32 lg:bottom-0 xl:-left-20",
            {
              "xl:-left-32": path === "/login",
            }
          )}
        >
          <Image
            src="/icons/ui/Giraffe.svg"
            width={275}
            height={1000}
            alt=""
            className={clsx("md:w-[475px] lg:w-[440px]", { "w-0 lg:w-[500px]": path === "/login" })}
          />
        </div>
      )}
    </>
  )
}

export default Giraffe
