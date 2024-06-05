import "./App.css";
import Mymenu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editar from "./pages/editar";
import { Container } from "@mui/material";
import Footerr from "./components/footer";
import Inicio from "./pages/inicio";
import Cadastrar from "./pages/cadastrar";
import Listar from "./pages/listar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mymenu />
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="cadastrar" element={<Cadastrar />}></Route>
            <Route path="listar" element={<Listar />}></Route>
            <Route path="editar/:id" element={<Editar />}></Route>
          </Routes>
        </Container>
        <Footerr></Footerr>
      </BrowserRouter>
    </div>
  );
}

export default App;
