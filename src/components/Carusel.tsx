"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
const images = [
  "inst-1.jpg",
  "inst-2.jpeg",
  "inst-3.jpeg",
  "inst-4.jpeg",
  "inst-5.jpg",
  "inst-6.jpeg",
  "inst-7.jpeg",
  "inst-8.jpg",
  "inst-9.jpeg",
  "inst-10.jpeg",
  "inst-11.jpeg",
  "inst-12.jpeg",
  "inst-13.jpeg",
  "inst-14.jpeg",
  "inst-15.jpeg",
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="mx-auto max-w-xl ">
      <div className="overflow-hidden  " ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="shrink-0 " key={index}>
              <div className=" px-6  lg:px-8">
                <img
                  className="aspect-[3/2] flex-none rounded-xl  shadow-black shadow-xl   max-w-lg"
                  src={image}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls pt-4 ">
        <div className="embla__buttons gap-x-6">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
