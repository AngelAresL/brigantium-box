"use client";
import ComponentLogo from "./ComponentLogo";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLinks from "@/data/navLinks";
import { animate, motion, useAnimation } from "framer-motion";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const controls = useAnimation();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    const handleScroll = () => {
      if (isLargeScreen) {
        if (window.scrollY > 50) {
          if (!isShrunk) {
            setIsShrunk(true);

            controls.start("shrink");
          }
        } else {
          if (isShrunk) {
            setIsShrunk(false);

            controls.start("initial");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk, controls, isLargeScreen]);

  const logoVariants = {
    initial: {
      opacity: 1,
    },
    shrink: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  const linkVariants = {
    initial: { fontSize: "24px", y: 0 },
    shrink: {
      fontSize: "18px",
      y: -30,

      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <nav
        className="mx-auto flex w-full items-center justify-between px-8 py-4 "
        aria-label="Global"
      >
        <motion.div
          className="flex lg:flex-1 "
          variants={logoVariants}
          animate={controls}
        >
          <ComponentLogo
            size={80}
            src={"/brigantium-logo.png"}
            alt={"Brigantium logo"}
            href={"#"}
            classNameA="-m-1.5 p-1.5 "
          />
        </motion.div>
        <div className="flex py-4 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-11 w-11 " aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold  text-gray-400 hover:text-blue-400 "
              whileHover={{ scale: 1.2 }}
              variants={linkVariants}
              initial="initial"
              animate={controls}
              style={{ scale: isShrunk ? 0.8 : 1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed bg-black inset-y-0 right-0 md:inset-y-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grey-900/10">
          <div className="flex items-center justify-between">
            <ComponentLogo
              size={100}
              src={"/brigantium-logo.png"}
              alt={"Brigantium logo"}
              href={"#"}
              classNameA="-m-1.5 p-1.5"
            />
            <motion.button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-10 w-10 text-gray-400 font-bold"
                aria-hidden="true"
              />
            </motion.button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="bg-slate-400 rounded-md"
                  >
                    <button
                      className="block w-full p-2.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a
                        href={item.href}
                        className="-mx-3 px-3 py-2 text-xl font-bold text-slate-600"
                      >
                        {item.name}
                      </a>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default NavBar;
