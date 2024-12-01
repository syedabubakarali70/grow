"use client"
import { Search, X } from "lucide-react"
import { Button } from "@/shared/components/ui/Button"
import { Input } from "@/shared/components/ui/Input"
import { useEffect, useRef, useState } from "react"
import useSearchTags from "@/features/categories/hooks/useSearchTags"
import SearchBoxContent from "@/features/categories/components/SearchBoxContent"
import { usePathname } from "next/navigation"
import { categories, useCategoryStore } from "@/store"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
const SearchBox = () => {
  const { category, setCategory } = useCategoryStore((state) => state)
  const path = usePathname()
  useEffect(() => {
    if (path !== "/categories") setCategory(categories.find((c) => c.url === path))
  }, [path, setCategory])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState("")

  const { searchTags, setSearchTags, clearTag } = useSearchTags()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearchButton = () => {
    if (inputValue.trim()) {
      setSearchTags([...searchTags, inputValue])
      setInputValue("")
    }
    inputRef.current?.focus()
  }
  return (
    <div className="w-full sm:relative sm:-bottom-2">
      <div
        className={`flex items-center gap-2 py-4 text-white sm:py-0 sm:pb-4 ${path === "/categories" && "invisible"}`}
      >
        <Link href={"/categories"}>
          <ArrowLeft />
        </Link>
        <Link href={"/categories"}>Home</Link>
        <p>/</p>
        {category && <Link href={category?.url}>{category.name}</Link>}
      </div>
      <div className="flex w-full flex-col justify-center gap-4 rounded-md bg-white px-4 py-8 shadow-md md:px-12">
        <SearchBoxContent />
        <div className="flex gap-1 overflow-x-auto rounded-md border border-input p-1" id="search-input">
          <Button onClick={handleSearchButton} variant="ghost" size="icon" className="md:hidden">
            <Search strokeWidth={3} />
          </Button>
          {searchTags.map((tag, index) => (
            <div key={index} className="flex items-center gap-1 md:pl-2">
              <p> {tag}</p>
              <Button variant="ghost" size="icon" onClick={() => clearTag(tag)}>
                <X />
              </Button>
            </div>
          ))}
          <Input
            ref={inputRef}
            className="min-w-20 border-0 shadow-none focus-visible:ring-0"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter keywords to search for resources"
          />
          <Button className="hidden font-bold md:flex" onClick={handleSearchButton}>
            <Search strokeWidth={3} /> Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
