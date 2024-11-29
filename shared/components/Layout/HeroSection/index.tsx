import Image from "next/image"
import clsx from "clsx"

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-56 w-full bg-darkblue pb-6">
      <div className="ml-auto h-24 max-w-72 pl-4">
        <div className="relative h-full w-full max-w-72">
          <Image src="/favicon/favicon.svg" fill alt="logo" />
        </div>
      </div>
      <div
        className={clsx({
          "custom-container-md relative z-30 flex flex-col items-start gap-4 pb-4 pt-8": children,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default HeroSection
