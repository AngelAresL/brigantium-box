"use client";
import Image, { StaticImageData } from "next/image";
import Photo from "./Photo";

import {
  useTheme,
  useMediaQuery,
  ImageList,
  ImageListItem,
  Modal,
  Box,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

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

export const photos: PhotoInfo[] = [
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
  { src: foto6, alt: "Description of photo 6" },
  { src: foto6, alt: "Description of photo 6" },
];

const PhotoGallery = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const md = useMediaQuery(
    theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const getCols = () => {
    if (xs) return 1;
    if (sm) return 3;
    if (md) return 3;
    if (lg) return 4;
  };

  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 50,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ImageList variant="masonry" cols={getCols()} gap={5}>
          {photos.map((photo, index) => (
            <ImageListItem
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group w-full h-full overflow-hidden cursor-pointer relative"
            >
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="w-full h-full"
              >
                <Photo src={photo.src} alt={photo.alt} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-4xl opacity-0 group-hover:opacity-100">
                    +
                  </span>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <AnimatePresence>
        {selectedPhoto && (
          <Modal
            open={true}
            onClose={() => setSelectedPhoto(null)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="flex justify-center items-center h-screen ">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="  p-2 max-w-4xl max-h-full flex justify-center items-center relative overflow-y-auto"
              >
                {selectedPhoto && (
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </motion.div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-0 right-0 text-white text-2xl p-4"
              >
                ✕
              </button>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
export default PhotoGallery;
