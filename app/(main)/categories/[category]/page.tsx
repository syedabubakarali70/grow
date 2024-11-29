"use client"

import { LargeScreenFilter, MobileScreenFilter } from "@/features/categories/components/Filter"

import Image from "next/image"
import ResourceDialog from "@/features/categories/components/ResourceDialog"
import useFilteredResources from "@/features/categories/hooks/useFilteredResources"
import usePagination from "@/features/categories/hooks/usePagination"
import PaginationComponent from "@/features/categories/components/PaginationComponent"

const Page = () => {
  const filteredResources = useFilteredResources()
  const { totalPages, currentPage, paginatedItems, handlePageChange } = usePagination(
    filteredResources,
    6 // Resources per page
  )

  return (
    <>
      <section className="mx-auto flex w-[90%] justify-between gap-4 py-4">
        <LargeScreenFilter />
        <div className="flex w-full flex-col justify-between gap-4">
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <p>Click on any of the following resources to view them</p>
              <MobileScreenFilter />
            </div>
            <div className="grid w-full grid-cols-1 gap-6 px-4 lg:grid-cols-2">
              {paginatedItems.map((resource, index) => (
                <ResourceDialog resource={resource} key={index} />
              ))}
            </div>
          </div>

          <PaginationComponent currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </section>
      <div className="relative h-20 w-full bg-white md:h-32">
        <Image src="/images/ad.png" fill alt="ad" />
      </div>
    </>
  )
}

export default Page
