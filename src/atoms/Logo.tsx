import Image from "next/image";

interface LogoProps {
  size?: number;
}
const Logo: React.FC<LogoProps> = ({ size = 80 }) => (
  <div className="drop-shadow-lg">
    <Image
      height={size}
      width={size}
      src="/ccs-logo-bordered.png"
      alt="CCS Logo"
      priority
    />
  </div>
);

export default Logo;
