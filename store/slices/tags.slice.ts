import { create } from "zustand"

export type Tags = 'All Tags' | 'Art & Creativity' | 'Basic Concepts' | 'Cognitive Development' | 'Gross Motor Skills' | 'Recorded Rhymes' | 'Literacy' | 'Numeracy' | 'Social & Emotional Development'

export const tags: Tags[] = ['All Tags', 'Art & Creativity', 'Basic Concepts', 'Cognitive Development', 'Gross Motor Skills', 'Recorded Rhymes', 'Literacy', 'Numeracy', 'Social & Emotional Development']

type TagsStore = {
    tag: Tags,
    setTag: (tag: Tags) => void
}

const useTagsStore = create<TagsStore>((set) => ({
    tag: 'All Tags',
    setTag: (tag) => set({ tag: tag })
}))

export default useTagsStore