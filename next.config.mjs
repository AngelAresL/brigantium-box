/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contacto-bbox.php",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/acerca-de-gimnasios-bbox.php",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/galeria.php",
        destination: "/comunidad",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
