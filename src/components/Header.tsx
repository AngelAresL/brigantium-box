"use client";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
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
    if (isLargeScreen) {
      controls.start("appear");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk, controls, isLargeScreen]);

  

  const headerVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,

      height: "100px",
    },
    appear: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2 },
    },
    shrink: {
      height: "50px",

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="bg-slate-900 fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial="initial"
        animate={controls}
        variants={headerVariants}
      >
        <NavBar />
      </motion.div>
    </header>
  );
};

export default Header;
