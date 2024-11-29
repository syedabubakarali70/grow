import { useState } from "react"

const useSearchTags = () => {
  const [searchTags, setSearchTags] = useState<string[]>([])

  const clearTag = (tag: string) => {
    setSearchTags((prevTags) => prevTags.filter((prevTag) => prevTag !== tag))
  }

  return {
    searchTags,
    setSearchTags,
    clearTag,
  }
}

export default useSearchTags
