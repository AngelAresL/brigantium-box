import Image from "next/image";

type ComponentLogoProps = {
  href?: string;
  size: number;
  src: string;
  alt: string;
  classNameA?: string;
  classNameImg?: string;
};

const ComponentLogo: React.FC<ComponentLogoProps> = ({
  href,
  size,
  src,
  alt,
  classNameA,
  classNameImg,
}) => {
  return (
    <a className={classNameA} href={href}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={classNameImg}
      />
    </a>
  );
};

export default ComponentLogo;
