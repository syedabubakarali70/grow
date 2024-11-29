import { FileTypes, ResourceTypes } from "@/store/slices/filters.slice"
import { Tags } from "@/store/slices/tags.slice"

export type Resource = {
    name: string
    fileType: FileTypes
    resourceType: ResourceTypes
    tag: Tags
    labels: string[]
}