import { Container, Paper, Typography } from "@mui/material";
import "../style.css";

function About() {
  return (
    <Container className="About" id="about" maxWidth="xl">
      <Paper
        sx={{
          margin: "10px auto",
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
