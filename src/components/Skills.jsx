import { Container, Paper, Typography } from "@mui/material";

import "../App.css";

export default function Skills() {
  return (
    <Container className="Skills" maxWidth="xl">
      <div className="anchor" id="skills" />
      <Paper
        sx={{
          margin: "auto",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h1" component="div">
          Skills
        </Typography>
      </Paper>
    </Container>
  );
}
