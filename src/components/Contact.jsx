import { Container, Paper, Typography } from "@mui/material";

import "../App.css";

function Contact() {
  return (
    <Container className="Contact" maxWidth="xl">
      <div className="anchor" id="contact" />
      <Paper
        sx={{
          margin: "auto",
          padding: "5px 10px",
        }}
      >
        <Typography variant="h1" component="div">
          Contact
        </Typography>
      </Paper>
    </Container>
  );
}

export default Contact;
