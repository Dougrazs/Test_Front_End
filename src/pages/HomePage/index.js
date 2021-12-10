import { Link } from "react-router-dom";
import { Critic } from "./styles";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";

const HomePage = ({ games }) => {
  const data = Array.from(games);

  const renderCard = (game, index) => {
    return (
      <Grid key={game.id} item xs={4}>
        <Card x={{ maxWidth: 300 }}>
          <Link
            to={{
              pathname: `/detalhes/${game.slug}`,
              params: {
                index,
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={game.background_image}
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {game.name}
                </Typography>

                <Critic>
                  <p>Metacritic</p> <h2>{game.metacritic}</h2>
                </Critic>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid
      sx={{ mt: 2, mb: 2 }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {data.map(renderCard)}
    </Grid>
  );
};

export default HomePage;
