import { Container, Paper, Typography } from "@mui/material";
import "../style.css";

function Work() {
  return (
    <Container className="Work" maxWidth="xl">
      <div className="anchor" id="work" />
      <Paper
        sx={{
          margin: "auto",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h1" component="div">
          Work
        </Typography>
      </Paper>
    </Container>
  );
}

export default Work;
