import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Schedule = () => {
  return (
    <div className="flex flex-col justify-center items-center m-20">
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
        className="bg-gray-800 text-white font-medium p-2 mt-4 rounded-lg hover:bg-gray-600 transition duration-200"
      >
        Reservar
      </a>
    </div>
  );
};

export default Schedule;
