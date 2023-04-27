import { Logo } from "@/atoms";

import DropdownGrid from "./DropdownGrid";
import NavItem from "./NavItem";
import type { NavItemProps } from "./types";
import { DropdownItem } from "./types";

const imgSize = `${3.75 * 16}`;

const volunteerItems: DropdownItem[] = [
  {
    path: "/volunteer/",
    display: "Graphic Design",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
  {
    path: "/volunteer/",
    display: "Animation",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
  {
    path: "/volunteer/",
    display: "Video Production",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
  {
    path: "/volunteer/",
    display: "Digital Media & Communications",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
  {
    path: "/volunteer/",
    display: "Software Dev",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
  {
    path: "/volunteer/",
    display: "Disney VoluntEARs",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "",
  },
];

const programItems: DropdownItem[] = [
  {
    path: "/programs/adventure-ted",
    display: "Adventure Ted Program",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "asdf",
  },
  {
    path: "/programs/scholars",
    display: "Adventure Ted Scholars",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "asdf",
  },
  {
    path: "/programs/art-to-heart",
    display: "Art to Heart",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "asdf",
  },
  {
    path: "/volunteer",
    display: "Volunteer Opportunities",
    programIcon: `https://placeholder.co/${imgSize}x${imgSize}`,
    description: "asdf",
  },
];

// TODO: make this dynamic? i.e. fetch from cms or elsewhere
const navItems: NavItemProps[] = [
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/store",
    display: "Store",
  },
  {
    path: "/volunteer",
    display: "Volunteer",
    dropdown: <DropdownGrid cols={3} items={volunteerItems} />,
  },
  {
    path: "/programs",
    display: "Programs",
    dropdown: <DropdownGrid items={programItems} />,
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header: React.FC = () => (
  <>
    <div className="absolute top-0 z-0 h-12 w-full rounded-b-md bg-primary-700 md:h-16" />
    <header className="sticky top-0 z-50 h-12 rounded-b-md bg-primary-600/90 backdrop-blur transition-all duration-300 ease-in md:h-16">
      <div className="container flex h-full w-full py-2 md:items-center">
        <div className="mt-6">
          <Logo />
        </div>
        {/* <div className="text-lg md:text-xl mt-1 font-extrabold text-neutral-50 ml-2 max-w-[180px] leading-none md:leading-none">
          Childhood Cancer Society
        </div> */}
        <nav className="z-10 flex-grow">
          <ul className="flex h-8 flex-col justify-end md:flex-row">
            {navItems.map((item) => (
              <NavItem key={`${item.display}${item.path}`} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
