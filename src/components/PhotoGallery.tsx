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

import foto1 from "../../public/IMG_5983.jpeg";
import foto2 from "../../public/IMG_5991.jpeg";
import foto3 from "../../public/IMG_5993.jpeg";
import foto4 from "../../public/IMG_5996.jpeg";
import foto5 from "../../public/IMG_5997.jpeg";
import foto6 from "../../public/IMG_7976.jpeg";
import foto7 from "../../public/IMG_8210.jpeg";
import foto8 from "../../public/IMG_8213.jpeg";
import foto9 from "../../public/IMG_8214.jpeg";
import foto10 from "../../public/IMG_8215.jpeg";
import foto11 from "../../public/IMG_8216.jpeg";
import foto12 from "../../public/IMG_8217.jpeg";
import foto13 from "../../public/IMG_8218.jpeg";
import foto14 from "../../public/IMG_8219.jpeg";
import foto15 from "../../public/IMG_8220.jpeg";
import foto16 from "../../public/IMG_8221.jpeg";
import foto17 from "../../public/IMG_8222.jpeg";
import foto18 from "../../public/IMG_8223.jpeg";
import foto19 from "../../public/IMG_8224.jpeg";
import foto20 from "../../public/IMG_8225.jpeg";
import foto21 from "../../public/IMG_8226.jpeg";
import foto22 from "../../public/IMG_8227.jpeg";
import foto23 from "../../public/IMG_8228.jpeg";
import foto24 from "../../public/IMG_8229.jpeg";
import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

type PhotoInfo = {
  src: StaticImageData;
  alt: string;
};

export const photos: PhotoInfo[] = [
  { src: foto2, alt: "Description of photo 2" },
  { src: foto3, alt: "Description of photo 3" },
  { src: foto1, alt: "Description of photo 1" },
  { src: foto4, alt: "Description of photo 4" },
  { src: foto5, alt: "Description of photo 5" },
  { src: foto6, alt: "Description of photo 6" },
  { src: foto7, alt: "Description of photo 7" },
  { src: foto8, alt: "Description of photo 8" },
  { src: foto9, alt: "Description of photo 9" },
  { src: foto10, alt: "Description of photo 10" },
  { src: foto11, alt: "Description of photo 11" },
  { src: foto12, alt: "Description of photo 12" },
  { src: foto13, alt: "Description of photo 13" },
  { src: foto14, alt: "Description of photo 14" },
  { src: foto15, alt: "Description of photo 15" },
  { src: foto16, alt: "Description of photo 16" },
  { src: foto17, alt: "Description of photo 17" },
  { src: foto18, alt: "Description of photo 18" },
  { src: foto19, alt: "Description of photo 19" },
  { src: foto20, alt: "Description of photo 20" },
  { src: foto21, alt: "Description of photo 21" },
  { src: foto22, alt: "Description of photo 22" },
  { src: foto23, alt: "Description of photo 23" },
  { src: foto24, alt: "Description of photo 24" },
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
            <ScrollAnimation
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              delay={index * 0.1} 
            >
              <ImageListItem
                onClick={() => setSelectedPhoto(photo)}
                className="group w-full h-full overflow-hidden cursor-pointer relative"
              >
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="w-full h-full"
                >
                  <Photo src={photo.src} alt={photo.alt} />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 lg:group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white text-4xl opacity-0 lg:group-hover:opacity-100">
                      +
                    </span>
                  </div>
                </div>
              </ImageListItem>
            </ScrollAnimation>
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
              className="flex justify-center items-center  mx-auto my-auto w-full h-full focus:outline-none"
            >
              <div className="">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="relative object-contain  "
                />
              </div>

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
