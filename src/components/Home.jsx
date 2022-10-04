import { Container, Button, Paper, Typography, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../style.css";

function Home() {
  return (
    <Container className="Home" maxWidth="xl">
      <div className="anchor" id="home" />
      <Paper
        sx={{
          margin: "auto",
          marginTop: "80px",
          padding: "5px 10px",
        }}
      >
        <Stack direction="row" spacing="auto">
          <div>
            <Typography variant="h1" component="div">
              Luke ELtiste
            </Typography>
            <Typography variant="h4" component="div">
              Computer Scientist
            </Typography>
            <Typography variant="h4" component="div">
              Programmer
            </Typography>
          </div>
          <Stack
            spacing="auto"
            sx={{
              padding: "20px",
            }}
          >
            <Button href="https://github.com/frazzer951">
              <GitHubIcon className="social_button" />
            </Button>
            <Button href="https://www.linkedin.com/in/luke-eltiste/">
              <LinkedInIcon className="social_button" />
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Home;
