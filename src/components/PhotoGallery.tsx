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
  orientation: "horizontal" | "vertical";
};

export const photos: PhotoInfo[] = [
  { src: foto1, alt: "Description of photo 1", orientation: "horizontal" },
  { src: foto2, alt: "Description of photo 2", orientation: "horizontal" },
  { src: foto3, alt: "Description of photo 3", orientation: "horizontal" },
  { src: foto4, alt: "Description of photo 4", orientation: "vertical" },
  { src: foto5, alt: "Description of photo 5", orientation: "vertical" },
  { src: foto6, alt: "Description of photo 6", orientation: "horizontal" },
  { src: foto4, alt: "Description of photo 4", orientation: "vertical" },
  { src: foto2, alt: "Description of photo 2", orientation: "horizontal" },
  { src: foto3, alt: "Description of photo 3", orientation: "horizontal" },
  { src: foto4, alt: "Description of photo 4", orientation: "vertical" },
  { src: foto4, alt: "Description of photo 4", orientation: "vertical" },
  { src: foto1, alt: "Description of photo 1", orientation: "horizontal" },
  { src: foto6, alt: "Description of photo 6", orientation: "horizontal" },
  { src: foto2, alt: "Description of photo 2", orientation: "horizontal" },
  { src: foto1, alt: "Description of photo 1", orientation: "horizontal" },
  { src: foto2, alt: "Description of photo 2", orientation: "horizontal" },
  { src: foto3, alt: "Description of photo 3", orientation: "horizontal" },
  { src: foto4, alt: "Description of photo 4", orientation: "vertical" },
  { src: foto5, alt: "Description of photo 5", orientation: "vertical" },
  { src: foto5, alt: "Description of photo 5", orientation: "vertical" },
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
    orientation: "horizontal" | "vertical";
  } | null>(null);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <ImageList variant="masonry" cols={getCols()} gap={8}>
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
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex justify-center items-center  mx-auto my-auto w-full h-full"
            >
              {selectedPhoto && (
                <div className="">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="relative object-contain  "
                  />
                </div>
              )}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-20 right-0  text-white text-4xl "
              >
                ✕
              </button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
export default PhotoGallery;
