import React from 'react';

const StockDisplay = ({ stockData }) => {
  console.log('Stock Data in StockDisplay:', stockData);

  return (
    <div>
      {/* Display stock data here */}
      {stockData && (
        <div>
          <h2>{stockData.symbol}</h2>
          <p>Open: {stockData.open}</p>
          <p>High: {stockData.high}</p>
          <p>Low: {stockData.low}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default StockDisplay;
