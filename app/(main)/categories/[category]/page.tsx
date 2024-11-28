"use client"

import { useEffect, useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination"
import { LargeScreenFilter, MobileScreenFilter } from "@/shared/components/common/Filter"
import HeroSection from "@/shared/components/Layout/HeroSection"
import SearchBox from "@/shared/components/common/SearchBox"
import { categories } from "@/store"
import { Category } from "@/store/slices/category.slice"
import useFiltersStore, { FileTypes, Resources } from "@/store/slices/filters.slice"
import useTagsStore, { Tags } from "@/store/slices/tags.slice"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog"
import { Button } from "@/shared/components/ui/button"

type Resource = {
  name: string
  fileType: FileTypes
  resourceType: Resources
  tag: Tags
  labels: string[]
}

const fileTypeImage: Record<FileTypes, { src: string; bgColor: string }> = {
  "All Types": { src: "", bgColor: "" },
  "Files & Docs": { src: "/icons/ui/docs.svg", bgColor: "bg-lightCoral" },
  Videos: { src: "/icons/ui/video.svg", bgColor: "bg-blue" },
  "Music & Sounds": { src: "/icons/ui/music.svg", bgColor: "bg-green" },
}

const labels = ["Arts & Crafts", "Activity", "Creative Skills"]

const resources: Resource[] = [
  {
    name: "Art and creative ideas",
    fileType: "Files & Docs",
    resourceType: "App only",
    tag: "Art & Creativity",
    labels,
  },
  {
    name: "Art and creative ideas",
    fileType: "Files & Docs",
    resourceType: "App only",
    tag: "Art & Creativity",
    labels,
  },
  {
    name: "Fun finger gym",
    fileType: "Videos",
    resourceType: "Free",
    tag: "Cognitive Development",
    labels,
  },
  {
    name: "Toilet roll towers",
    fileType: "Videos",
    resourceType: "App only",
    tag: "Gross Motor Skills",
    labels,
  },
  {
    name: "Driven to discover",
    fileType: "Files & Docs",
    resourceType: "Free",
    tag: "Literacy",
    labels,
  },
  {
    name: "Step by step show and tell",
    fileType: "Videos",
    resourceType: "Free",
    tag: "Literacy",
    labels,
  },
  {
    name: "Driven to discover",
    fileType: "Files & Docs",
    resourceType: "Free",
    tag: "Literacy",
    labels,
  },
  {
    name: "Songs of friendship",
    fileType: "Music & Sounds",
    resourceType: "App only",
    tag: "Recorded Rhymes",
    labels,
  },
]

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

const Page = ({ params }: { params: Promise<{ category: string }> }) => {
  const [category, setCategory] = useState<Category | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const resourcesPerPage = 6

  useEffect(() => {
    params.then((resolvedParams) => {
      setCategory(categories.find((c) => c.url === `/categories/${resolvedParams.category}`))
    })
  }, [params])

  const fileType = useFiltersStore((state) => state.fileType)
  const resourceType = useFiltersStore((state) => state.resource)
  const tag = useTagsStore((state) => state.tag)

  const filteredResources = resources
    .filter((resource) => resource.fileType === fileType || fileType === "All Types")
    .filter((resource) => resource.resourceType === resourceType || resourceType === "All Resources")
    .filter((resource) => resource.tag === tag || tag === "All Tags")

  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage)

  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div>
      <HeroSection />
      <section className="home-container -top-28">
        <div className="flex items-center gap-2 text-white">
          <Link href={"/categories"}>
            <ArrowLeft />
          </Link>
          <Link href={"/categories"}>Home</Link>
          <p>/</p>
          {category && <Link href={category?.url}>{category.name}</Link>}
        </div>
        <SearchBox>
          <div className="flex items-center gap-4">
            <div className={`rounded-circle h-28 w-28 ${category?.bgColor} mt-4 hidden p-4 md:block`}>
              <div className="relative h-full w-full">
                {category && <Image src={category.imagesrc} fill alt={category.name} />}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h2>{category?.name}</h2>
              <p>
                Deepen your understanding of early learning principles to deliver an enriched educational experience
              </p>
            </div>
          </div>
        </SearchBox>
        <section className="mx-auto flex w-[90%] justify-between gap-4 py-4">
          <LargeScreenFilter />
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <p>Click on any of the following resources to view them</p>
                <MobileScreenFilter />
              </div>
              <div className="grid w-full grid-cols-1 gap-6 px-4 lg:grid-cols-2">
                {paginatedResources.map((resource, index) => (
                  <Dialog key={index}>
                    <DialogTrigger>
                      <ResourceCard resource={resource} />
                    </DialogTrigger>
                    <DialogContent className="lg:custom-container-lg">
                      <div className="flex flex-col gap-8 lg:px-12 lg:py-8">
                        <DialogHeader>
                          <DialogTitle />
                          <h2>{resource.tag}</h2>
                          <DialogDescription>
                            Explore fun and imaginative ways to turn simple egg boxes into unique art projects. Get
                            creative with paint, scissors, and glue to craft colorful decorations or playful characters!
                          </DialogDescription>
                          <div className="flex flex-wrap gap-4">
                            {resource.labels.map((label, index) => (
                              <div key={index} className="rounded-sm border px-6 py-1 text-sm shadow-sm">
                                {label}
                              </div>
                            ))}
                          </div>
                        </DialogHeader>

                        <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
                          <ResourceCard resource={resource} />
                          <div className="flex gap-2">
                            <Button size="icon">
                              <div className="relative h-full w-full">
                                <Image src="/redirect.svg" fill alt="redirect" />
                              </div>
                            </Button>
                            <Button>Download</Button>
                          </div>
                        </div>
                        <hr className="border-black" />
                        <div className="flex items-center justify-end gap-2">
                          <p>
                            Resources provided by{" "}
                            <Link href={category?.url || "/"} className="text-blue underline underline-offset-2">
                              Bookdash
                            </Link>
                          </p>
                          <Image src="/bookdash.png" width={80} height={50} alt="bookdash" />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1}>
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        <div className="relative h-20 w-full bg-white md:h-32">
          <Image src="/ad.png" fill alt="ad" />
        </div>
      </section>
    </div>
  )
}

export default Page
