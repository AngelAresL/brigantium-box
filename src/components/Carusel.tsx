
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const images = [
  "/inst-1.jpg",
  "/inst-2.jpeg",
  "/inst-3.jpeg",
  "/inst-4.jpeg",
  "/inst-5.jpg",
  "/inst-6.jpeg",
  "/inst-7.jpeg",
  "/inst-8.jpg",
  "/inst-9.jpeg",
  
  "/inst-11.jpeg",
  "/inst-12.jpeg",
  "/inst-13.jpeg",
  
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setSelectedImage(null);
  };

  return (
    <section className="max-w-xl w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="shrink-0" key={index}>
              <div className="px-8">
                <Image
                  className="aspect-[3/2] rounded-xl shadow-black shadow-sm max-w-xs sm:max-w-lg cursor-pointer"
                  src={image}
                  alt={image}
                  width={500}
                  height={500}
                  onClick={() => handleImageClick(image)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls pt-4">
        <div className="embla__buttons gap-x-6 grid items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl"
              onClick={closeOverlay}
            >
              x
            </button>
            <Image
              className=" aspect-[3/2]rounded-xl shadow-black shadow-lg"
              src={selectedImage!}
              alt={selectedImage!}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;