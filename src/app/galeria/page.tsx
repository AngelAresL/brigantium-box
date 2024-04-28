import PhotoGallery from "../../components/PhotoGallery";


const GalleryPage = () => {
  return (
    <div className="container mx-auto  py-8">
      <h1 className="text-3xl font-bold text-center">Fotos</h1>
      <p className="text-xl text-center mt-2">
        Aquí se viene a disfrutar y entrenar duro. Esta es nuestra familia.
      </p>
      <div className="mt-8">
        
        <PhotoGallery />
      </div>
    </div>
  );
};

export default GalleryPage;