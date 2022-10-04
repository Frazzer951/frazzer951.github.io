import { Container, Paper, Typography } from "@mui/material";

import "../App.css";

function Skills() {
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

export default Skills;
