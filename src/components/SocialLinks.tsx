
import ComponentLogo from "./ComponentLogo";

const SocialLinks = () => {
  return (
    <ul className="flex space-x-2">
      <li>
        <ComponentLogo
          url="https://www.instagram.com/"
          src="/instagram-logo.jpg"
          alt="Instagram"
          size={24}
          className="rounded-md transition duration-150 ease-in-out transform hover:scale-125"
        />
      </li>
      <li>
        <ComponentLogo
          url="https://www.facebook.com/"
          src="/facebook-logo.jpg"
          alt="Facebook"
          size={24}
          className="rounded-md transition duration-150 ease-in-out transform hover:scale-125"
        />
      </li>
      <li>
        <ComponentLogo
          url="https://www.twitter.com/"
          src="/x-logo.jpg"
          alt="Twitter"
          size={24}
          className="rounded-md transition duration-150 ease-in-out transform hover:scale-125"
        />
      </li>{" "}
    </ul>
  );
};

export default SocialLinks;
