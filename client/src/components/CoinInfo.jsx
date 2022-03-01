import React, {useState, useEffect } from 'react';
import { CryptoState } from "../context/TransactionContext"
import { HistoricalChart } from "../config/api";
import { chartDays } from '../config/data';
import { makeStyles, createTheme, ThemeProvider, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { Line } from "react-chartjs-2";


const CoinInfo = ({ coin }) => {

const [historicData, setHistoricData] = useState();
const [days, setDays] = useState(1);

const { currency } = CryptoState(); 

const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

 
    setHistoricData(data.prices);
};

console.log("data", historicData);


useEffect(() => {
    fetchHistoricData();
}, [currency, days]);

const darkTheme= createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    },
});

const useStyles = makeStyles((theme) => ({
    container: {
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: 0,
            padding: 20,
            paddingTop:0,
        },
    }
}));

const classes = useStyles();


  return (
    <ThemeProvider theme={darkTheme}>
    <div className={classes.container}>
        {/* chart */}
        {
            !historicData ? (
                <CircularProgress
                 style={{ color: "coral" }}
                 size={ 250 }
                 thickness= { 1 }
                />
        ): (
            <>
               {/* <Line
                   data= {{
                       labels:historicData.map((coin) => {
                           let date = new Date(coin[0]);
                           let time =
                            date.getHours() > 12
                            ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;
                        
                        return days===1 ? time : date.toLocaleDateString();
                       }),

                       datasets: [
                          { data: historicData.map((coin) => coin[1]),
                            label: `Price ( Past ${days} Days ) in ${currency}`,
                            borderColor: "#EEBC1D",
                        },
                       ],
                   }}
               /> */}
            </>
        )}
        {/* buttons */}
    </div>
    </ThemeProvider>
  )
}

export default CoinInfo