"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/Accordion"
import React, { useState } from "react"
import { Resource } from "../../api/categories.type"
import ResourceCard, { fileTypeImage } from "../ResourceCard"
import Image from "next/image"
import { Button } from "@/shared/components/ui/Button"
import { DownloadIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

const Index = ({ resources }: { resources: Resource[] }) => {
  const [expandedItem, setExpandedItem] = useState<string>("")

  return (
    <Accordion
      type="single"
      collapsible
      value={expandedItem}
      onValueChange={(value) => setExpandedItem(value)} // Track expanded item
    >
      {resources.map((resource, index) => {
        const itemValue = `item-${index + 1}`
        const isExpanded = expandedItem === itemValue

        return (
          <AccordionItem key={itemValue} value={itemValue}>
            <AccordionTrigger className="pb-0">
              <ResourceCard resource={resource} isExpanded={isExpanded} />
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white">
              <div
                className={`${fileTypeImage[resource.fileType].bgColor} flex w-full items-center justify-center p-4`}
              >
                <Image src={fileTypeImage[resource.fileType].src} width={50} height={80} alt="" />
              </div>
              <div className="flex w-full flex-col gap-2 px-4 pt-4">
                <h4>Art & Creativity</h4>
                <p>
                  Explore fun and imaginative ways to turn simple egg boxes into unique art projects. Get creative with
                  paint, scissors, and glue to craft colorful decorations or playful characters!
                </p>
                <div className="flex items-center justify-end gap-2">
                  <p>
                    Resources provided by{" "}
                    <Link href="#" className="text-blue underline underline-offset-2">
                      Bookdash
                    </Link>
                  </p>
                  <Image src="/images/bookdash.png" width={80} height={50} alt="bookdash" />
                </div>
                <div className="flex flex-wrap gap-2 self-end">
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
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default Index
