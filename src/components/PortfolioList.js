import React from 'react'

const PortfolioList = () => {
    const { getMultipleLTPs } = require("nse-quotes-api");

// Get quotes of single stock
// const data = getLTP("INFY");

// Get quotes of multiple stocks
    const data = getMultipleLTPs(["TCS", "INFY"]);
    console.log(data);
  return (
    <div>PortfolioList</div>
  )
}

export default PortfolioList