import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
      <Box
        sx={{
          bgcolor: "#2B3445",
          py: 1.3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          color={"HighlightText"}
          variant="h6"
          fontSize={18}
        >
          Designed and developed by{" "}
          <Button
            sx={{
              mx: 0.5,
              fontSize: "18px",
              textTransform: "capitalize",
              color: "#ff7790",
            }}
            variant="text"
            color="primary"
          >
            Abdualrhamn Abdali
            </Button>{" "}
          2024
        </Typography>
      </Box>
  );
}
