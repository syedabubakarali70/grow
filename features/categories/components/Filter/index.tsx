"use client"
import { Checkbox } from "@/shared/components/ui/Checkbox"
import { useFiltersStore, useTagsStore, resourceTypes, fileTypes, tags } from "@/store"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/Drawer"

import { ListFilter } from "lucide-react"
import { Button } from "@/shared/components/ui/Button"

export const MobileScreenFilter = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden">
        <ListFilter />
      </DrawerTrigger>
      <DrawerContent className="min-h-svh max-w-sm">
        <DrawerHeader />
        <DrawerTitle />
        <DrawerDescription />
        <Filter />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className="bg-lime">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const LargeScreenFilter = () => {
  return (
    <aside className="hidden self-start rounded-lg bg-white py-2 shadow-lg md:block">
      <Filter />
    </aside>
  )
}

const Filter = () => {
  const { resourceType, fileType, setResource, setFileType } = useFiltersStore((filters) => filters)

  const { tag, setTag } = useTagsStore((tags) => tags)
  return (
    <>
      <p className="mb-2 text-center text-lg font-semibold">Filters</p>
      <hr />
      <div className="flex flex-col gap-1 px-4 py-2">
        {resourceTypes.map((res, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox checked={res === resourceType} onCheckedChange={() => setResource(res)} id={res} />
            <label htmlFor={res} className="text-sm">
              {res}
            </label>
          </div>
        ))}
      </div>
      <hr />

      <div className="flex flex-col gap-1 px-4 py-2">
        {fileTypes.map((type, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox checked={type === fileType} onCheckedChange={() => setFileType(type)} id={type} />
            <label htmlFor={type} className="text-sm">
              {type}
            </label>
          </div>
        ))}
      </div>
      <p className="mb-2 text-center text-lg font-semibold">Tags</p>
      <hr />
      <div className="flex flex-col gap-1 px-4 py-2">
        {tags.map((t, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox checked={t === tag} onCheckedChange={() => setTag(t)} id={t} />
            <label htmlFor={t} className="text-sm">
              {t}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default Filter
