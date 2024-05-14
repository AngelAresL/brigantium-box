import Image from "next/image";

type ComponentLogoProps = {
  href?: string;
  size: number;
  src: string;
  alt: string;
  classNameA?: string;
  classNameImg?: string;
  target?: string;
};

const ComponentLogo: React.FC<ComponentLogoProps> = ({
  href,
  size,
  src,
  alt,
  target,
  classNameA,
  classNameImg,
}) => {
  return (
    <a className={classNameA} href={href} target={target}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        layout="fixed"
        className={classNameImg}
      />
    </a>
  );
};

export default ComponentLogo;
