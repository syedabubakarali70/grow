import { FileTypes } from "@/store/slices/filters.slice"
import Image from "next/image"
import { Resource } from "../../api/categories.type"

const fileTypeImage: Record<FileTypes, { src: string; bgColor: string }> = {
  "All Types": { src: "", bgColor: "" },
  "Files & Docs": { src: "/icons/ui/docs.svg", bgColor: "bg-lightCoral" },
  Videos: { src: "/icons/ui/video.svg", bgColor: "bg-blue" },
  "Music & Sounds": { src: "/icons/ui/music.svg", bgColor: "bg-green" },
}

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className={`${fileTypeImage[resource.fileType].bgColor} h-16 w-16 rounded-lg p-4`}>
        <div className="relative h-full w-full">
          <Image src={fileTypeImage[resource.fileType].src} fill alt="" />
        </div>
      </div>
      <p className="text-left">{resource.name}</p>
    </div>
  )
}

export default ResourceCard
