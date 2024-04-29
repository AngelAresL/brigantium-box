import socialLinks from "../data/socialLinks";

type SocialLinksProps = {
  color: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ color }) => {
  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          style={{ color: color }}
          className="hover:text-opacity-75 transition duration-150 ease-in-out transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{link.name}</span>
          <link.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
