"use client";
import { LargeScreenFilter, MobileScreenFilter } from "@/components/Filter";
import HeroSection from "@/components/HeroSection";
import SearchBox from "@/components/SearchBox";
import { categories, useCategoryStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const HomePage = () => {
  const { setCategory } = useCategoryStore(categories => categories);
  useEffect(() => {
    setCategory(null);
  }, [setCategory]);

  return (
    <>
      <HeroSection />
      <section className="home-container">
        <SearchBox>
          <h2 className="text-center font-poppinsExtraBold">
            What are you looking for today?
          </h2>
        </SearchBox>
        <div className="flex md:justify-center items-baseline">
          <div className="w-full">
            <h2 className="font-poppinsExtraBold text-center">Categories</h2>
          </div>
          <MobileScreenFilter />
        </div>
        <section className="flex w-[90%] mx-auto justify-center items-start gap-8">
          <LargeScreenFilter />
          <article>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
              {categories.map((category, index) => (
                <Link
                  href={`${category.url}`}
                  key={index}
                  className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md py-4 gap-2 px-2"
                  onClick={() => setCategory(category)}
                >
                  <div
                    className={`rounded-circle w-24 h-24 ${
                      category.bgColor || "bg-slate-600"
                    } p-4 mt-4`}
                  >
                    <div className="relative w-full h-full">
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
  );
};

export default HomePage;
