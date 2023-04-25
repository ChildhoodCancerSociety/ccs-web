import Dropdown from "./Dropdown";
import type { NavItemProps } from "./types";
import Link from "next/link";

const NavItem: React.FC<NavItemProps> = ({ path, display, dropdown }) => {
  return (
    <li className="nav-item relative mx-2 transition-colors duration-100 text-green-100 hover:text-green-50 font-semibold px-4 py-1 active:ring-green-400/25 active:ring-2 active:ring-inset rounded-lg">
      <Link href={path}>{display}</Link>
      {dropdown && (
        <Dropdown path={path} display={display} dropdown={dropdown} />
      )}
    </li>
  );
};

export default NavItem;
