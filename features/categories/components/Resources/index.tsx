import ResourcesAccordion from "@/features/categories/components/ResourcesAccordian" // Adjust the import paths as needed
import ResourceDialog from "@/features/categories/components/ResourceDialog"
import useBreakpoint from "@/features/categories/hooks/useBreakpoint" // Import the custom hook
import { Resource } from "../../api/categories.type"

const Resources = ({ resources }: { resources: Resource[] }) => {
  const isMobile = useBreakpoint() // Determine screen size

  return (
    <>
      {isMobile ? (
        <ResourcesAccordion resources={resources} />
      ) : (
        <div className="grid w-full grid-cols-1 px-4 lg:grid-cols-2">
          {resources.map((resource, index) => (
            <ResourceDialog resource={resource} key={index} />
          ))}
        </div>
      )}
    </>
  )
}

export default Resources
