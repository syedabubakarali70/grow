import { create } from "zustand";

export type Category = {
    name: string,
    imagesrc: string,
    bgColor: string,
    url: string
}

export const categories: Category[] = [
    {
        name: "Policies & Procedures",
        imagesrc: "/categories/policy.svg",
        bgColor: "bg-yellow",
        url: '/policies-and-procedures'
    },
    {
        name: "Forms & Templates",
        imagesrc: "/categories/forms.svg",
        bgColor: "bg-green",
        url: '/forms-and-templates'
    },
    {
        name: "Professional Development",
        imagesrc: "/categories/professional.svg",
        bgColor: "bg-coral",
        url: '/professional-development'
    },
    {
        name: "Registering your Centre",
        imagesrc: "/categories/register.svg",
        bgColor: "bg-darkgreen",
        url: '/registering-center'
    },
    {
        name: "How to use the GROW App",
        imagesrc: "/categories/howToUse.svg",
        bgColor: "bg-blue",
        url: '/use'
    },
    {
        name: "Marketing your ECD",
        imagesrc: "/categories/marketing.svg",
        bgColor: "bg-lightCoral",
        url: '/marketing'
    },
    {
        name: "Early Learning",
        imagesrc: "/categories/learning.svg",
        bgColor: "bg-lime",
        url: '/learning'
    },
    {
        name: "Forms & Templates",
        imagesrc: "/categories/forms.svg",
        bgColor: "bg-green",
        url: '/forms-and-templates'
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