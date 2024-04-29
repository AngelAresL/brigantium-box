import socialLinks from "../data/socialLinks";


const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-400 hover:text-gray-500"
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

