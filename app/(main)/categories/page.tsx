"use client"
import { LargeScreenFilter, MobileScreenFilter } from "@/shared/components/common/Filter"
import HeroSection from "@/shared/components/Layout/HeroSection"
import SearchBox from "@/shared/components/common/SearchBox"
import { categories, useCategoryStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const HomePage = () => {
  const { setCategory } = useCategoryStore((categories) => categories)
  useEffect(() => {
    setCategory(null)
  }, [setCategory])

  return (
    <>
      <HeroSection />
      <section className="home-container">
        <SearchBox>
          <h2 className="text-center font-poppinsExtraBold">What are you looking for today?</h2>
        </SearchBox>
        <div className="flex items-baseline md:justify-center">
          <div className="w-full">
            <h2 className="text-center font-poppinsExtraBold">Categories</h2>
          </div>
          <MobileScreenFilter />
        </div>
        <section className="mx-auto flex w-full items-start justify-center gap-8 xl:w-[90%]">
          <LargeScreenFilter />
          <article>
            <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  href={`${category.url}`}
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 py-4 shadow-md"
                  onClick={() => setCategory(category)}
                >
                  <div className={`rounded-circle h-24 w-24 ${category.bgColor || "bg-slate-600"} mt-4 p-4`}>
                    <div className="relative h-full w-full">
                      <Image src={category.imagesrc} fill alt={category.name} />
                    </div>
                  </div>
                  <p className="text-center font-semibold">{category.name}</p>
                </Link>
              ))}
            </div>
          </article>
        </section>
      </section>
    </>
  )
}

export default HomePage
