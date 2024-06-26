import type { Metadata } from "next";
import { galleryMetadata } from "@/data/metadata";
import PhotoGallery from "../../components/PhotoGallery";

export const metadata:Metadata = galleryMetadata;

const GalleryPage = () => {
  return (
    <div className=" mx-auto  px-6 pt-32 pb-8 bg-gradient-to-b from-zinc-900 to-zinc-950 ">
      <h1 className="text-4xl text-zinc-400 font-bold text-center">Fotos</h1>
      <p className="text-xl text-zinc-400 text-center mt-2">
      Aquí se viene a disfrutar y entrenar duro. Esta es nuestra familia, un lugar donde cada esfuerzo cuenta y cada logro es celebrado.
      </p>
      <div className="m-8">
        <PhotoGallery />
      </div>
    </div>
  );
};

export default GalleryPage;
