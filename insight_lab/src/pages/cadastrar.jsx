import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cadastrar = () => {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("Tecnologia da informação");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const novoFornecedor = { nome, cnpj, area_atuacao: areaAtuacao };
    axios
      .post("http://localhost:3002/fornecedor/register", novoFornecedor)
      .then((response) => {
        alert(`Fornecedor de id ${response.data.id} adicionado`);
        navigate("/listar");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "31.9rem",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ mt: 1 }} align="center" variant="h5" fontWeight="bold">
        Cadastrar Fornecedor
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          name="nome"
          label="Nome do Fornecedor"
          autoFocus
          onChange={(event) => setNome(event.target.value)}
        ></TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="cnpj"
          name="cnpj"
          label="Cnpj do fornecedor"
          onChange={(event) => setCnpj(event.target.value)}
        ></TextField>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="atuacao">Segmento de atuação</InputLabel>
          <Select
            labelId="atuacao"
            label="Segmento de atuação"
            value={areaAtuacao}
            onChange={(event) => setAreaAtuacao(event.target.value)}
          >
            <MenuItem value="Tecnologia da informação">
              Tecnologia da Informação
            </MenuItem>
            <MenuItem value="Construção civil">Construção Civil</MenuItem>
            <MenuItem value="Outra área">Outra Área</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ my: 3 }}>
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cadastrar;
