"use client";
import Image, { StaticImageData } from "next/image";
import Photo from "./Photo";
// import Box from "@mui/material/Box";
import {
  useTheme,
  useMediaQuery,
  ImageList,
  ImageListItem,
  Modal,
  Box,
} from "@mui/material";
// import ImageListItem from "@mui/material/ImageListItem";
// import Modal from "@mui/material/Modal";

// Importando imágenes como módulos estáticos para usar con Next.js Image
import foto1 from "../../public/foto1a.jpg";
import foto2 from "../../public/foto2a.jpg";
import foto3 from "../../public/foto3a.jpg";
import foto4 from "../../public/foto4v.jpg";
import foto5 from "../../public/foto5v.jpg";
import foto6 from "../../public/foto6a.jpg";
import { useState } from "react";

type PhotoInfo = {
  src: StaticImageData;
  alt: string;
};

const photos: PhotoInfo[] = [
  { src: foto1, alt: "Description of photo 1" },
  { src: foto2, alt: "Description of photo 2" },
  { src: foto3, alt: "Description of photo 3" },
  { src: foto4, alt: "Description of photo 4" },
  { src: foto5, alt: "Description of photo 5" },
  { src: foto6, alt: "Description of photo 6" },
  { src: foto3, alt: "Description of photo 3" },
  { src: foto4, alt: "Description of photo 4" },
  { src: foto5, alt: "Description of photo 5" },
  { src: foto6, alt: "Description of photo 6" },
  { src: foto1, alt: "Description of photo 1" },
  { src: foto2, alt: "Description of photo 2" },
  { src: foto3, alt: "Description of photo 3" },
  { src: foto4, alt: "Description of photo 4" },
  { src: foto5, alt: "Description of photo 5" },
  { src: foto6, alt: "Description of photo 6" },
  { src: foto3, alt: "Description of photo 3" },
  { src: foto4, alt: "Description of photo 4" },
  { src: foto5, alt: "Description of photo 5" },
  { src: foto6, alt: "Description of photo 6" },
];

const PhotoGallery = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const getCols = () => {
    if (xs) return 1; 
    if (sm) return 3; 
    if (md) return 4; 
    
  };

  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ImageList variant="masonry" cols={getCols()} gap={1}>
          {photos.map((photo, index) => (
            <ImageListItem
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group w-full h-full overflow-hidden cursor-pointer relative"
            >
              <Photo src={photo.src} alt={photo.alt} />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100">
                  +
                </span>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Modal
        open={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex justify-center items-center h-screen">
          <div className="bg-white p-2 max-w-4xl max-h-full flex justify-center items-center relative overflow-y-auto">
            {selectedPhoto && (
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                objectFit="contain"
                className="rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-0 right-0 text-white text-2xl p-4"
            >
              ✕
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default PhotoGallery;
