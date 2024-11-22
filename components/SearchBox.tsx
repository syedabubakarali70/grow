import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center flex-col gap-4 py-8 bg-white px-4 md:px-12 shadow-md  rounded-md">
      {children}
      <div className="border-input border p-1 rounded-md flex">
        <Input
          className="border-0 flex-1 focus-visible:ring-0 shadow-none"
          placeholder="Enter keywords to search for resources"
        />
        <Button className="text-white font-poppinsExtraBold">
          <Search strokeWidth={4} /> Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
