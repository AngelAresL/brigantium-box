import ComponentLogo from "./ComponentLogo";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full  p-4 bg-gray-800 text-white">
      <div className="flex justify-between mt-4 items-center w-full ">
        <ComponentLogo
        
          size={80}
          src={"/brigantium-logo.png"}
          alt={"Brigantium logo"}
        />
        <NavBar />
      </div>
      <div className="hidden sm:block sm:absolute sm:right-4 sm:top-4">
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
