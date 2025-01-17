import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import { Box, Typography, Button } from "@mui/material";

function MainBarr() {
  return (
    <Box
      sx={{
        background: "#151516",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.2rem",
          }}
        >
          Elbio Irala
        </Typography>
        <Button
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
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
