import type { NavItemProps } from "./types";
import Link from "next/link";

const Dropdown: React.FC<NavItemProps> = ({ path, dropdown }) => (
  <div className="dropdown absolute top-14 -right-2 z-50 backdrop-blur bg-green-600/90 shadow-lg shadow-green-600/20 rounded-lg">
    <ul className="backdrop-blur text-sm p-4 w-[500px] rounded-lg">
      <div className="text-right mb-2 -m-4 px-2 py-1 rounded-t-md bg-green-800">
        <Link
          className="text-green-200 hover:text-green-50 transition-color duration-300"
          href={path}
        >
          see all ➡
        </Link>
      </div>

      {dropdown}
    </ul>
  </div>
);

export default Dropdown;
