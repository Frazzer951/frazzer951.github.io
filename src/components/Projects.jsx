import { Container, Grid, Paper, Typography } from "@mui/material";
import "../style.css";
import Project from "./Project";

import website from "../resources/images/website.png";
import aoc from "../resources/images/aoc.jpg";

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
        <Typography variant="h3" component="div" align="center">
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid>
            <Project
              title="Frazzer.net"
              description="This is the website you are currently on. It is written in React and uses Material-UI."
              image={website}
              url="https://github.com/Frazzer951/frazzer951.github.io"
            />
          </Grid>
          <Grid>
            <Project
              title="Advent Of Code"
              description="A Collections of Christmas themed programing problems released every year in December. There are 25 problems each year, with one being released a day."
              image={aoc}
              url="https://github.com/Frazzer951/Advent-Of-Code"
            />
          </Grid>
          <Grid>
            <Project
              title="Daily Coding Problem"
              description="This is a collection of problems that I solved on daily basis. The problems are written in C++ and the questions are from the DailyCodingProblem.com mailing list."
              url="https://github.com/Frazzer951/DailyCodingProblem"
            />
          </Grid>
          <Grid>
            <Project
              title="FMenu"
              description="A Basic Text Based Menu library built in C++"
              url="https://github.com/Frazzer951/FMenu"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Projects;
