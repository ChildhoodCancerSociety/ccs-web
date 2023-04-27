import Link from "next/link";

import Dropdown from "./Dropdown";
import type { NavItemProps } from "./types";

const NavItem: React.FC<NavItemProps> = ({ path, display, dropdown }) => {
  return (
    <li className="nav-item relative mx-2 rounded-lg px-3 py-1 font-semibold text-primary-100 transition-colors duration-100 hover:text-primary-50 active:ring-2 active:ring-inset active:ring-primary-400/25">
      <Link className="px-1 py-2" href={path}>
        {display}
      </Link>
      {dropdown && (
        <Dropdown path={path} display={display} dropdown={dropdown} />
      )}
    </li>
  );
};

export default NavItem;
