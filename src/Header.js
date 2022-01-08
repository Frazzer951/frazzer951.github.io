import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const buttons = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: "100%",
        }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            LUKE ELTISTE
          </Typography>
          {buttons.map((button) => (
            <Button href={button.path}>{button.name}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
