import "./Pricing.css";

interface PricingProps {
  setContactMessage: (message: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ setContactMessage }) => {
  const handleContactClick = (message: string) => {
    setContactMessage(message);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="grid-pricing py-32" id="pricing">
      <div className="flip-pricing">
        <div className="flip-pricing-inner">
          <div
            className="flip-pricing-front"
            style={{ backgroundImage: 'url("/crossfit-01.jpg")' }}
          >
            <div
              className="p-2 rounded-lg w-3/5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
            >
              <div className="opacity-100">
                <h2>
                  Plan 1 <br /> RX
                </h2>
              </div>
            </div>
          </div>

          <div className="flip-pricing-back">
            Tendrás acceso a 3 clases a la semana, independientemente de ser
            Cross Training, Halterofília u OpenBox.
            <div className="text-4xl">55€</div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-medium p-2 rounded-lg hover:bg-gray-600 transition duration-200 w-full"
              onClick={() =>
                handleContactClick("Buenas! Me interesaría el Plan 1 RX.")
              }
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      <div className="flip-pricing">
        <div className="flip-pricing-inner">
          <div
            className="flip-pricing-front"
            style={{ backgroundImage: 'url("/crossfit-02.jpg")' }}
          >
            <div
              className="p-2 rounded-lg w-3/5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
            >
              <div className="opacity-100">
                <h2>
                  Plan 2 <br /> PRO
                </h2>
              </div>
            </div>
          </div>

          <div className="flip-pricing-back">
            Tendrás acceso a 4 clases a la semana, independientemente de ser
            Cross Training, Halterofília u OpenBox.
            <div className="text-4xl">65€</div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-medium p-2 rounded-lg hover:bg-gray-600 transition duration-200 w-full"
              onClick={() =>
                handleContactClick("Buenas! Me interesaría el Plan 2 PRO.")
              }
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      <div className="flip-pricing">
        <div className="flip-pricing-inner">
          <div
            className="flip-pricing-front"
            style={{ backgroundImage: 'url("crossfit-03.jpg")' }}
          >
            <div
              className="p-2 rounded-lg w-3/5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
            >
              <div className="opacity-100">
                <h2>
                  Plan 3 <br /> ÉLITE
                </h2>
              </div>
            </div>
          </div>

          <div className="flip-pricing-back">
            Acceso completo e ilimitado, independientemente de ser
            CrossTraining, Halterofília u OpenBox.
            <div className="text-4xl">75€</div>
            <button
              type="submit"
              className="bg-gray-800 text-white font-medium p-2 rounded-lg hover:bg-gray-600 transition duration-200 w-full"
              onClick={() =>
                handleContactClick("Buenas! Me interesaría el Plan 3 ÉLITE.")
              }
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
