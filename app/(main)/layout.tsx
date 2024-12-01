import { MobileScreenFilter } from "@/features/categories/components/Filter"
import SearchBox from "@/features/categories/components/SearchBox"
import HeroSection from "@/shared/components/Layout/HeroSection"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeroSection>
        <SearchBox />
      </HeroSection>
      <MobileScreenFilter />
      <section className="home-container">{children}</section>
    </>
  )
}
