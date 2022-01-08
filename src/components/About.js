import { Container, Paper, Typography } from "@mui/material";
import "../style.css";

function About() {
  return (
    <Container className="About" maxWidth="xl">
      <div className="anchor" id="about" />
      <Paper
        sx={{
          margin: "auto",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h1" component="div">
          About Me
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
