import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

var CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //console.log(data.rates);
        //console.log(Object.keys(data.rates));

        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[toCurrency]);
      });
  }, []);

  //  console.log(exchangeRate);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rates[toCurrency]);

          setExchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  var paperstyle = {
    width: 400,
    height: "50vh",
    margin: "20% 20% 50% 100%",
    padding: "20px",
    borderRadius: "20px",
    color: "black",
    background: "#49baaf",
  };

  return (
    <>
      <Paper elevation={2} style={paperstyle}>
        <header style={{ height: "20%" }}>
          <Typography variant="h5" textAlign="center">
            Currency Converter
          </Typography>
        </header>

        {/* <p>Input value</p> */}

        <div className="flex space-x-2">
          <select
            style={{ width: "50%", height: "40px", borderRadius: "10px" }}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="flex-1 border p-2 rounded"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>

          <select
            style={{ width: "50%", height: "40px", borderRadius: "10px" }}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="flex-1 border p-2 rounded"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
        <section style={{ marginTop: "20px" }}>
          <input
            min="0"
            style={{ width: "48%", height: "40px", borderRadius: "10px" }}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            value={convertedAmount}
            className="w-full border p-2 rounded"
            style={{ width: "48%", height: "40px", borderRadius: "10px" }}
          />
        </section>
        {/* {convertedAmount && (
          <p className="text-lg">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        )} */}
      </Paper>
    </>
  );
};

export default CurrencyConverter;
