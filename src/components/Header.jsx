import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import React from "react";

const buttons = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Work", path: "#work" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
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
