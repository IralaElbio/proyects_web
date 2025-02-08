import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import backgroundImage from "../Assets/duckgame.jpg";

const HeroContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  
  text-align: center;
  color: white;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 80%);
    z-index: -1;
  }
`;

const Title = styled(Typography)`
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(212, 236, 0, 0.6);
  letter-spacing: 3px;
  font-size: clamp(2rem, 5vw, 4rem);
`;

const Subtitle = styled(Typography)`
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(212, 236, 0, 0.6);
  font-weight: 300;
  letter-spacing: 2px;
  font-size: clamp(1rem, 3vw, 2rem);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: bounce 4s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutPoint = 1500; // Ajusta para que la transición sea más suave
      setOpacity(Math.max(1 - scrollY / fadeOutPoint, 0));
      setScale(Math.max(1 - scrollY / (fadeOutPoint * 1.5), 0.9));

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ opacity }}>
      <motion.div style={{ scale }}>
        <Title variant="h2">DuckGame Project - Back End</Title>
        <Subtitle variant="h4">Multiplayer Game Engine Development</Subtitle>
      </motion.div>
      <ScrollIndicator />
    </HeroContainer>
  );
};

export default HeroSection;