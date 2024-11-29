import useCategoryStore from "@/store/slices/category.slice"
import { usePathname } from "next/navigation"
import Image from "next/image"
const SearchBoxContent = () => {
  const { category } = useCategoryStore((state) => state)
  const path = usePathname()
  if (path === "/categories") {
    return <h2 className="text-center font-poppinsExtraBold">What are you looking for today?</h2>
  } else {
    return (
      <>
        <div className="flex items-center gap-4">
          <div className={`rounded-circle h-28 w-28 ${category?.bgColor} mt-4 hidden p-4 md:block`}>
            <div className="relative h-full w-full">
              {category && <Image src={category.imagesrc} fill alt={category.name} />}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h2>{category?.name}</h2>
            <p>Deepen your understanding of early learning principles to deliver an enriched educational experience</p>
          </div>
        </div>
      </>
    )
  }
}
export default SearchBoxContent
