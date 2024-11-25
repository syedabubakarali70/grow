import { create } from "zustand";

export type Category = {
    name: string,
    imagesrc: string,
    bgColor: string,
    url: string
}

const url = '/categories'

export const categories: Category[] = [
    {
        name: "Policies & Procedures",
        imagesrc: "/categories/policy.svg",
        bgColor: "bg-yellow",
        url: `${url}/policies-and-procedures`
    },
    {
        name: "Forms & Templates",
        imagesrc: "/categories/forms.svg",
        bgColor: "bg-green",
        url: `${url}/forms-and-templates`
    },
    {
        name: "Professional Development",
        imagesrc: "/categories/professional.svg",
        bgColor: "bg-coral",
        url: `${url}/professional-development`
    },
    {
        name: "Registering your Centre",
        imagesrc: "/categories/register.svg",
        bgColor: "bg-darkgreen",
        url: `${url}/registering-center`
    },
    {
        name: "How to use the GROW App",
        imagesrc: "/categories/howToUse.svg",
        bgColor: "bg-blue",
        url: `${url}/use`
    },
    {
        name: "Marketing your ECD",
        imagesrc: "/categories/marketing.svg",
        bgColor: "bg-lightCoral",
        url: `${url}/marketing`
    },
    {
        name: "Early Learning",
        imagesrc: "/categories/learning.svg",
        bgColor: "bg-lime",
        url: `${url}/learning`
    },
    {
        name: "Forms & Templates",
        imagesrc: "/categories/forms.svg",
        bgColor: "bg-green",
        url: `${url}/forms-and-templates`
    },
];

type CategoryStore = {
    category: Category | null,
    setCategory: (category: Category | null) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
    category: null,
    setCategory: (category) => set({ category: category })
}))


export default useCategoryStore 