"use client"

import { LargeScreenFilter, MobileScreenFilter } from "@/features/categories/components/Filter"

import Image from "next/image"
import ResourceDialog from "@/features/categories/components/ResourceDialog"
import useFilteredResources from "@/features/categories/hooks/useFilteredResources"
import usePagination from "@/features/categories/hooks/usePagination"
import PaginationComponent from "@/features/categories/components/PaginationComponent"
import Resources from "@/features/categories/components/Resources"

const Page = () => {
  const filteredResources = useFilteredResources()
  const { totalPages, currentPage, paginatedItems, handlePageChange } = usePagination(
    filteredResources,
    6 // Resources per page
  )

  return (
    <>
      <section className="mx-auto flex w-[90%] justify-between gap-4 md:pt-32">
        <LargeScreenFilter />
        <div className="flex w-full flex-col justify-between gap-4">
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-start justify-between gap-4 text-center">
              <p>Click on any of the following resources to view them</p>
            </div>
            <Resources resources={paginatedItems} />
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
