import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import CoinsTable from "../components/CoinsTable";
import { TransactionContext } from "../context/TransactionContext";
//import { CryptoState } from "../context/CryptoContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    title: {
      flex: 1,
      color: "coral",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  });



function CryptoTracker () {

  
  const classes = useStyles();
  const history = useNavigate();

  const { currency, setCurrency } = useContext(TransactionContext)

  const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
  });
   
  return (
  <>
    <CoinsTable />
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography 
                    onClick={() => history.push("/")}
                    className={classes.title}>Currency</Typography>

                <Select
                    variant="outlined"
                    style={{
                        width: 100,
                        height: 40,
                        marginLeft: 15,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"EURO"}>EURO</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  </>
  )
}

export default CryptoTracker