import { Box, Container, Typography } from "@mui/material";
import imagem from "../assets/insight.png";
const Inicio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "31.9rem",
      }}
    >
      <Box
        sx={{ width: "17rem" }}
        component="img"
        alt="insight"
        src={imagem}
      ></Box>
    </Box>
  );
};

export default Inicio;
