import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "../style.css";

function Project(props) {
  const { title, description, image, url } = props;

  return (
    <Card sx={{ maxWidth: 345, padding: "5px" }} raised>
      {image && <CardMedia component="img" height={140} image={image} alt={title} sx={{ borderRadius: "5px" }} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      {url && (
        <CardActions>
          <Button size="small" href={url}>
            Source
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default Project;
