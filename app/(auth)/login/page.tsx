import HeroSection from "@/shared/components/Layout/HeroSection"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import Image from "next/image"
import LoginForm from "@/features/auth/components/LoginForm"

const padding = "px-5 md:px-4 lg:px-12"

const Page = () => {
  return (
    <>
      <HeroSection />
      <div className="min-h-[28rem]"></div>
      <div className="flex-1">
        <Dialog open={true}>
          <DialogContent
            showCloseButton={false}
            className="w-full max-w-screen-sm p-0 pb-4 lg:max-w-4xl lg:pb-12 xl:max-w-[62rem]"
          >
            <DialogHeader
              className={`flex w-full gap-2 bg-lime ${padding} relative flex-row gap-0 py-4 text-left sm:rounded-t-lg sm:py-8 lg:py-4`} // Make parent container relative
            >
              <div className={`flex flex-col`}>
                <DialogTitle className="hidden" />
                <h2 className="text-[2.25rem]">Log in to access free resources</h2>
                <p className="w-full font-poppinsExtraBold lg:w-[95%]">
                  No need to create a password! Simply tell us more about yourself so that we can show you the resources
                  you need most.
                </p>
              </div>
              <div className="w-0 lg:min-w-[230px]"></div>
              <div className="absolute bottom-0 right-0 hidden items-end gap-[-12px] lg:flex">
                <Image src="/Meerkat_3.png" width={100} height={200} alt="Meerkat" />

                <div className="relative right-6 flex items-end">
                  <Image src="/Meerkat_2.png" width={95} height={150} alt="Meerkat" />
                  <Image src="/Meerkat_1.png" width={70} height={100} alt="Meerkat" className="relative right-4" />
                </div>
              </div>
              <DialogDescription />
            </DialogHeader>

            <LoginForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default Page
