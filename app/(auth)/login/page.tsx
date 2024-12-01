import HeroSection from "@/shared/components/Layout/HeroSection"
import Image from "next/image"
import LoginForm from "@/features/auth/components/LoginForm"

const padding = "px-5 md:px-4 lg:px-12"

const Page = () => {
  return (
    <>
      <HeroSection />
      <div className="relative -top-16 z-30 mx-auto w-full max-w-screen-sm rounded-lg border bg-white p-0 shadow-lg lg:-top-8 lg:max-w-4xl xl:max-w-[62rem]">
        <div
          className={`flex w-full gap-2 bg-lime ${padding} relative flex-row gap-0 py-4 text-left sm:rounded-t-lg sm:py-8 lg:py-4`} // Make parent container relative
        >
          <div className={`flex flex-col`}>
            <h2 className="text-[2.25rem]">Log in to access free resources</h2>
            <p className="w-full font-poppinsExtraBold lg:w-[95%]">
              No need to create a password! Simply tell us more about yourself so that we can show you the resources you
              need most.
            </p>
          </div>
          <div className="w-0 lg:min-w-[230px]"></div>
          <div className="absolute bottom-0 right-0 hidden items-end gap-[-12px] lg:flex">
            <Image src="/images/Meerkats/Meerkat_3.png" width={85} height={200} alt="Meerkat" />

            <div className="relative right-6 flex items-end">
              <Image src="/images/Meerkats/Meerkat_2.png" width={80} height={150} alt="Meerkat" />
              <Image
                src="/images/Meerkats/Meerkat_1.png"
                width={70}
                height={100}
                alt="Meerkat"
                className="relative right-4"
              />
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </>
  )
}

export default Page
