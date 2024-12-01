import { LargeScreenFilter, MobileScreenFilter } from "@/features/categories/components/Filter"
import CategoriesList from "@/features/categories/components/CategoriesList"

const HomePage = () => {
  return (
    <>
      <div className="flex items-baseline md:justify-center">
        <div className="w-full">
          <h2 className="text-center font-poppinsExtraBold">Categories</h2>
        </div>
      </div>
      <section className="mx-auto flex w-full items-start justify-center gap-8 xl:w-[90%]">
        <LargeScreenFilter />
        <article>
          <CategoriesList />
        </article>
      </section>
    </>
  )
}

export default HomePage
