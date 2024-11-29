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
        className={clsx("flex h-24 w-full items-end", {
          "fixed top-0 z-50 h-40 border-b-[16px] border-darkblue bg-darkblue md:h-24": isVisible,
          "h-40 md:h-24": path === "/",
        })}
      >
        <div className="absolute right-0 top-0 h-full max-h-24 w-full max-w-72">
          <Image src="/favicon/favicon.svg" fill alt="logo" priority />
        </div>
        <div
          className={clsx(`custom-container-md ${isVisible ? "block" : "hidden"}`, {
            "custom-container-lg": path === "/login",
            "mt-16": path === "/",
          })}
        >
          <h2 className="line-height-6 text-lime">ECD Resource Hub</h2>
        </div>
      </div>
      <div
        className={clsx({
          "custom-container-md relative z-30 flex flex-col items-start gap-4 pb-4 pt-40 md:pt-24": children,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default HeroSection
