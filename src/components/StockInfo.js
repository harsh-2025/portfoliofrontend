// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol
//   const [searchInput, setSearchInput] = useState(''); // Input for stock symbol search

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setSymbol(searchInput.toUpperCase()); // Convert to uppercase to ensure consistency
//   };

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/stock/${symbol}`);
//         const data = await response.json();
//         setStockData(data);
//       } catch (error) {
//         console.error('Error fetching stock data:', error);
//       }
//     };

//     fetchStockData();
//   }, [symbol]);

//   return (
//     <div>
//       <form onSubmit={handleSearchSubmit}>
//       <label>
//   Search for Stock Symbol:
//   <input type="text" value={searchInput} onChange={handleSearchInputChange} />
// </label>
// <button type="submit">Search</button>

//         {/* <button type="submit">Search</button> */}
//       </form>

//       {stockData ? (
//         <div>
//           <h2>Stock: {stockData.data['01. symbol']}</h2>
//           <p>Current Price: {stockData.data['05. price']}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default StockInfo;


// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const symbol = 'MSFT'; // Replace with the stock symbol you want to fetch

// //   useEffect(() => {
// //     fetch(`http://localhost:3001/stock/${symbol}`)
// //       .then((response) => response.json())
// //       .then((data) => setStockData(data))
// //       .catch((error) => console.error('Error fetching stock data:', error));
// //   }, [symbol]);
// // useEffect(() => {
// //     fetch(`http://localhost:3001/stock/${symbol}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Received stock data:', data); // Log the stock data to inspect the structure
// //         setStockData(data);
// //       })
// //       .catch((error) => console.error('Error fetching stock data:', error));
//     //   }, [symbol]);
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await fetch(`http://localhost:3001/stock/${symbol}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }
          
//               const rawData = await response.text(); // Get raw response as a string
//             console.log('Raw stock data:', rawData);
    
//             const data = JSON.parse(rawData);
//             console.log('Parsed stock data:', data);
    
//             if (data && data['01. symbol'] && data['05. price']) {
//               setStockData(data);
//             } else {
//               console.error('Invalid data structure received:', data);
//             }
//           } catch (error) {
//             console.error('Error fetching or parsing stock data:', error);
//           }
//         };
    
//         fetchData();
//       }, [symbol]);
    

//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

// //   const symbolValue = stockData.data && stockData.data['01. symbol'];
// //   const priceValue = stockData.data && stockData.data['05. price'];
// const symbolValue = stockData['01. symbol'];
//   const priceValue = stockData['05. price'];
//   return (
//     <div>
//       <h2>Stock: {symbolValue}</h2>
//       <p>Current Price: {priceValue}</p>
//     </div>
//   );
// };

// export default StockInfo;
// StockInfo.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const [symbol, setSymbol] = useState('AAPL'); // Initial stock symbol, you can change it or use user input

//   useEffect(() => {
//     // Make a request to your backend to fetch stock information
//     axios.get(`http://localhost:3001/stock/${symbol}`)
//       .then(response => {
//         setStockData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching stock information:', error.response.data);
//       });
//   }, [symbol]); // Fetch data whenever the symbol changes

//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Stock: {stockData.name}</h2>
//       <p>Current Price: {stockData.price}</p>
//       {/* Display other stock information as needed */}
//     </div>
//   );
// };

// export default StockInfo;


// StockInfo.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const [symbol, setSymbol] = useState('AAPL');

//   useEffect(() => {
//     // Make a request to your backend to fetch stock information
//     axios.get(`http://localhost:3001/stock/${symbol}`)
//       .then(response => {
//         setStockData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching stock information:', error.response.data);
//       });
//   }, [symbol]);

//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Stock: {stockData.name}</h2>
//       <p>Current Price: {stockData.price ? stockData.price : 'Not available'}</p>
//       {/* Display other stock information as needed */}
//       <p>Market Capitalization: {stockData.marketCapitalization}</p>
//       <p>Industry: {stockData.finnhubIndustry}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default StockInfo;

// StockInfo.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const [symbol, setSymbol] = useState('AAPL');

//   useEffect(() => {
//     // Make a request to your backend to fetch stock information
//     axios.get(`http://localhost:3001/stock/${symbol}`)
//       .then(response => {
//         setStockData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching stock information:', error.response.data);
//       });
//   }, [symbol]);

//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>Stock: {stockData.name}</h2>
//       <p>Current Price: {stockData.price ? stockData.price : 'Not available'}</p>
//       {/* Display other stock information as needed */}
//       <p>Market Capitalization: {stockData.marketCapitalization}</p>
//       <p>Industry: {stockData.finnhubIndustry}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default StockInfo;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import StockDisplay from './StockDisplay';

// function App() {
//     const [symbol, setSymbol] = useState('AAPL');
    
//     const [stockData, setStockData] = useState(null);
//     const [rerender, setRerender] = useState(false); // Dummy state

//   const [error, setError] = useState(null);

// //   const fetchStockData = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:3001/api/stock/${symbol}`);
// //         setStockData(response.data);
// //         console.log(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };
// useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/stock/${symbol}`);
//           setStockData(response.data);
//         //   setRerender(prev => !prev); // Toggle rerender
//         console.log(response.data)
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStockData();
//   }, [symbol]);
    
//   return (
//     <div>
//       <input
//         type="text"
//         value={symbol}
//         onChange={(e) => setSymbol(e.target.value)}
//         placeholder="Enter stock symbol"
//       />
//       {/* <button onClick={fetchStockData}>Fetch Stock Data</button> */}

//           <div>
//               <h1>Main component</h1>
//               <StockDisplay stockData={stockData}/>
//       </div>
//     </div>
//   );
// }

// export default App;


// StockDisplay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockDisplay = () => {
//   const [stockData, setStockData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/stockData'); // Assuming your backend is running on port 3000
//         const data = response.data;
//           console.log(response.data);
//         setStockData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // setStockData({ symbol: '', latestPrice: 'Error fetching data' });
//       }
//     };

//     fetchData();
//   }, []);
//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{stockData.ticker}</h1>
//       <p>Open: {stockData.results[0].o}</p>
//       <p>Close: {stockData.results[0].c}</p>
//       {/* Add more data points as needed */}
//     </div>
//   );
// };

// export default StockDisplay;

// App.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function StockInfo() {
//     const [stockData, setStockData] = useState(null);

//     useEffect(() => {
//         const fetchStockData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/get_current_price');
//                 setStockData(response.data);
//             } catch (error) {
//                 console.error('Error fetching stock data:', error);
//             }
//         };

//         fetchStockData();
//     }, []);

//     return (
//         <div>
//             <h1>Stock Price Information</h1>
//             {stockData ? (
//                 <div>
//                     <p>Symbol: {stockData.symbol}</p>
//                     <p>Current Price: {stockData.currentPrice} INR</p>
//                 </div>
//             ) : (
//                 <p>Loading stock data...</p>
//             )}
//         </div>
//     );
// }

// export default StockInfo;


// src/App.js

// import React, { useState } from 'react';
// // import './App.css';
// import Axios from 'axios';

// function App() {
//   const [symbol, setSymbol] = useState('');
//   const [currentPrice, setCurrentPrice] = useState(null);
//   const [error, setError] = useState('');

//   const fetchStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/get_current_price?symbol=${symbol}`);
//       const data = await response.json();
//       console.log('API Response:', data);

//       if (response.ok) {
//         setCurrentPrice(data.currentPrice);
//         setError('');
//       } else {
//         setError(data.error || 'Error fetching stock data');
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Internal Server Error');
//     }
//   };

//   const getStockPrice = async (symbol) => {
//     try {
//       // const response = await Axios.post('http://localhost:3001/apif', { symbol });
//       // console.log(response.data);
//       const response = await fetch(`http://localhost:3001/get_stock_data?symbol=TCS.NS`);
//       const data = await response.json();
//       console.log(response.data);
//       // Handle the response data in your React component
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

// getStockPrice('AAPL'); // Replace 'AAPL' with the desired stock symbol

//   // return (
//   //   <div className="App">
//   //     <h1>Stock Price Lookup</h1>
//   //     <div>
//   //       <label>Enter Stock Symbol:</label>
//   //       <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
//   //       <button onClick={fetchStockData}>Fetch Price</button>
//   //     </div>
//   //     {currentPrice !== null && (
//   //       <div>
//   //         <h2>Stock Symbol: {symbol}</h2>
//   //         <h3>Current Price: {currentPrice} INR</h3>
//   //       </div>
//   //     )}
//   //     {error && <p style={{ color: 'red' }}>{error}</p>}
//   //   </div>
//   // );


// }

// export default App;


// StockInfo.js

// import React, { useState } from 'react';

// const StockInfo = () => {
//   const [tickers, setTickers] = useState('');
//   const [stockData, setStockData] = useState(null);
//   const [error, setError] = useState(null);

//   const getStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${tickers}`);
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//         setStockData(null);
//       } else {
//         setStockData(data);
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Error fetching stock data. Please try again.');
//       setStockData(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Stock Data App</h1>
//       <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//       <input
//         type="text"
//         id="tickers"
//         placeholder="AAPL,MSFT"
//         value={tickers}
//         onChange={(e) => setTickers(e.target.value)}
//       />
//       <button onClick={getStockData}>Get Data</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {stockData && (
//         <div>
//           <h2>Stock Data:</h2>
//           <pre>{JSON.stringify(stockData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockInfo;

// StockInfo.js

// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [tickers, setTickers] = useState('');
//   const [stockPrice, setStockPrice] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Set up a timer to fetch stock data every second
//     const timerId = setInterval(() => {
//       if (tickers) {
//         fetchStockData();
//       }
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(timerId);
//   }, [tickers]);

//   const fetchStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${tickers}`);
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//         setStockPrice(null);
//       } else {
//         setStockPrice(data[0]?.lastPrice); // Assuming the data structure has a "lastPrice" property
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Error fetching stock data. Please try again.');
//       setStockPrice(null);
//     }
//   };

//   const handleTickersChange = (e) => {
//     setTickers(e.target.value);
//   };

//   return (
//     <div className="container">
//       <h1>Stock Data App</h1>
//       <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//       <input
//         type="text"
//         id="tickers"
//         placeholder="AAPL,MSFT"
//         value={tickers}
//         onChange={handleTickersChange}
//       />

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {stockPrice !== null && (
//         <div>
//           <h2>Current Stock Price:</h2>
//           <p>{stockPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockInfo;
// StockInfo.js

// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [tickers, setTickers] = useState('');
//   const [stockPrice, setStockPrice] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       if (tickers) {
//         fetchStockData();
//       }
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [tickers]);

//   const fetchStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${tickers}`);
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//         setStockPrice(null);
//       } else {
//         const lastPrice = data[0]?.lastPrice;
//         setStockPrice(formatPrice(lastPrice));
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Error fetching stock data. Please try again.');
//       setStockPrice(null);
//     }
//   };

//   const handleTickersChange = (e) => {
//     setTickers(e.target.value);
//   };

//   const formatPrice = (price) => {
//     const formattedPrice = new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2,
//     }).format(price);

//     return formattedPrice;
//   };

//   return (
//     <div className="container">
//       <h1>Stock Data App</h1>
//       <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//       <input
//         type="text"
//         id="tickers"
//         placeholder="AAPL,MSFT"
//         value={tickers}
//         onChange={handleTickersChange}
//       />

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {stockPrice !== null && (
//         <div>
//           <h2>Current Stock Price:</h2>
//           <p>{stockPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockInfo;


// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [tickers, setTickers] = useState('');
//   const [stockPrice, setStockPrice] = useState(null);
//   const [stockData, setStockData] = useState(null);

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (tickers) {
//         fetchStockData();
//       }
//     }, 30000);

//     return () => clearInterval(intervalId); // Clear the interval when the component is unmounted or when tickers change
//   }, [tickers]);

//   const fetchStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${tickers}`);
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//         setStockPrice(null);
//         setStockData(null);

//       } else {
//         // const lastPrice = data[0]?.lastPrice;
//         // setStockPrice(formatPrice(lastPrice));
//         setStockData({
//           name: data[0]?.companyName,
//           lastPrice: data[0]?.lastPrice,
//         });
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Error fetching stock data. Please try again.');
//       setStockPrice(null);
//     }
//   };

//   const handleTickersChange = (e) => {
//     setTickers(e.target.value);
//   };

//   const formatPrice = (price) => {
//     const formattedPrice = new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 4,
//     }).format(price);

//     return formattedPrice;
//   };

//   return (
//     // <div className="container">
//     //   <h1>Stock Data App</h1>
//     //   <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//     //   <input
//     //     type="text"
//     //     id="tickers"
//     //     placeholder="AAPL,MSFT"
//     //     value={tickers}
//     //     onChange={handleTickersChange}
//     //   />

//     //   {error && <p style={{ color: 'red' }}>{error}</p>}

//     //   {stockPrice !== null && (
//     //     <div>
//     //       <h2>Current Stock Price:</h2>
//     //       <p>{stockPrice}</p>
//     //     </div>
//     //   )}
//     // </div>
//     <div className="container">
//       <h1>Stock Data App</h1>
//       <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//       <input
//         type="text"
//         id="tickers"
//         placeholder="AAPL,MSFT"
//         value={tickers}
//         onChange={handleTickersChange}
//       />
//       <button onClick={fetchStockData}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {stockData && (
//         <div>
//           <h2>Stock Information:</h2>
//           <p>
//             <strong>Name:</strong> {stockData.name}
//           </p>
//           <p>
//             <strong>Current Stock Price:</strong> {formatPrice(stockData.lastPrice)}
//           </p>
//         </div>
//       )}
//     </div>

//   );
// };

// export default StockInfo;

// import React, { useState, useEffect } from 'react';
// import StockSearch from './StockSearch';

// const StockInfo = () => {
//   const [tickers, setTickers] = useState('');
//   const [stockPrice, setStockPrice] = useState(null);
//   const [stockData, setStockData] = useState(null);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const [error, setError] = useState(null);
//   const handleCompanySelect = (company) => {
//     setSelectedCompany(company);
//   };
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (tickers) {
//         fetchStockData();
//       }
//     }, 30000);

//     return () => clearInterval(intervalId); // Clear the interval when the component is unmounted or when tickers change
//   }, [tickers]);

//   const fetchStockData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${tickers}`);
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//         setStockPrice(null);
//         setStockData(null);

//       } else {
//         // const lastPrice = data[0]?.lastPrice;
//         // setStockPrice(formatPrice(lastPrice));
//         setStockData({
//           name: data[0]?.companyName,
//           lastPrice: data[0]?.lastPrice,
//         });
//         const simulatedData = {
//           name: data[0]?.companyName,
//           lastPrice: data[0]?.lastPrice,
//         };
//         setStockData(simulatedData);
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//       setError('Error fetching stock data. Please try again.');
//       setStockPrice(null);
//     }
//   };

//   const handleTickersChange = (e) => {
//     setTickers(e.target.value);
//   };
  
//   const formatPrice = (price) => {
//     const formattedPrice = new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 4,
//     }).format(price);

//     return formattedPrice;
//   };

//   return (
//     // <div className="container">
//     //   <h1>Stock Data App</h1>
//     //   <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//     //   <input
//     //     type="text"
//     //     id="tickers"
//     //     placeholder="AAPL,MSFT"
//     //     value={tickers}
//     //     onChange={handleTickersChange}
//     //   />

//     //   {error && <p style={{ color: 'red' }}>{error}</p>}

//     //   {stockPrice !== null && (
//     //     <div>
//     //       <h2>Current Stock Price:</h2>
//     //       <p>{stockPrice}</p>
//     //     </div>
//     //   )}
//     // </div>
//     <div className="container">
//       <h1>Stock Data App</h1>
//       <StockSearch onCompanySelect={handleCompanySelect} />

//       <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
//       <input
//         type="text"
//         id="tickers"
//         placeholder="AAPL,MSFT"
//         value={tickers}
//         onChange={handleTickersChange}
//       />
//       <button onClick={fetchStockData}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {stockData && (
//         <div>
//           <h2>Stock Information:</h2>
//           <p>
//             <strong>Name:</strong> {stockData.name}
//           </p>
//           <p>
//             <strong>Current Stock Price:</strong> {formatPrice(stockData.lastPrice)}
//           </p>
//         </div>
//       )}
//     </div>

//   );
// };

// export default StockInfo;

// StockInfo.js
import React, { useState, useEffect } from 'react';
import StockSearch from './StockSearch';

const StockInfo = () => {
  const [tickers, setTickers] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (tickers) {
        fetchStockData();
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [tickers]);

  const fetchStockData = async () => {
    try {
      if (!selectedSymbol) {
        setError('Please select a company from the search.');
        setStockData(null);
        return;
      }

      const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${selectedSymbol}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setStockData(null);
      } else {
        setStockData({
          name: data[0]?.companyName,
          lastPrice: data[0]?.lastPrice,
        });
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError('Error fetching stock data. Please try again.');
      setStockData(null);
    }
  };

  const handleTickersChange = (e) => {
    setTickers(e.target.value);
    setSelectedSymbol(null); // Reset selected symbol when tickers change
  };

  const handleCompanySelect = (selectedCompany) => {
    // Handle the selected company here, you can use its symbol for fetching data
    console.log('Selected Company:', selectedCompany);
    setSelectedSymbol(selectedCompany.Symbol);
  };

  return (
    <div className="container">
      <h1>Stock Data App</h1>
      <StockSearch onCompanySelect={handleCompanySelect} />

      <label htmlFor="tickers">Enter Tickers (comma-separated):</label>
      <input
        type="text"
        id="tickers"
        placeholder="AAPL,MSFT"
        value={tickers}
        onChange={handleTickersChange}
      />
      <button onClick={fetchStockData}>Search Stock</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {stockData && (
        <div>
          <h2>Stock Information:</h2>
          <p>
            <strong>Name:</strong> {stockData.name}
          </p>
          <p>
            <strong>Current Stock Price:</strong> {stockData.lastPrice}
          </p>
        </div>
      )}
    </div>
  );
};

export default StockInfo;


// import React, { useState, useEffect } from 'react';

// const StockInfo = () => {
//   const [stockData, setStockData] = useState(null);
//   const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB']; // Real stock symbols

//   useEffect(() => {
//     const fetchDataForSymbols = async () => {
//         try {
//           const stockPromises = symbols.map((symbol) =>
//             fetch(`http://localhost:3001/stock/${symbol}`).then((response) => response.text())
//           );
      
//           const stockResponses = await Promise.all(stockPromises);
//           const stockDataArray = stockResponses.map((response) => JSON.parse(response));
      
//           setStockData(stockDataArray);
//         } catch (error) {
//           console.error('Error fetching or parsing stock data:', error);
//         }
//       };

//     fetchDataForSymbols();
//   }, [symbols]);

//   if (!stockData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {stockData.map((stock, index) => (
//         <div key={index}>
//           <h2>Stock: {stock.data && stock.data['01. symbol']}</h2>
//           <p>Current Price: {stock.data && stock.data['05. price']}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StockInfo;
