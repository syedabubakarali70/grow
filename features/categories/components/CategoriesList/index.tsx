"use client"
import Link from "next/link"
import Image from "next/image"
import { categories, useCategoryStore } from "@/store"

const CategoriesList: React.FC = () => {
  const { setCategory } = useCategoryStore((state) => state)

  return (
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
  )
}

export default CategoriesList
