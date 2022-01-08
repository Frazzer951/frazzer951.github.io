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
        <Typography variant="p" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet
          ligula eget mi tempus, fermentum gravida orci luctus. Integer ac nisi
          condimentum, maximus nulla ac, mattis libero. Duis sed vestibulum
          lacus. Aenean libero nisi, lacinia ut nisl eget, faucibus lobortis
          est. Fusce non turpis tortor. Morbi eget orci vel arcu volutpat
          pellentesque ac ac diam. Morbi eget cursus sem. Donec laoreet nisi
          arcu, vel lobortis arcu volutpat eget. Etiam non maximus diam. Nulla
          luctus aliquet nisl. Proin quis eros justo. Curabitur ultrices commodo
          feugiat. In hac habitasse platea dictumst. Ut pharetra maximus urna in
          auctor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nullam maximus, tortor nec faucibus
          feugiat, libero dui sodales tortor, pharetra elementum mauris lectus a
          ante. Vestibulum hendrerit sed diam at faucibus. Mauris sagittis
          libero elit, at efficitur risus tempus vel. Fusce at sem ac augue
          feugiat pharetra a at velit. Mauris orci orci, eleifend ac justo vel,
          lacinia sagittis est. Etiam non ligula massa. Cras vitae metus
          maximus, commodo mauris vel, dapibus sapien. Praesent ac fringilla
          sem. Phasellus a luctus metus, non fermentum velit. Proin velit urna,
          accumsan sit amet velit nec, egestas viverra nisl. Integer id magna eu
          massa volutpat luctus quis ultrices arcu. Sed malesuada lacinia
          malesuada. Integer fringilla aliquet leo ut tincidunt. Nam quis dolor
          eget massa feugiat eleifend. In nec volutpat ante. Fusce quis quam ex.
          Nam id elit nec lectus sodales faucibus. Mauris lacinia auctor elit,
          vitae maximus lorem eleifend in. Sed convallis metus nulla, eu auctor
          nisi suscipit ac. Maecenas libero neque, auctor id fringilla nec,
          egestas id augue. Sed tincidunt felis cursus diam rutrum porttitor.
          Morbi suscipit ante non magna facilisis vehicula. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
          fringilla justo at justo accumsan, vitae dictum enim pellentesque. Sed
          eu sem sit amet nisl cursus mattis. Morbi ut aliquet mauris.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut justo ex, pellentesque non lacinia non,
          pulvinar at nulla. Integer sodales, enim ac porta eleifend, augue
          ligula bibendum nulla, vitae sodales ante orci et nisi. Maecenas quis
          sagittis enim. Quisque tempus justo ac mi gravida, ac efficitur massa
          fermentum. Phasellus eget mattis eros. Quisque neque sem, tincidunt id
          quam eu, imperdiet accumsan turpis. Duis et fringilla est, non
          tincidunt lorem. Praesent id blandit dolor. Maecenas elementum ac
          sapien quis condimentum. Quisque in viverra leo. Fusce pulvinar, diam
          a laoreet cursus, nisl magna congue metus, non mollis nibh enim quis
          eros. Nullam mollis aliquet mollis. Morbi commodo efficitur leo, sit
          amet rhoncus nisi laoreet at. Integer efficitur rhoncus egestas.
          Integer faucibus semper fermentum.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
