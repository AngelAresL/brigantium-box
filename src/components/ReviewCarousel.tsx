"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "@heroicons/react/20/solid";

import reviews from "../data/reviews";

const ReviewsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <section className="mx-auto px-24 bg-blue-200">
      <h2 className="flex justify-center md:block pt-10 px-10 text-lg font-bold">
        Que opinan nuestros clientes
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, index) => (
            <div className="shrink-0 grow-0 size-full" key={index}>
              <div className="flex justify-center items-center ">
                <div className=" px-6 pt-14 pb-16 g:px-8">
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

                  <p className="mt-10 text-xl font-semibold italic leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
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
