"use client"
import Image from "next/image"
import clsx from "clsx"
import { usePathname } from "next/navigation"

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  const path = usePathname()
  const isVisible = path === "/" || path === "/login"
  return (
    <div className="min-h-56 w-full bg-darkblue pb-6 md:max-h-96 lg:max-h-[23rem] xl:max-h-[22rem]">
      <div
        className={clsx("flex w-full items-end md:h-24", {
          "fixed top-0 z-50 h-40 bg-darkblue pb-6 md:h-[7.5rem]": isVisible,
        })}
      >
        <div className={`absolute right-0 top-0 md:h-24 md:w-64 lg:w-72 ${isVisible && "h-24 w-72"}`}>
          <Image src="/favicon/favicon.svg" fill alt="logo" priority />
        </div>
        <div
          className={clsx(`custom-container-md ${isVisible ? "block" : "hidden"}`, {
            "custom-container-lg": path === "/login",
          })}
        >
          <h2 className="line-height-6 text-lime">ECD Resource Hub</h2>
        </div>
      </div>
      <div
        className={clsx({
          "flex flex-col items-start gap-4 pb-4": children,
          "custom-container-md relative z-30 pt-40 md:pt-32": path === "/",
          "custom-container-lg md:max-h-24": path !== "/",
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default HeroSection
