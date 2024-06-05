import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Mymenu = () => {
  const [anchor_fornecedor, setAnchorF] = useState(null);

  const abrir_fornecedor = (event) => {
    setAnchorF(event.currentTarget);
  };

  const fechar_fornecedor = () => {
    setAnchorF(null);
  };

  function dropmenuFornecedor() {
    return (
      <Box>
        <Button
          sx={{ color: "white", my: 2, fontSize: "0.8rem" }}
          onClick={abrir_fornecedor}
        >
          Fornecedores
        </Button>
        <Menu
          anchorEl={anchor_fornecedor}
          open={Boolean(anchor_fornecedor)}
          onClose={fechar_fornecedor}
        >
          <MenuItem
            onClick={fechar_fornecedor}
            component={Link}
            to={"cadastrar"}
          >
            Cadastrar
          </MenuItem>
          <MenuItem to={"listar"} component={Link} onClick={fechar_fornecedor}>
            Listar
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex" }, marginRight: 1 }}
            />
            <Typography
              component="a"
              variant="h5"
              href="/"
              sx={{
                textDecoration: "none",
                color: "white",
                fontFamily: "monospace",
                letterSpacing: "0.1rem",
                fontWeight: 800,
                fontSize: "1rem",
              }}
            >
              Insight_lab
            </Typography>
            <Box
              sx={{
                marginLeft: 3,
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {dropmenuFornecedor()}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Mymenu;
