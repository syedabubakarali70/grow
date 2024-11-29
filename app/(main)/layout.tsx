import SearchBox from "@/features/categories/components/SearchBox"
import HeroSection from "@/shared/components/Layout/HeroSection"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeroSection />
      <section className="home-container -top-28">
        <SearchBox />
        {children}
      </section>
    </>
  )
}
