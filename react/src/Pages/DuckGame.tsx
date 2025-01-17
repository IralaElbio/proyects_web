import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import backgroundImage from "../assets/duckgame.jpg";

function DuckGamePage() {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Box style={styles}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "1000px",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          DuckGame Project
        </Typography>
        <Typography variant="body1">
          En este proyecto me encargue de la parte del back-end, mis tareas es
        </Typography>
      </Box>
    </Box>
  );
}

export default DuckGamePage;
