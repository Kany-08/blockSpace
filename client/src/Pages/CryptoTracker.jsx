import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme, ThemeProvider,InputLabel } from "@material-ui/core";
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

  const { currency, setCurrency, setSymbol } = useContext(TransactionContext)

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
    
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
            <Typography onClick={()=>navigate("/")} className={classes.title}></Typography>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>

               <Select labelId="demo-simple-select-label" value={currency} variant="outlined"  style={{width:100,height:40,marginLeft:15,color:"gold"}} onChange={(e)=>{
                   setCurrency(e.target.value)
                   if(e.target.value==="USD"){
                    setSymbol("$")
                }else{
                    setSymbol("€")
                }
                   }}>
                    <MenuItem value="USD">US</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                </Select> 
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
    <CoinsTable />
  </>
  )
}

export default CryptoTracker