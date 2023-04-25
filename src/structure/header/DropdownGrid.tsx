import type { DropdownItem } from "./types";
import Image from "next/image";
import Link from "next/link";

const GridItemPreview: React.FC<DropdownItem> = ({
  path,
  display,
  programIcon,
}) => {
  return (
    <Link
      className="dropdown-link text-green-50 hover:text-white text-xs"
      href={path}
    >
      <div className="flex flex-row items-center">
        <div className="box-content dropdown-img-container p-1 rounded-full bg-green-300 flex-shrink-0 self-start z-10">
          <Image
            width={3.75 * 16}
            height={3.75 * 16}
            className="h-11 w-11 rounded-full"
            src={programIcon}
            alt={display}
          />
        </div>
        <div className="relative -ml-8 pl-2 pr-4 py-1.5 h-12 active:ring-inset active:ring-green-300/75 active:ring-4 z-0 rounded-r-lg flex-grow flex items-center">
          <div className="ml-8">
            <div
              className={`${
                // bad ugly hack. you're a bad person for doing this
                display.length >= 30 ? "scale-x-95 origin-left" : ""
              }`}
            >
              {display}
            </div>
            {/* <p className="text-xs text-green-100/90 font-normal">
              {description}
            </p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

const colMap = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};
interface DropdownGridProps {
  items: DropdownItem[];
  cols?: 2 | 3 | 4;
}
const DropdownGrid: React.FC<DropdownGridProps> = ({ items, cols = 2 }) => {
  return (
    <div className={`grid ${colMap[cols]} gap-4`}>
      {items.map((item) => (
        <GridItemPreview key={`${cols}${item.display}${item.path}`} {...item} />
      ))}
    </div>
  );
};

export default DropdownGrid;
