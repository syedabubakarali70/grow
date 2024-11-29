import { useMemo } from "react"
import useFiltersStore from "@/store/slices/filters.slice"
import useTagsStore from "@/store/slices/tags.slice"
import { resources } from "@/public/static/resources"

const useFilteredResources = () => {
  const fileType = useFiltersStore((state) => state.fileType)
  const resourceType = useFiltersStore((state) => state.resourceType)
  const tag = useTagsStore((state) => state.tag)

  const filteredResources = useMemo(() => {
    return resources
      .filter((resource) => resource.fileType === fileType || fileType === "All Types")
      .filter((resource) => resource.resourceType === resourceType || resourceType === "All Resources")
      .filter((resource) => resource.tag === tag || tag === "All Tags")
  }, [fileType, resourceType, tag])

  return filteredResources
}

export default useFilteredResources
