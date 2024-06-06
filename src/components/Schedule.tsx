import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Schedule = () => {
  return (
    <div className=" bg-[url('/schedule-bg.jpg')] bg-cover bg-no-repeat flex flex-col justify-center items-center pt-12 px-4 pb-20">
      <h2 className="pb-8 text-white text-4xl font-semibold">HORARIO</h2>
      <div className="w-full max-w-screen-lg">
        <Zoom>
          <Image
            src="/schedule.jpg"
            alt="calendario semanal"
            layout="responsive"
            width={1920}
            height={1080}
            style={{ width: "100%", cursor: "zoom-in" }}
            className="object-cover"
          />
        </Zoom>
      </div>
      <a
        href="https://brigantium.wodbuster.com/user/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-blue-400 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 mt-4 lg:w-1/8 px-12 bg-opacity-80"
      >
        Reservar
      </a>
    </div>
  );
};

export default Schedule;
