import { StaticImageData } from "next/image";

export interface NavItemProps {
  path: string;
  display: string;
  dropdown?: JSX.Element | React.ReactNode;
}

export interface DropdownItem extends NavItemProps {
  programIcon: string | StaticImageData;
  description: string;
}
