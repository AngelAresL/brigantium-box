import Image, { StaticImageData } from "next/image";

export type PhotoProps = {
  src: StaticImageData;
  alt: string;
};

const Photo: React.FC<PhotoProps> = ({ src, alt }: PhotoProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      className="transition duration-300 ease-in-out transform lg:group-hover:scale-110 object-cover"
    />
  );
};
export default Photo;
