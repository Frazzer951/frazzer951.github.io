import { Box, Container, Stack, Paper, Typography } from "@mui/material";
import "../style.css";
import me from "../resources/me.jpg";

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
        <Typography variant="h3" component="div" align="center">
          About Me
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ width: "45%" }}>
            <Typography
              variant="body1"
              align="left"
              paragraph
              sx={{ fontSize: 20 }}
            >
              I am a Computer Science Major currently attending California State
              University Fullerton, for my third year. I am currently living in
              Anaheim, California, and interning for the company Industrial
              Logic Systems.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              paragraph
              sx={{ fontSize: 20 }}
            >
              I work on many programming projects, ranging from web development
              to C++. I use these projects to learn new technologies and improve
              my skills.
            </Typography>
          </Box>

          <img
            src={me}
            alt="Me"
            height="500px"
            style={{ borderRadius: "35px" }}
          />
        </Stack>
      </Paper>
    </Container>
  );
}

export default About;
