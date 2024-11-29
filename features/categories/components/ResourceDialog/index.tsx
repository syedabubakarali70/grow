import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/Dialog"
import { Button } from "@/shared/components/ui/Button"
import ResourceCard from "@/features/categories/components/ResourceCard"
import { Resource } from "@/features/categories/api/categories.type"
import Image from "next/image"
import Link from "next/link"

const ResourceDialog = ({ resource }: { resource: Resource }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ResourceCard resource={resource} />
      </DialogTrigger>
      <DialogContent className="lg:custom-container-lg">
        <div className="flex flex-col gap-8 lg:px-12 lg:py-8">
          <DialogHeader>
            <DialogTitle />
            <h2>{resource.tag}</h2>
            <DialogDescription>
              Explore fun and imaginative ways to turn simple egg boxes into unique art projects. Get creative with
              paint, scissors, and glue to craft colorful decorations or playful characters!
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
                  <Image src="/icons/ui/redirect.svg" fill alt="redirect" />
                </div>
              </Button>
              <Button>Download</Button>
            </div>
          </div>
          <hr className="border-black" />
          <div className="flex items-center justify-end gap-2">
            <p>
              Resources provided by
              <Link href="#" className="text-blue underline underline-offset-2">
                Bookdash
              </Link>
            </p>
            <Image src="/images/bookdash.png" width={80} height={50} alt="bookdash" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ResourceDialog
