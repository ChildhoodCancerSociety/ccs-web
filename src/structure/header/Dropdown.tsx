import Link from "next/link";

import type { NavItemProps } from "./types";

const Dropdown: React.FC<NavItemProps> = ({ path, dropdown }) => (
  <div className="dropdown absolute -right-2 top-14 z-50 rounded-lg bg-primary-600/90 shadow-lg shadow-primary-600/20 backdrop-blur">
    <ul className="w-[500px] rounded-lg p-4 text-sm backdrop-blur">
      <div className="-m-4 mb-2 rounded-t-md bg-primary-800 px-2 py-1 text-right">
        <Link
          className="transition-color text-primary-200 duration-300 hover:text-primary-50"
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
