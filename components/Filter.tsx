import { Checkbox } from "@/components/ui/checkbox";
import {
  useFiltersStore,
  useTagsStore,
  resources,
  fileTypes,
  tags,
} from "@/store";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ListFilter } from "lucide-react";
import { Button } from "./ui/button";

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
  );
};

export const LargeScreenFilter = () => {
  return (
    <aside className="bg-white rounded-lg  py-2 shadow-lg hidden md:block">
      <Filter />
    </aside>
  );
};

const Filter = () => {
  const { resource, fileType, setResource, setFileType } = useFiltersStore(
    filters => filters
  );

  const { tag, setTag } = useTagsStore(tags => tags);
  return (
    <>
      <p className="text-center mb-2 text-lg font-semibold">Filters</p>
      <hr />
      <div className="px-4 py-2 flex flex-col gap-1">
        {resources.map((res, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={res === resource}
              onCheckedChange={() => setResource(res)}
              id={res}
            />
            <label htmlFor={res} className="text-sm">
              {res}
            </label>
          </div>
        ))}
      </div>
      <hr />

      <div className="px-4 py-2 flex flex-col gap-1">
        {fileTypes.map((type, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={type === fileType}
              onCheckedChange={() => setFileType(type)}
              id={type}
            />
            <label htmlFor={type} className="text-sm">
              {type}
            </label>
          </div>
        ))}
      </div>
      <p className="text-center mb-2 text-lg font-semibold">Tags</p>
      <hr />
      <div className="px-4 py-2 flex flex-col gap-1">
        {tags.map((t, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={t === tag}
              onCheckedChange={() => setTag(t)}
              id={t}
            />
            <label htmlFor={t} className="text-sm">
              {t}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
