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
          className={clsx("absolute -left-10 bottom-32 z-[-1] hidden md:block lg:bottom-0 xl:-left-20", {
            "xl:-left-32": path === "/login",
          })}
        >
          <Image
            src="/icons/ui/Giraffe.svg"
            width={475}
            height={1000}
            alt=""
            className={clsx("lg:w-[450px]", { "lg:w-[500px]": path === "/login" })}
          />
        </div>
      )}
    </>
  )
}

export default Giraffe
