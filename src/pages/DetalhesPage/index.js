import { useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../../api";

import { Container } from "./styles";
import { Box, Typography } from "@mui/material";

const DetalhesPage = (props) => {
  const [infos, setInfos] = useState({});
  const [developer, setDeveloper] = useState({});

  const [platform, setPlatform] = useState({});
  const [platform2, setPlatform2] = useState({});
  const [platform3, setPlatform3] = useState({});
  const [platform4, setPlatform4] = useState({});

  const [genre, setGenre] = useState({});

  const { slug } = useParams();

  async function PegarDetalhes(_props) {
    const response = await API.get(
      `games/${slug}?key=16e1774f77054c039ecafbbc8eb94ea7`
    );

    setInfos(response.data);
    setDeveloper(response.data.developers[0]);
    setPlatform(response.data.platforms[0].platform);
    setPlatform2(response.data.platforms[1].platform);
    setPlatform3(response.data.platforms[2].platform);
    setPlatform4(response.data.platforms[3].platform);
    setGenre(response.data.genres[0]);
  }

  useEffect(() => {
    PegarDetalhes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container image={infos?.background_image}>
      <h1>{infos?.name}</h1>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          color: "#ffff",
        }}
      >
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundOpacity: 1,
            p: 1,
            height: "sm",
          }}
        >
          <Typography variant="h4">{developer?.name}</Typography>
        </Box>
        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundOpacity: 1,
            p: 1,
          }}
        >
          <Typography variant="h4">{platform?.name}</Typography>
          <Typography variant="h4">{platform2?.name}</Typography>
          <Typography variant="h4">{platform3?.name}</Typography>
          <Typography variant="h4">{platform4?.name}</Typography>
        </Box>

        <Box
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundOpacity: 1,
            p: 1,
            height: "auto",
          }}
        >
          <Typography variant="h4">{genre?.name}</Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default DetalhesPage;
