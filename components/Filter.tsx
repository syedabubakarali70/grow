import { Checkbox } from "@/components/ui/checkbox";
import {
  useFiltersStore,
  useTagsStore,
  resources,
  fileTypes,
  tags,
} from "@/store";
const Filter = () => {
  const { resource, fileType, setResource, setFileType } = useFiltersStore(
    filters => filters
  );

  const { tag, setTag } = useTagsStore(tags => tags);
  return (
    <aside className="bg-white rounded-lg  py-2 shadow-lg hidden md:block">
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
    </aside>
  );
};

export default Filter;
