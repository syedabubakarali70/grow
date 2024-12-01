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
import { DownloadIcon, ExternalLink } from "lucide-react"

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
          </DialogHeader>

          <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
            <ResourceCard resource={resource} />
            <div className="flex gap-2">
              <Button>
                Share
                <ExternalLink />
              </Button>
              <Button>
                Download
                <DownloadIcon />
              </Button>
            </div>
          </div>
          <hr className="border-black" />
          <div className="flex items-center justify-end gap-2">
            <p>
              Resources provided by{" "}
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
