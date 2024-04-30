import ComponentLogo from "./ComponentLogo";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className=" bg-black">
      <div className="hidden lg:flex lg:justify-end lg:px-10 lg:items-center ">
        <div className="mt-2"><SocialLinks color={"rgb(96 165 250);"} /></div>
        
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
