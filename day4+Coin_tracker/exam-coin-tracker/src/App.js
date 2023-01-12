import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [bucks, setBucks] = useState(0);
  const [price, setPrice] = useState("0");
  const onChange = (event) => {
    setBucks(event.target.value);
  }
  const selectCoin = (event) => {
    console.log(event.target.value);
    const coinValue = event.target.value;
    coinValue === "0" ? reset() : setPrice(coinValue)
  }
  const reset = () => setBucks(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <div style={{fontSize:"18px"}}>
          <label htmlFor="usd">
            You can get 
            <input 
              value={bucks === 0 || bucks === "" ? "" : bucks / price}
              style={{
                marginLeft: "8px",
                border: "0",
                textAlign: "right",
              }}
              disabled
              type="number" 
            /> 'bucks/exchange rate' 'coin.symbol'
          </label>
          <br />
          in
          <input 
            onChange={onChange} 
            value={bucks} 
            id="usd" 
            type="number" 
            style=
              {{marginLeft:"8px",}} 
          /> 
          bucks!
          <hr/>
          <label htmlFor="coin">Choose one what you want</label>
          <br />
          <select id="coin" onChange={selectCoin}>
            <option value="0">select coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </div>
    )}
    </div>
  );
}

export default App;
