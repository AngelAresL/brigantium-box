"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "@heroicons/react/20/solid";
import "./ReviewCarousel.css";
import reviews from "../data/reviews";

const ReviewsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <section className="mx-auto w-11/12 py-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {reviews.map((review, index) => (
            <div
              className="shrink-0 grow-0 basis-9/12  space-x-2 size-full"
              key={index}
            >
              <div className="flex justify-center items-center h-96">
                <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
                  <div className="flex gap-x-1 text-yellow-200">
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                    {review.text}
                  </p>

                  <div className="mt-10 text-sm leading-6">
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
