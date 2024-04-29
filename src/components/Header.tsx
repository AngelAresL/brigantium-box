import ComponentLogo from "./ComponentLogo";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className=" bg-blue-400">
      <div className="hidden lg:flex lg:justify-end lg:px-10 lg:items-center "><SocialLinks color={"blue"} /></div>
      
      <NavBar />
      
    </header>
  );


};

export default Header;
