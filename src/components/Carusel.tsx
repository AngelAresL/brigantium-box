import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import facilityImages from "@/data/facilityImages";



const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image: any) => {
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
          {facilityImages.map((image, index) => (
            <div className="shrink-0" key={index}>
              <div className="px-8">
                <Image
                  className="aspect-[3/2] rounded-xl shadow-black shadow-sm max-w-xs sm:max-w-lg cursor-pointer"
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  onClick={() => handleImageClick(image.src)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <div className="grid grid-cols-2 gap-x-6  items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute -top-14 right-0 m-4 text-white text-xl"
              onClick={closeOverlay}
            >
              x
            </button>
            <Image
              className=" aspect-[3/2] px-4"
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
