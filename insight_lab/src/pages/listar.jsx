import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Delete as Deleteicon } from "@mui/icons-material";
import { Edit as Editicon } from "@mui/icons-material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Listar = () => {
  // simulando uma base de dados

  const [fornecedores, setfornecedores] = useState([]);
  const [open, setopen] = useState(false);
  const [selectFornecedor, setselectFornecedor] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/fornecedor/listar")
      .then((response) => {
        setfornecedores(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function deletarPorID(id) {
    if (window.confirm("deseja excluir?")) {
      axios
        .delete(`http://localhost:3002/fornecedor/delete/${id}`)
        .then((response) => {
          const resultado = fornecedores.filter(
            (fornecedor) => fornecedor.id != id
          );
          setfornecedores(resultado);
        })
        .catch((error) => console.log(error));
    }
  }

  const visualizar = (fornecedor) => {
    setselectFornecedor(fornecedor);
    setopen(true);
  };

  const fechar = () => {
    setselectFornecedor(null);
    setopen(false);
  };

  return (
    <Box sx={{ height: "30.9rem" }}>
      <Typography sx={{ mt: 2 }} align="center" variant="h5" fontWeight="bold">
        Listar Fornecedor
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table sx={{ Width: "10rem" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Cnpj</TableCell>
              <TableCell>Área de atuação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fornecedores.map((fornecedor) => {
              return (
                <TableRow key={fornecedor.id}>
                  <TableCell>{fornecedor.id}</TableCell>
                  <TableCell>{fornecedor.nome}</TableCell>
                  <TableCell>{fornecedor.cnpj}</TableCell>
                  <TableCell>{fornecedor.area_atuacao}</TableCell>
                  <Box>
                    <IconButton
                      to={`/editar/${fornecedor.id}`}
                      color="primary"
                      component={Link}
                      aria-label="edit"
                    >
                      <Editicon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        deletarPorID(fornecedor.id);
                      }}
                      aria-label="delete"
                      color="error"
                    >
                      <Deleteicon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        visualizar(fornecedor);
                      }}
                      color="primary"
                      aria-label="visualizar"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {selectFornecedor && (
        <Dialog open={open} onClose={fechar}>
          <DialogTitle>Detalhes do Fornecedor</DialogTitle>
          <DialogContent>
            <Typography>Id: {selectFornecedor.id}</Typography>
            <Typography>Nome: {selectFornecedor.nome}</Typography>
            <Typography>Cnpj: {selectFornecedor.cnpj}</Typography>
            <Typography>
              Área de atuação: {selectFornecedor.area_atuacao}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={fechar} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Listar;
