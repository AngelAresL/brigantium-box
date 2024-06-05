"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./Pricing.css";
import ScrollAnimation from "../ScrollAnimation";
import { MouseEventHandler, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface PricingProps {
  setContactMessage: (message: string) => void;
}

const tiers = [
  {
    name: "Plan RX",
    id: "rx",
    href: "#",
    price: "55€",
    description:
      "Tendrás acceso a 3 clases a la semana, independientemente del tipo de clase.",
    features: ["La mejor manera de empezar"],
    mostPopular: false,
    image: "/crossfit-01.jpg",
    contactMessage: "Buenas! Me interesaría el Plan 1 RX.",
  },
  {
    name: "Plan Pro",
    id: "pro",
    href: "#",
    price: "65€",
    description:
      "Tendrás acceso a 4 clases a la semana, independientemente del tipo de clase.",
    features: ["Posibilidad de probar mas opciones"],
    mostPopular: true,
    image: "/crossfit-02.jpg",
    contactMessage: "Buenas! Me interesaría el Plan 2 PRO.",
  },
  {
    name: "Plan Elite",
    id: "elite",
    href: "#",
    price: "75€",
    description:
      "Acceso completo e ilimitado, independientemente del tipo de clase.",
    features: ["Para los más exigentes", "Prepara tu competición"],
    mostPopular: false,
    image: "crossfit-03.webp",
    contactMessage: "Buenas! Me interesaría el Plan 3 ÉLITE.",
  },
];

const Pricing: React.FC<PricingProps> = ({ setContactMessage }) => {
  const handleContactClick = (message: string) => {
    setContactMessage(message);
    const contactElementId =
      window.innerWidth < 600 ? "contact-mobile" : "contact";
    document
      .getElementById(contactElementId)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleFlipMobile: MouseEventHandler<HTMLDivElement> = (event) => {
    const id = event.currentTarget.dataset.id;
    if (id) {
      setSelectedId(id === selectedId ? null : id);
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-black to-blue-400 py-32 "
      id="pricing"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollAnimation
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold  text-blue-400">
              Nuestras tarifas
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
              Tarifas para todo tipo de atletas
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            Elige el plan que mejor se adapte a tus necesidades y da tu maximo
            nivel.
          </p>
        </ScrollAnimation>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <ScrollAnimation
              key={tier.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              delay={index * 0.5}
            >
              <div className="flip-pricing  w-full z-10 rounded-lg min-w-[350px] md:min-w-0">
                <div
                  className={`flip-pricing-inner relative w-full h-full rounded-3xl ${
                    selectedId === tier.id ? "flip-pricing-inner-mobile" : ""
                  }`}
                  onClick={handleFlipMobile}
                  data-id={tier.id}
                >
                  <div
                    className="flip-pricing-front w-full h-full text-center text-4xl flex items-center justify-center absolute rounded-3xl bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${tier.image})` }}
                  >
                    <div className="p-2 rounded-lg w-3/5 font-semibold bg-gray-400 bg-opacity-65">
                      <h2>{tier.name}</h2>
                    </div>
                  </div>

                  <div className="h-full flip-pricing-back absolute p-8 xl:p-10 bg-white rounded-3xl shadow-lg">
                    <div className="flex items-center justify-between gap-x-4 ">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular ? "text-blue-400" : "text-gray-900",
                          "text-lg font-semibold leading-8"
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular && (
                        <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-400">
                          Más demandado
                        </p>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600">
                        /mes
                      </span>
                    </p>
                    <button
                      type="submit"
                      className={classNames(
                        tier.mostPopular
                          ? "bg-blue-400 text-white shadow-sm hover:bg-blue-300"
                          : "text-blue-400 ring-1 ring-inset ring-indigo-200 hover:ring-blue-300",
                        "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 w-full"
                      )}
                      onClick={() => handleContactClick(tier.contactMessage)}
                    >
                      Contacta
                    </button>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
