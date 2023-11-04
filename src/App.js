import "./App.css";
import BasicTextFields from "./components/AddUser";
import { Container, Grid } from "@mui/material";
import BasicTable from "./components/User";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container className="mt-4">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BasicTextFields></BasicTextFields>
        </Grid>
        <Grid item xs={8}>
          <BasicTable></BasicTable>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
