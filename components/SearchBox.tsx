"use client";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";

const SearchBox = ({ children }: { children: React.ReactNode }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  // const [clear, setClear] = useState(false); // State to control the `x` icon visibility
  const [tags, setTags] = useState<string[]>([]);
  // const handleClear = () => {
  //   setInputValue(""); // Clear the input field
  //   setClear(false); // Hide the `x` icon
  // };

  const handleClearTag = (tag: string) => {
    setTags(tags.filter(prevTag => prevTag != tag));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // setClear(e.target.value.length > 0); // Show `x` icon only if input has text
  };

  const handleSearchButton = () => {
    if (inputValue.trim()) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
    inputRef.current?.focus();
  };
  return (
    <div className="w-full flex justify-center flex-col gap-4 py-8 bg-white px-4 md:px-12 shadow-md  rounded-md">
      {children}
      <div
        className="border-input border p-1 rounded-md flex gap-1 overflow-x-auto"
        id="search-input"
      >
        {tags.map((tag, index) => (
          <div key={index} className="pl-2 flex gap-1 items-center">
            <p> {tag}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleClearTag(tag)}
            >
              <X />
            </Button>
          </div>
        ))}
        <Input
          ref={inputRef}
          className="border-0 focus-visible:ring-0 shadow-none min-w-20"
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
        <Button
          className="text-white font-poppinsExtraBold"
          onClick={handleSearchButton}
        >
          <Search strokeWidth={4} /> Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
