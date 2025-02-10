import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function MainBarr() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        padding: "3px 12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* Sección de nombre y subtítulo */}
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.3rem",
              lineHeight: 1,
            }}
          >
            Elbio Irala
          </Typography>
          <Typography
            sx={{
              color: "#ccc",
              fontStyle: "italic",
              fontSize: "0.7rem",
              lineHeight: 1,
            }}
          >
            Computer Engineering
          </Typography>
        </Box>

        {/* Botón de navegación */}
        <Button
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
            textTransform: "none",
            padding: "6px 12px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          endIcon={<HomeIcon />}
        >
          Home
        </Button>
      </Stack>
    </Box>
  );
}

export default MainBarr;


