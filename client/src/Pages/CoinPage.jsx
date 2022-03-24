console.log('line1')
//import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
console.log('line2')
//import axios from 'axios';
console.log('line3')
import React, { useState, useEffect } from 'react'
console.log('line4')

 console.log('line5')
 //import { useParams } from 'react-router-dom'
 console.log('line6')
 //import CoinInfo from '../components/CoinInfo';
 import { SingleCoin } from '../config/api';
 console.log('line7')
 import { CryptoState } from '../context/TransactionContext';
 console.log('line8')
 import ReactHtmlParser from 'react-html-parser';

// import { numberWithCommas } from '../components/CoinsTable';
// console.log('before function')


// const CoinPage = () => {
// console.log('inside coinpage')
//   const { id } = useParams();
//   const [coin, setCoin] = useState();
 
//   const { currency, symbol } = CryptoState();

//   const fetchCoin = async() => {
//     const { data } = await axios.get(SingleCoin(id));
//     console.log(data)
//     setCoin(data);
//   }

//   useEffect(() => {
//     fetchCoin();
//   }, []);

//   const useStyles = makeStyles((theme) => {console.log(theme)
//     return ({
//     container: {
//       display: "flex",
//       // response styles
//       [theme.breakpoints.down("md")]: {
//         flexDirection: "column",
//         alignItems: "center",
//       },
//     },
//     sidebar: {
//       // response styles
//       [theme.breakpoints.down("md")]: {
//         width:"100%",
//       },
//       width: "30%",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       marginTop: 25,
//       borderRight: "2px solid grey",
//     },
//     heading: {
//       fontWeight: "bold",
//       marginBottom: 20,
//       fontFamily: "Montserrat",
//       color: "white",
//     },
//     description: {
//       width: "100%",
//       fontFamily: "Montserrat",
//       padding: 25,
//       paddingBottom: 15,
//       paddingTop: 0,
//       textAlign: "justify",
//       color: "white",
//     },
//     marketData: {
//       alignSelf: "start",
//       padding: 25,
//       paddingTop: 10,
//       width: "100%",
//       //responsive
//       [theme.breakpoints.down("md")]: {
//         display: "flex",
//         justifyContent: "space-around",
//       },
//       [theme.breakpoints.down("sm")]: {
//         flexDirection: "column",
//         justifyContent: "center",
//       },
//       [theme.breakpoints.down("xs")]: {
//         alignItems: "start",
//       },

//     },
//   })})

//   const classes = useStyles();
//   const html= coin && coin.description?.en?.split(". ")[0];
//   const price= coin && coin.market_data?.current_price[currency.toLowerCase()]
//   const cap= coin && coin.market_data?.market_cap[currency.toLowerCase()]/* .toString().slice(0, -6) */
  
//   if (!coin) return <LinearProgress style={{ backgroundColor: "coral" }}/>;
//   console.log(price, cap)


//   return (
//     <div className={classes.container}>
    
//       <div className={classes.sidebar}>
//          {/* sidebar */}
//          <img src={coin?.image.large} alt={coin?.name} height="200" style={{ marginBottom:20 }} />
//          <Typography variant="h3" className={classes.heading}>
//             {coin?.name}
//          </Typography>
         
//          <Typography variant="subtitle1" className={classes.description}>
//            <p>{ReactHtmlParser(html)}</p>
//          </Typography>
        
//          <div className={classes.marketData}>
//            <span style={{ display: "flex" }}>
//              <Typography variant="h5" className={classes.heading}>
//                 Rank
//              </Typography>
//               &nbsp; &nbsp;
//               <Typography
//                 variant="h5"
//                 style={{
//                   fontFamily: "Montserrat", color: "white",
//                 }}>
//                 {coin?.market_cap_rank}
//               </Typography>
//            </span>
//            <span style={{ display: "flex" }}>
//              <Typography variant="h5" className={classes.heading}>
//                 Current Price:
//              </Typography>
//               &nbsp; &nbsp;
//               <Typography
//                 variant="h5"
//                 style={{
//                   fontFamily: "Montserrat", color: "white"
//                 }}>
//                 {symbol}{" "}
//                 {numberWithCommas(price)}
//               </Typography>
//            </span>
//            <span style={{ display: "flex" }}>
//              <Typography variant="h5" className={classes.heading}>
//                 Market Cap:{" "}
//              </Typography>
//               &nbsp; &nbsp;
//               <Typography
//                 variant="h5"
//                 style={{
//                   fontFamily: "Montserrat", color: "white"
//                 }}>
//                 {symbol}{" "}
//                 {numberWithCommas(cap)}M
//               </Typography>
//            </span>

//          </div>
//       </div>
//          {/* chart  */}

//       {/* <CoinInfo coin={coin} /> */}
//     </div>
//   )
// }

// export default CoinPage


export default function CoinPage() {
  return (
    <div className='text-white'>CoinPage</div>
  )
}
