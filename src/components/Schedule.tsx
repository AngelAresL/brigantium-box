import Image from "next/image";
const Schedule = () => {
  return (
    <div className="flex flex-col justify-center items-center m-20">
      <Image
        className=""
        src="/schedule.jpg"
        alt="calendario semanal"
        width={960}
        height={300}
      />
      <a
        href="https://google.com"
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
