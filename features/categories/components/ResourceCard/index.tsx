import { FileTypes } from "@/store/slices/filters.slice"
import Image from "next/image"
import { Resource } from "../../api/categories.type"

export const fileTypeImage: Record<FileTypes, { src: string; bgColor: string }> = {
  "All Types": { src: "", bgColor: "" },
  "Files & Docs": { src: "/icons/ui/docs.svg", bgColor: "bg-lightCoral" },
  Videos: { src: "/icons/ui/video.svg", bgColor: "bg-blue" },
  "Music & Sounds": { src: "/icons/ui/music.svg", bgColor: "bg-green" },
}

const ResourceCard = ({ resource, isExpanded = false }: { resource: Resource; isExpanded?: boolean }) => {
  return (
    <div
      className={`flex w-full flex-row-reverse items-center justify-between gap-4 rounded-lg bg-white p-4 md:flex-row md:justify-start md:bg-transparent ${isExpanded && "rounded-b-none"}`}
    >
      <div className={`${fileTypeImage[resource.fileType].bgColor} h-16 w-16 rounded-lg p-4 ${isExpanded && "hidden"}`}>
        <div className={`relative h-full w-full`}>
          <Image src={fileTypeImage[resource.fileType].src} fill alt="" />
        </div>
      </div>
      <p className="mr-auto text-left text-lg font-semibold">{resource.name}</p>
    </div>
  )
}

export default ResourceCard
