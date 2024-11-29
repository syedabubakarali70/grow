import { create } from 'zustand'

export type ResourceTypes = 'All Resources' | 'Free' | 'App only'
export type FileTypes = 'All Types' | 'Files & Docs' | 'Videos' | 'Music & Sounds'

export const resourceTypes: ResourceTypes[] = ['All Resources', 'App only', 'Free'];
export const fileTypes: FileTypes[] = ['All Types', 'Files & Docs', 'Videos', 'Music & Sounds']

type Filters = {
    resourceType: ResourceTypes,
    fileType: FileTypes
    setResource: (resource: ResourceTypes) => void,
    setFileType: (fileType: FileTypes) => void,
}

const useFiltersStore = create<Filters>((set) => ({
    resourceType: 'All Resources',
    fileType: 'All Types',
    setResource: (resource) => set({ resourceType: resource }),
    setFileType: (fileType) => set({ fileType: fileType }),
}))

export default useFiltersStore