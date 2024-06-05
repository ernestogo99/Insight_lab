import { AppBar, Container, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
const Footerr = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, marginRight: 1 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footerr;
