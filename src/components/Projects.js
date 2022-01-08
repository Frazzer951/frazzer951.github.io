import { Container, Paper, Typography } from "@mui/material";
import "../style.css";

function Projects() {
  return (
    <Container className="Projects" maxWidth="xl">
      <div className="anchor" id="projects" />
      <Paper
        sx={{
          margin: "auto",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h1" component="div">
          Projects
        </Typography>
      </Paper>
    </Container>
  );
}

export default Projects;
