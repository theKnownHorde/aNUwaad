import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, my: 10 }}>
        <Box
      sx={{
        maxWidth: "50%", // Adjust the maximum width to ensure responsiveness
        maxHeight: "60vh", // Adjust the maximum height to ensure responsiveness
        objectFit: "contain", // Ensure the element maintains its aspect ratio
        borderRadius: "20px", // Rounded corners
        boxShadow: "-5px -5px 105px #64f3d5", // Custom shadow effect
        marginTop: "20px", // Top margin
        marginBottom: "20px", // Bottom margin
        padding: "10px", // Padding inside the box
        background: "transparent", // Semi-transparent white background
        border: "1px solid #ccc", // Light grey border
        overflow: "auto", // Add scroll for overflow text
        textAlign: "left", // Center-align text
        color: "#0", // Text color,
        fontSize:"28px",
        marginLeft:"60px"
      }}
    >
      <p>
        Welcome to a new era of digital interaction with 
        <strong> aNUwaad</strong>, your AI-powered chatbot companion. Designed 
        to blend seamlessly into your daily life, aNUwaad 
        is here to make every conversation count. Whether 
        you're seeking assistance, exploring new ideas, or 
        just looking for a friendly chat, aNUwaad is ready 
        to engage with you in a way that feels natural and 
        intuitive. Dive in and discover the power of 
        AI-driven communication with aNUwaad.
      </p>
    </Box>
          <img
            src="openai.png"
            alt="openai"
            style={{ width: "355px", margin: "auto" }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
