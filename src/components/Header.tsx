import Image from "next/image";
import BrigantiumLogo from './BrigantiumLogo';
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

const Header = () => {  
  return (
    <header>
      <BrigantiumLogo/>
      <NavBar/>
      <SocialLinks/>
    </header>
  );
}
export default Header;