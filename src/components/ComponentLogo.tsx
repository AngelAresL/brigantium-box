import Image from "next/image";

type ComponentLogoProps = {
  url?: string;
  size: number;
  src: string;
  alt: string;
  className?: string;
};

const ComponentLogo: React.FC<ComponentLogoProps> = ({
  url,
  size,
  src,
  alt,
  className,
}) => {
  return (
    <a
      className="flex justify-center items-center"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        layout="fixed"
        className={className}
      />
    </a>
  );
};

export default ComponentLogo;
