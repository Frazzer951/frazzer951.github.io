import { Box, Container, Stack, Paper, Typography } from "@mui/material";

import me from "../resources/images/me.jpg";

import "../App.css";

export default function About() {
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
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Box sx={{ width: "45%" }}>
            <Typography variant="body1" align="left" paragraph sx={{ fontSize: 20 }}>
              I am a Computer Science Major currently attending California State University Fullerton, for my fourth year. I am
              currently living in Anaheim, California.
            </Typography>
            <Typography variant="body1" align="left" paragraph sx={{ fontSize: 20 }}>
              I work on many programming projects, to develop and learn new skills. My current favorite language to use is
              Rust, because its low level and fast like C++, but has many high level features that other similar languages
              don't have. Project's I've worked on range from computer renders like Ray Tracing and Ray Marching to low-level
              control of 6-DOF motion platforms.
            </Typography>
          </Box>

          <img src={me} alt="Me" height="500px" style={{ borderRadius: "35px" }} />
        </Stack>
      </Paper>
    </Container>
  );
}
