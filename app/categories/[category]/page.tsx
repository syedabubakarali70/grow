"use client";
import { LargeScreenFilter, MobileScreenFilter } from "@/components/Filter";
import HeroSection, { Logo } from "@/components/HeroSection";
import SearchBox from "@/components/SearchBox";
import { categories } from "@/store";
import { Category } from "@/store/categoryStore";
import useFiltersStore, { FileTypes, Resources } from "@/store/filtersStore";
import useTagsStore, { Tags } from "@/store/tagsStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Resource = {
  name: string;
  fileType: FileTypes;
  resourceType: Resources;
  tag: Tags;
  labels: string[];
};

const fileTypeImage: Record<FileTypes, { src: string; bgColor: string }> = {
  "All Types": { src: "", bgColor: "" },
  "Files & Docs": { src: "/docs.svg", bgColor: "bg-lightCoral" },
  Videos: { src: "/video.svg", bgColor: "bg-blue" },
  "Music & Sounds": { src: "/music.svg", bgColor: "bg-green" },
};

const labels = ["Arts & Crafts", "Activity", "Creative Skills"];

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
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <div
        className={`${
          fileTypeImage[resource.fileType].bgColor
        } p-4 rounded-lg  w-16 h-16`}
      >
        <div className="relative w-full h-full">
          <Image src={fileTypeImage[resource.fileType].src} fill alt="" />
        </div>
      </div>
      <p className="text-left">{resource.name}</p>
    </div>
  );
};

const Page = ({ params }: { params: Promise<{ category: string }> }) => {
  const [category, setCategory] = useState<Category | undefined>(undefined);
  useEffect(() => {
    params.then(resolvedParams => {
      setCategory(
        categories.find(c => c.url === `/categories/${resolvedParams.category}`)
      );
    });
  }, [params]);

  const fileType = useFiltersStore(state => state.fileType);
  const resourceType = useFiltersStore(state => state.resource);
  const tag = useTagsStore(state => state.tag);

  const resourcesList = resources
    .filter(
      resource => resource.fileType === fileType || fileType === "All Types"
    )
    .filter(
      resource =>
        resource.resourceType === resourceType ||
        resourceType === "All Resources"
    )
    .filter(resource => resource.tag === tag || tag === "All Tags");
  return (
    <div>
      <HeroSection />
      <section className="home-container">
        <Logo />
        <div className="flex gap-2 text-white items-center">
          <Link href={"/"}>
            <ArrowLeft />
          </Link>
          <Link href={"/categories"}>Home</Link>
          <p>/</p>
          {category && <Link href={category?.url}>{category.name}</Link>}
        </div>
        <SearchBox>
          <div className="flex  gap-4 items-center">
            <div
              className={`rounded-circle w-28 h-28 ${category?.bgColor} p-4 mt-4 hidden md:block`}
            >
              <div className="relative w-full h-full">
                {category && (
                  <Image src={category.imagesrc} fill alt={category.name} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h2>{category?.name}</h2>
              <p>
                Deepen your understanding of early learning principles to
                deliver an enriched educational experience
              </p>
            </div>
          </div>
        </SearchBox>
        <section className="w-[90%] mx-auto flex py-4 gap-4 items-start">
          <LargeScreenFilter />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4 items-start">
              <p>Click on any of the following resources to view them</p>
              <MobileScreenFilter />
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
              {resourcesList.map((resource, index) => (
                <Dialog key={index}>
                  <DialogTrigger>
                    <ResourceCard resource={resource} />
                  </DialogTrigger>
                  <DialogContent className="lg:custom-container-lg ">
                    <div className="lg:px-12 lg:py-8 flex flex-col gap-8">
                      <DialogHeader>
                        <DialogTitle />
                        <h2>{resource.tag}</h2>
                        <DialogDescription>
                          Explore fun and imaginative ways to turn simple egg
                          boxes into unique art projects. Get creative with
                          paint, scissors, and glue to craft colorful
                          decorations or playful characters!
                        </DialogDescription>
                        <div className="flex gap-4">
                          {resource.labels.map((label, index) => (
                            <div
                              key={index}
                              className="shadow-sm border rounded-sm px-6 py-1 text-sm"
                            >
                              {label}
                            </div>
                          ))}
                        </div>
                      </DialogHeader>

                      <div className="flex justify-between w-full items-center flex-col md:flex-row gap-2">
                        <ResourceCard resource={resource} />
                        <div className="flex gap-2">
                          <Button size="icon">
                            <div className="relative w-full h-full">
                              <Image src="/redirect.svg" fill alt="redirect" />
                            </div>
                          </Button>
                          <Button>Download</Button>
                        </div>
                      </div>
                      <hr className="border-black" />
                      <div className="flex justify-end items-center gap-2">
                        <p>
                          Resources provided by{" "}
                          <Link
                            href={category?.url || "/"}
                            className="text-blue underline underline-offset-2"
                          >
                            Bookdash
                          </Link>
                        </p>
                        <Image
                          src="/bookdash.png"
                          width={80}
                          height={50}
                          alt="bookdash"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
        <div className="w-full h-20 md:h-32 relative bg-white">
          <Image src="/ad.png" fill alt="ad" />
        </div>
      </section>
    </div>
  );
};

export default Page;
