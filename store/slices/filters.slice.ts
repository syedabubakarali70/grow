import { create } from 'zustand'

export type Resources = 'All Resources' | 'Free' | 'App only'
export type FileTypes = 'All Types' | 'Files & Docs' | 'Videos' | 'Music & Sounds'

export const resources: Resources[] = ['All Resources', 'App only', 'Free'];
export const fileTypes: FileTypes[] = ['All Types', 'Files & Docs', 'Videos', 'Music & Sounds']

type Filters = {
    resource: Resources,
    fileType: FileTypes
    setResource: (resource: Resources) => void,
    setFileType: (fileType: FileTypes) => void,
}

const useFiltersStore = create<Filters>((set) => ({
    resource: 'All Resources',
    fileType: 'All Types',
    setResource: (resource) => set({ resource: resource }),
    setFileType: (fileType) => set({ fileType: fileType }),
}))

export default useFiltersStore