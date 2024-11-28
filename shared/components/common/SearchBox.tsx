"use client"
import { Search, X } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useRef, useState } from "react"

const SearchBox = ({ children }: { children: React.ReactNode }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState("")
  // const [clear, setClear] = useState(false); // State to control the `x` icon visibility
  const [tags, setTags] = useState<string[]>([])
  // const handleClear = () => {
  //   setInputValue(""); // Clear the input field
  //   setClear(false); // Hide the `x` icon
  // };

  const handleClearTag = (tag: string) => {
    setTags(tags.filter((prevTag) => prevTag != tag))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    // setClear(e.target.value.length > 0); // Show `x` icon only if input has text
  }

  const handleSearchButton = () => {
    if (inputValue.trim()) {
      setTags([...tags, inputValue])
      setInputValue("")
    }
    inputRef.current?.focus()
  }
  return (
    <div className="flex w-full flex-col justify-center gap-4 rounded-md bg-white px-4 py-8 shadow-md md:px-12">
      {children}
      <div className="flex gap-1 overflow-x-auto rounded-md border border-input p-1" id="search-input">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-1 pl-2">
            <p> {tag}</p>
            <Button variant="ghost" size="icon" onClick={() => handleClearTag(tag)}>
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
        {/* {clear && (
          <Button onClick={handleClear} variant="ghost" size="icon">
            {" "}
            <X />
          </Button>
        )} */}
        <Button className="font-poppinsExtraBold text-white" onClick={handleSearchButton}>
          <Search strokeWidth={4} /> Search
        </Button>
      </div>
    </div>
  )
}

export default SearchBox
