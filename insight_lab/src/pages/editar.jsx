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
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Editar = () => {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("Tecnologia da informação"); // Inicialize com uma string vazia

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/fornecedor/retrieve/${id}`)
      .then((response) => {
        console.log(response.data);
        setNome(response.data.nome);
        setCnpj(response.data.cnpj);
        setAreaAtuacao(response.data.area_atuacao); // Use o valor retornado ou um valor padrão
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fornecedorAtualizado = { nome, cnpj, area_atuacao: areaAtuacao };
    axios
      .put(
        `http://localhost:3002/fornecedor/update/${id}`,
        fornecedorAtualizado
      )
      .then(() => {
        alert(`Fornecedor de id ${id} atualizado`);
        navigate("/listar");
      })
      .catch((error) => console.log(error));
  };

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
        Editar Fornecedor {id}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          name="nome"
          label="Nome do Fornecedor"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="cnpj"
          name="cnpj"
          label="CNPJ do Fornecedor"
          value={cnpj}
          onChange={(event) => setCnpj(event.target.value)}
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="atuacao-label">Segmento de Atuação</InputLabel>
          <Select
            labelId="atuacao-label"
            id="atuacao"
            label="Segmento de Atuação"
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
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Editar;
