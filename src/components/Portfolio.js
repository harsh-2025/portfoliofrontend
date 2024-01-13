// // Portfolio.js
// import React, { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom'
// import { useUser } from '../context/UserContext';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios';
// const Portfolio = () => {

//     const { user,login } = useUser();
//     const navigate = useNavigate();
//   // Example state to store user's stocks
//     const [stocks, setStocks] = useState([]);
//     const [stockSymbol, setStockSymbol] = useState('');

//   const [quantity, setQuantity] = useState('');

// const handleAddStock = async () => {
//     try {
//         if (user) {
//             console.log(user);
//         }
//       if (!user) {
//           toast.warning('Please login to add a stock.');
//           navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,  // Assuming your user object has a username property
//         stockSymbol,
//         quantity,
//       });

//       // Assuming your backend returns the updated user data
//       login(response.data.user);
//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (

//       <div>
//       <label>
//         Stock Symbol:
//         <input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} />
//       </label>
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//           <button onClick={handleAddStock}>Add Stock</button>
//           <section>
//          <h3>Stocks</h3>
//          <ul>
//       {stocks.map((stock, index) => (
//             <li key={index}>
//               {stock.symbol} - {stock.quantity} shares
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// Portfolio.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../context/UserContext';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios';

// const Portfolio = () => {
//   const { user, login } = useUser();
//   const navigate = useNavigate();

//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');

//   useEffect(() => {
//     // Fetch user's stocks when the component mounts
//     const fetchStocks = async () => {
//       try {
//         if (user) {
//           const response = await axios.get(`http://localhost:3001/getStocks/${user.username}`);
//           setStocks(response.data.stocks);
//         }
//       } catch (error) {
//         console.error('Error fetching stocks:', error);
//       }
//     };

//     fetchStocks();
//   }, [user]);

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//       });

//       login(response.data.user);
//       toast.success('Stock added successfully!');

//       // Refresh user's stocks after adding a new one
//       const updatedStocks = await axios.get(`http://localhost:3001/getStocks/${user.username}`);
//       setStocks(updatedStocks.data.stocks);
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <label>
//         Stock Symbol:
//         <input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} />
//       </label>
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//       <button onClick={handleAddStock}>Add Stock</button>

//       <section>
//         <h3>Stocks</h3>
//         <ul>
//           {stocks.map((stock, index) => (
//             <li key={index}>
//               {stock.stockSymbol} - {stock.quantity} shares
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// ... (other imports)
// import { useUser } from '../context/UserContext';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const Portfolio = () => {

//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//     const navigate = useNavigate();
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);  // Assuming user object includes stocks property
//     }
//   }, [user]);

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       // Update the user context with the updated user data
//       login(updatedUser);

//       // Reset input fields
//       setStockSymbol('');
//       setQuantity('');

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <label>
//         Stock Symbol:
//         <input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} />
//       </label>
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//       <button onClick={handleAddStock}>Add Stock</button>

//       <section>
//         <h3>Stocks</h3>
//         <ul>
//           {stocks.map((stock, index) => (
//             <li key={index}>
//               {stock.stockSymbol} - {stock.quantity} shares
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from 'react';
// import Autosuggest from 'react-autosuggest';
// import axios from 'axios';

// const Portfolio = () => {
//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);

//   const fetchSuggestions = async (value) => {
//     try {
//       const response = await axios.get('../data/stockdata.json');
//       const data = response.data;

//       const filteredSuggestions = data.filter(
//         (item) =>
//           item.symbol.toLowerCase().includes(value.toLowerCase()) ||
//           item.companyName.toLowerCase().includes(value.toLowerCase())
//       );

//       return filteredSuggestions;
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       return [];
//     }
//   };

//   const onSuggestionsFetchRequested = async ({ value }) => {
//     const suggestions = await fetchSuggestions(value);
//     setSuggestions(suggestions);
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onSuggestionSelected = (_, { suggestion }) => {
//     setStockSymbol(suggestion.symbol);
//   };

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//       });

//       const updatedUser = response.data.user;
//       setStocks(updatedUser.stocks);
//       login(updatedUser);

//       setStockSymbol('');
//       setQuantity('');

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   const inputProps = {
//     placeholder: 'Enter stock symbol or company name',
//     value: stockSymbol,
//     onChange: (_, { newValue }) => setStockSymbol(newValue),
//   };

//   return (
//     <div>
//       <label>
//         Stock Symbol:
//         <Autosuggest
//           suggestions={suggestions}
//           onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//           onSuggestionsClearRequested={onSuggestionsClearRequested}
//           onSuggestionSelected={onSuggestionSelected}
//           getSuggestionValue={(suggestion) => suggestion.symbol}
//           renderSuggestion={(suggestion) => (
//             <div>
//               {suggestion.symbol} - {suggestion.companyName}
//             </div>
//           )}
//           inputProps={inputProps}
//         />
//       </label>
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//       <button onClick={handleAddStock}>Add Stock</button>

//       <section>
//         <h3>Stocks</h3>
//         <ul>
//           {stocks.map((stock, index) => (
//             <li key={index}>
//               {stock.stockSymbol} - {stock.quantity} shares
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Autosuggest from 'react-autosuggest'
// // import 'react-autosuggest/dist/react-autosuggest.css';

// const Portfolio = () => {
//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);

//   const fetchSuggestions = async (value) => {
//     try {
//       const response = await axios.get('./stockdata.json');
//       const data = response.data;

//       const filteredSuggestions = data.filter(
//         (item) =>
//           item.companyName.toLowerCase().includes(value.toLowerCase()) ||
//           item.symbol.toLowerCase().includes(value.toLowerCase())
//       );

//       return filteredSuggestions;
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       return [];
//     }
//   };

//   const onSuggestionsFetchRequested = async ({ value }) => {
//     const suggestions = await fetchSuggestions(value);
//     setSuggestions(suggestions);
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onSuggestionSelected = (_, { suggestion }) => {
//     setStockSymbol(suggestion.symbol);
//     setSelectedCompany(suggestion);
//   };

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//       });

//       const updatedUser = response.data.user;
//       setStocks(updatedUser.stocks);
//       login(updatedUser);

//       setStockSymbol('');
//       setQuantity('');
//       setSelectedCompany(null);

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <label>
//         Stock Symbol:
//         <Autosuggest
//           suggestions={suggestions}
//           onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//           onSuggestionsClearRequested={onSuggestionsClearRequested}
//           onSuggestionSelected={onSuggestionSelected}
//           getSuggestionValue={(suggestion) => suggestion.symbol}
//           renderSuggestion={(suggestion) => (
//             <div>
//               {suggestion.symbol} - {suggestion.companyName}
//             </div>
//           )}
//           inputProps={{
//             placeholder: 'Enter stock symbol or company name',
//             value: stockSymbol,
//             onChange: (_, { newValue }) => setStockSymbol(newValue),
//           }}
//         />
//       </label>
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//       <button onClick={handleAddStock}>Add Stock</button>

//       {selectedCompany && (
//         <div className="selected-company">
//           <p>Selected Company: {selectedCompany.companyName}</p>
//           <p>Symbol: {selectedCompany.symbol}</p>
//         </div>
//       )}

//       <section>
//         <h3>Stocks</h3>
//         <ul>
//           {stocks.map((stock, index) => (
//             <li key={index}>
//               {stock.stockSymbol} - {stock.quantity} shares
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// class based componenet in theis

// trying search***************
// import { toast } from 'react-toastify';
// import { useUser } from '../context/UserContext';
// import {  useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import json from "../data/stockdata.json";
// const Portfolio = () => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const navigate = useNavigate();
//   const search = (event) => {
//     const input = event.target.value.toLowerCase();
//     const matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     setSuggestions(matches);
//     setSelectedCompany(null);
//   };

//   const selectCompany = (selectedCompanyName) => {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     setSelectedCompany(selectedCompany);
//     setSuggestions([]);
//     // Handle the selected company directly within this component
//     console.log('Selected Company:', selectedCompany);
//   };
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);  // Assuming user object includes stocks property
//     }
//   }, [user]);

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       // Update the user context with the updated user data
//       login(updatedUser);

//       // Reset input fields
//       setStockSymbol('');
//       setQuantity('');

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (

//     <div className="app-container">
//       <h2>ReactJS - Autocomplete</h2>
//       <label htmlFor="searchInput">Search Here</label>
//       <input
//         id="searchInput"
//         className="search-input"
//         onKeyUp={search}
//         placeholder="Type to search..."
//       />
//       <React.Fragment>
//         <ul className="suggestions-list">
//           {suggestions.map((res, index) => (
//             <li
//               key={index}
//               onClick={() => selectCompany(res)}
//               className="suggestion-item"
//             >
//               {res}
//             </li>
//           ))}
//         </ul>
//       </React.Fragment>
//       {selectedCompany && (
//         <div className="selected-company">
//           <p>Selected Company: {selectedCompany.companyName}</p>
//           <p>Symbol: {selectedCompany.Symbol}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;

// import { toast } from 'react-toastify';
// import { useUser } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import json from '../data/stockdata.json';

// const Portfolio = () => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [boughtPrice, setBoughtPrice] = useState('');
//   const navigate = useNavigate();

//   const search = (event) => {
//     const input = event.target.value.toLowerCase();
//     const matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     setSuggestions(matches);
//     setSelectedCompany(null);
//   };

//   const selectCompany = (selectedCompanyName) => {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     setSelectedCompany(selectedCompany);
//     setStockSymbol(selectedCompany?.Symbol || '');
//     setSuggestions([]);
//   };

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//         boughtPrice,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       // Update the user context with the updated user data
//       login(updatedUser);

//       // Reset input fields
//       setStockSymbol('');
//       setQuantity('');
//       setBoughtPrice('');

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div className="app-container">
//       <h2>ReactJS - Autocomplete</h2>
//       <label htmlFor="searchInput">Search Here</label>
//       <input
//         id="searchInput"
//         className="search-input"
//         onKeyUp={search}
//         placeholder="Type to search..."
//       />
//       <React.Fragment>
//         <ul className="suggestions-list">
//           {suggestions.map((res, index) => (
//             <li
//               key={index}
//               onClick={() => selectCompany(res)}
//               className="suggestion-item"
//             >
//               {res}
//             </li>
//           ))}
//         </ul>
//       </React.Fragment>
//       {selectedCompany && (
//         <div className="selected-company">
//           <p>Selected Company: {selectedCompany.companyName}</p>
//           <p>Symbol: {selectedCompany.Symbol}</p>
//         </div>
//       )}
//       <form>
//         <label>
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </label>
//         <label>
//           Bought Price:
//           <input
//             type="number"
//             value={boughtPrice}
//             onChange={(e) => setBoughtPrice(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleAddStock}>
//           Add Stock
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Portfolio;

// import { toast } from 'react-toastify';
// import { useUser } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import json from '../data/stockdata.json';

// const Portfolio = () => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [stockPrice, setStockPrice] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockPrices, setStockPrices] = useState({});

//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [boughtPrice, setBoughtPrice] = useState('');
//   const [companyselect, setcompanyselect] = useState('');
//   const navigate = useNavigate();
//   const fetchCompanyName = (symbol) => {
//     const company = json.find((stock) => stock.Symbol === symbol);
//     return company ? company.companyName : 'Company Name Not Found';
//   };
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);
//   // useEffect(() => {
//   //   const fetchStockPrices = async () => {
//   //     const pricePromises = stocks.map(async (stock) => {
//   //       try {
//   //         const price = await fetchStockPrice(stock.stockSymbol);
//   //         return {
//   //           ...stock,
//   //           stockPrice: price,
//   //         };
//   //       } catch (error) {
//   //         console.error(`Error fetching stock price for ${stock.stockSymbol}:`, error);
//   //         return stock;
//   //       }
//   //     });

//   //     const stocksWithPrices = await Promise.all(pricePromises);
//   //     setStocks(stocksWithPrices);
//   //   };

//   //   fetchStockPrices();
//   // }, [stocks]);
//   // useEffect(() => {
//   //   // Fetch stock prices for all stocks when the component mounts
//   //   const fetchStockPrices = async () => {
//   //     const prices = {};
//   //     for (const stock of stocks) {
//   //       try {
//   //         const price = await fetchStockPrice(stock.stockSymbol);
//   //         prices[stock.stockSymbol] = price;
//   //       } catch (error) {
//   //         console.error('Error fetching stock price:', error);
//   //         prices[stock.stockSymbol] = 'Price Not Available';
//   //       }
//   //     }
//   //     setStockPrices(prices);
//   //   };

//   //   fetchStockPrices();
//   // }, [stocks]); // Run t
//   // ... (remaining code)
//   // useEffect(() => {
//   //   // Fetch stock prices for all stocks when the component mounts
//   //   const fetchStockPrices = async () => {
//   //     setLoading(true);
//   //     const prices = {};
//   //     for (const stock of stocks) {
//   //       try {
//   //         const price = await fetchStockPrice(stock.stockSymbol);
//   //         prices[stock.stockSymbol] = price;
//   //       } catch (error) {
//   //         console.error('Error fetching stock price:', error);
//   //         prices[stock.stockSymbol] = 'Price Not Available';
//   //       }
//   //     }
//   //     setStockPrices(prices);
//   //     setLoading(false);
//   //   };

//   //   fetchStockPrices();
//   //   const intervalId = setInterval(() => {
//   //     fetchStockPrices();
//   //   }, 60000);

//   //   // Cleanup interval on component unmount
//   //   return () => clearInterval(intervalId);
//   // }, [stocks]); // Run this effect whenever the stocks change

//   useEffect(() => {
//     // Fetch stock prices for all stocks when the component mounts
//     const fetchStockPrices = async () => {
//       setLoading(true);
//       const symbols = stocks.map(stock => stock.stockSymbol).join(',');
//       const apiUrl = `http://localhost:3001/get_stock_data?tickers=${symbols}`;

//       try {
//         const response = await axios.get(apiUrl);
//         const stockData = response.data;

//         if (Array.isArray(stockData) && stockData.length > 0) {
//           const prices = {};
//           for (const data of stockData) {
//             prices[data.ticker] = data.lastPrice;
//           }
//           setStockPrices(prices);
//         } else {
//           console.error('Invalid stock data format:', stockData);
//         }
//       } catch (error) {
//         console.error('Error fetching stock prices:', error);
//       }

//       setLoading(false);
//     };

//     fetchStockPrices();

//     const intervalId = setInterval(() => {
//       fetchStockPrices();
//     }, 60000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [stocks]); // Run this effect whenever the stocks change

//   const fetchStockPrice = async (symbol) => {
//     // Placeholder API URL for stock prices (replace with a real API)
//     const apiUrl = `http://localhost:3001/get_stock_data?tickers=${symbol}`;

//     try {
//       const response = await axios.get(apiUrl);
//       const stockData = response.data;

//       if (Array.isArray(stockData) && stockData.length > 0) {
//         const stockPrice = stockData[0].lastPrice;
//         return stockPrice;
//       } else {
//         console.error('Invalid stock data format:', stockData);
//         return 'Price Not Available';
//       }
//     } catch (error) {
//       console.error('Error fetching stock price:', error);
//       return 'Price Not Available';
//     }
//   };

//   // const search = (event) => {
//   //   const input = event.target.value.toLowerCase();
//   //   const matches = [];

//   //   if (input.length > 1) {
//   //     for (let i = 0; i < json.length; i++) {
//   //       if (json[i].companyName.toLowerCase().includes(input)) {
//   //         matches.push(json[i].companyName);
//   //       }
//   //     }
//   //   }

//   //   setSuggestions(matches);
//   //   setSelectedCompany(null);
//   // };

//   const search = (event) => {
//     const input = event.target.value.toLowerCase();
//     const matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         // Ensure that json[i] is not undefined before accessing companyName
//         if (json[i] && json[i].companyName && json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     setSuggestions(matches);
//     setSelectedCompany(null);
//   };

//   const selectCompany = async (selectedCompanyName) => {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     setSelectedCompany(selectedCompany);
//     // console.log(selectedCompany);
//     setStockSymbol(selectedCompany?.Symbol || '');
//     setSuggestions([]);
//     try {
//       const price = await fetchStockPrice(selectedCompany.Symbol);
//       setStockPrice(price);
//     } catch (error) {
//       console.error('Error fetching stock price:', error);
//     }

//   };

//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }
//       const companyName = fetchCompanyName(stockSymbol);

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//         boughtPrice,
//         companyName,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       // Update the user context with the updated user data
//       login(updatedUser);

//       // Reset input fields
//       setStockSymbol('');
//       setQuantity('');
//       setBoughtPrice('');
//       // setcompanyselect('');
//       setSelectedCompany(null);

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div className="app-container">
//       <h2>ReactJS - Autocomplete</h2>
//       <label htmlFor="searchInput">Search Here</label>
//       <input
//         id="searchInput"
//         className="search-input"
//         onKeyUp={search}
//         placeholder="Type to search..."
//       />
//       <React.Fragment>
//         <ul className="suggestions-list">
//           {suggestions.map((res, index) => (
//             <li
//               key={index}
//               onClick={() => selectCompany(res)}
//               className="suggestion-item"
//             >
//               {res}
//             </li>
//           ))}
//         </ul>
//       </React.Fragment>
//       {selectedCompany && (
//         <div className="selected-company">
//           <p>Selected Company: {selectedCompany.companyName}</p>
//           <p>Symbol: {selectedCompany.Symbol}</p>
//           {stockPrice && <p>Stock Price: {stockPrice}</p>}

//         </div>
//       )}
//       {/* {selectedCompany && (
//         <label>
//           Company Name: {selectedCompany.companyName}
//         </label>
//       )} */}
//       <form>
//         <label>
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </label>
//         <label>
//           Bought Price:
//           <input
//             type="number"
//             value={boughtPrice}
//             onChange={(e) => setBoughtPrice(e.target.value)}
//           />

//         </label>

//         <button type="button" onClick={handleAddStock}>
//           Add Stock
//         </button>
//       </form>
//       <section>
//         <h3>Stocks</h3>
//         <ul>
//           {stocks.map((stock, index) => (
//             <li key={index}>
//               {/* stock price : {fetchStockPrice(stock.stockSymbol)} */}
//               Stock Price: {loading ? 'Loading...' : stockPrices[stock.stockSymbol] || 'Not Available'}

//               Company Name: {fetchCompanyName(stock.stockSymbol)} -{stock.stockSymbol} - {stock.quantity} shares - Bought at {stock.boughtPrice}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

// implementing in form of table ***************

// import { toast } from 'react-toastify';
// import { useUser } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import json from '../data/stockdata.json';
// import "../styles/Portfolio.css"
// const Portfolio = () => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [stockPrice, setStockPrice] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { user, login } = useUser();
//   const [stocks, setStocks] = useState([]);
//   const [stockPrices, setStockPrices] = useState({});
//   const [editStockAction, setEditStockAction] = useState('add');
//   const [editStockQuantity, setEditStockQuantity] = useState('');
//   const [editStockBoughtPrice, setEditStockBoughtPrice] = useState('');

//   const [stockSymbol, setStockSymbol] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [boughtPrice, setBoughtPrice] = useState('');
//   const [companyselect, setcompanyselect] = useState('');
//   const navigate = useNavigate();
//   const fetchCompanyName = (symbol) => {
//     const company = json.find((stock) => stock.Symbol === symbol);
//     return company ? company.companyName : 'Company Name Not Found';
//   };
//   useEffect(() => {
//     // Fetch and display user's existing stocks when the component mounts
//     if (user) {
//       setStocks(user.stocks || []);
//     }
//   }, [user]);

//   useEffect(() => {
//     // Fetch stock prices for all stocks when the component mounts
//     const fetchStockPrices = async () => {
//       setLoading(true);
//       const symbols = stocks.map(stock => stock.stockSymbol).join(',');
//       const apiUrl = `http://localhost:3001/get_stock_data?tickers=${symbols}`;

//       try {
//         const response = await axios.get(apiUrl);
//         const stockData = response.data;

//         if (Array.isArray(stockData) && stockData.length > 0) {
//           const prices = {};
//           for (const data of stockData) {
//             prices[data.ticker] = data.lastPrice;
//           }
//           setStockPrices(prices);
//         } else {
//           console.error('Invalid stock data format:', stockData);
//         }
//       } catch (error) {
//         console.error('Error fetching stock prices:', error);
//       }

//       setLoading(false);
//     };

//     fetchStockPrices();

//     const intervalId = setInterval(() => {
//       fetchStockPrices();
//     }, 60000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [stocks]); // Run this effect whenever the stocks change

//   const fetchStockPrice = async (symbol) => {
//     // Placeholder API URL for stock prices (replace with a real API)
//     const apiUrl = `http://localhost:3001/get_stock_data?tickers=${symbol}`;

//     try {
//       const response = await axios.get(apiUrl);
//       const stockData = response.data;

//       if (Array.isArray(stockData) && stockData.length > 0) {
//         const stockPrice = stockData[0].lastPrice;
//         return stockPrice;
//       } else {
//         console.error('Invalid stock data format:', stockData);
//         return 'Price Not Available';
//       }
//     } catch (error) {
//       console.error('Error fetching stock price:', error);
//       return 'Price Not Available';
//     }
//   };

//   const search = (event) => {
//     const input = event.target.value.toLowerCase();
//     const matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         const companyName = json[i]?.companyName || '';
//       const symbol = json[i]?.Symbol || '';
//         // Ensure that json[i] is not undefined before accessing companyName
//         // if (json[i] && json[i].companyName && json[i].companyName.toLowerCase().includes(input)) {
//         //   matches.push(json[i].companyName);
//         // }
//         if (companyName.toLowerCase().includes(input) || symbol.toLowerCase().includes(input)) {
//           matches.push({ companyName, symbol });
//         }
//       }
//     }

//     setSuggestions(matches);
//     setSelectedCompany(null);
//   };

//   const addStock = async (stockSymbol) => {
//     try {
//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity: editStockQuantity,
//         boughtPrice: editStockBoughtPrice,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   const deleteStock = async (stockSymbol) => {
//     try {
//       const response = await axios.post('http://localhost:3001/deleteStock', {
//         username: user.username,
//         stockSymbol,
//         quantity: editStockQuantity,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       toast.success('Stock deleted successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   const calculateSum = (property) => {
//     return stocks.reduce((sum, stock) => sum + stock[property], 0);
//   };

//   const selectCompany = async (selectedItem) => {
//     // const selectedCompany = json.find(
//     //   (company) => company.companyName === selectedCompanyName
//     // );
//     // setSelectedCompany(selectedCompany);
//     // // console.log(selectedCompany);
//     // setStockSymbol(selectedCompany?.Symbol || '');
//     // setSuggestions([]);
//     // try {
//     //   const price = await fetchStockPrice(selectedCompany.Symbol);
//     //   setStockPrice(price);
//     // } catch (error) {
//     //   console.error('Error fetching stock price:', error);
//     // }
//     setSelectedCompany(selectedItem);
//   setStockSymbol(selectedItem?.symbol || '');
//   setSuggestions([]);
//   try {
//     const price = await fetchStockPrice(selectedItem.symbol);
//     setStockPrice(price);
//   } catch (error) {
//     console.error('Error fetching stock price:', error);
//   }

//   };
// // Function to calculate total investment for a stock
// const calculateTotalInvestment = (stock) => {
//   return (stock.quantity * stock.boughtPrice).toFixed(2);
// };

// // Function to calculate profit/loss for a stock
// const calculateProfitLoss = (stock) => {
//   const currentPrice = stockPrices[stock.stockSymbol];
//   if (currentPrice !== undefined && currentPrice !== 'Not Available') {
//     const totalInvestment = stock.quantity * stock.boughtPrice;
//     const currentValue = stock.quantity * currentPrice;
//     const profitLoss = (currentValue - totalInvestment).toFixed(2);
//     return profitLoss;
//   } else {
//     return 'Not Available';
//   }
// };
// const handleDeleteStock = async (stockSymbol) => {
//   try {
//     if (!user) {
//       toast.warning('Please login to delete a stock.');
//       navigate('/login');
//       return;
//     }

//     const response = await axios.post('http://localhost:3001/deleteStock', {
//       username: user.username,
//       stockSymbol,
//     });

//     const updatedUser = response.data.user;

//     setStocks(updatedUser.stocks);

//     // Update the user context with the updated user data
//     login(updatedUser);

//     toast.success('Stock deleted successfully!');
//   } catch (error) {
//     toast.error(error.response?.data.error || 'An error occurred');
//   }
// };

// const handleEditStock = async (stockSymbol) => {
//   try {
//     if (!user) {
//       toast.warning('Please login to edit a stock.');
//       navigate('/login');
//       return;
//     }

//     const action = window.prompt('Do you want to add or delete the stock? (Type "add" or "delete")');

//     if (action === 'add' || action === 'delete') {
//       setEditStockAction(action);
//       setEditStockQuantity('');
//       setEditStockBoughtPrice('');

//       if (action === 'add') {
//         // Show a modal or form to get the new quantity and bought price from the user
//         // You can use state variables editStockQuantity and editStockBoughtPrice for this

//         // For example, using a simple window.prompt for demonstration:
//         const newQuantity = window.prompt('Enter new quantity:');
//         const newBoughtPrice = window.prompt('Enter new bought price:');

//         if (newQuantity !== null && newBoughtPrice !== null) {
//           setEditStockQuantity(newQuantity);
//           setEditStockBoughtPrice(newBoughtPrice);

//           // After the user submits the form or modal, call the following function:
//           await addStock(stockSymbol);
//         }
//       } else if (action === 'delete') {
//         // Show a modal or form to get the quantity to delete from the user
//         // You can use state variable editStockQuantity for this

//         // For example, using a simple window.prompt for demonstration:
//         const deleteQuantity = window.prompt('Enter quantity to delete:');

//         if (deleteQuantity !== null) {
//           setEditStockQuantity(deleteQuantity);

//           // After the user submits the form or modal, call the following function:
//           await deleteStock(stockSymbol);
//         }
//       }
//     } else {
//       toast.warning('Invalid action. Please type "add" or "delete".');
//     }
//   } catch (error) {
//     toast.error(error.response?.data.error || 'An error occurred');
//   }
// };

// // Function to calculate total portfolio value for a stock
// const calculatePortfolioValue = (stock) => {
//   const currentPrice = stockPrices[stock.stockSymbol];
//   if (currentPrice !== undefined && currentPrice !== 'Not Available') {
//     return (stock.quantity * currentPrice).toFixed(2);
//   } else {
//     return 'Not Available';
//   }
// };
// const calculateProfitLossColor = (stock) => {
//   const profitLoss = parseFloat(calculateProfitLoss(stock));
//   return profitLoss >= 0 ? 'profit' : 'loss';
// };
// const calculateTotalQuantity = () => {
//   return stocks.reduce((total, stock) => total + parseFloat(stock.quantity) || 0, 0);
// };

// // Function to calculate the total investment of all stocks
// const calculateTotalInvestmentAllStocks = () => {
//   return stocks.reduce((total, stock) => total + parseFloat(calculateTotalInvestment(stock)) || 0, 0);
// };

// // Function to calculate the total profit/loss of all stocks
// const calculateTotalProfitLossAllStocks = () => {
//   return stocks.reduce((total, stock) => total + parseFloat(calculateProfitLoss(stock)) || 0, 0);
// };

// // Function to calculate the total portfolio value of all stocks
// const calculateTotalPortfolioValueAllStocks = () => {
//   return stocks.reduce((total, stock) => total + parseFloat(calculatePortfolioValue(stock)) || 0, 0);
// };
//   const handleAddStock = async () => {
//     try {
//       if (!user) {
//         toast.warning('Please login to add a stock.');
//         navigate('/login');
//         return;
//       }
//       const companyName = fetchCompanyName(stockSymbol);

//       const response = await axios.post('http://localhost:3001/addStock', {
//         username: user.username,
//         stockSymbol,
//         quantity,
//         boughtPrice,
//         companyName,
//       });

//       // Assuming your backend returns the updated user data
//       const updatedUser = response.data.user;

//       // Update the local state of stocks with the new user data
//       setStocks(updatedUser.stocks);

//       // Update the user context with the updated user data
//       login(updatedUser);

//       // Reset input fields
//       setStockSymbol('');
//       setQuantity('');
//       setBoughtPrice('');

//       // setcompanyselect('');
//       setSelectedCompany(null);
//     document.getElementById('searchInput').value = '';

//       toast.success('Stock added successfully!');
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div className="app-container">
//   <h2>Stock Portfolio</h2>
//   <label htmlFor="searchInput">Search for Stocks</label>
//   <input
//     id="searchInput"
//     className="search-input"
//     onKeyUp={search}
//     placeholder="Type to search..."
//   />
//   <React.Fragment>
//     <ul className="suggestions-list">
//       {suggestions.map((match, index) => (
//         <li
//           key={index}
//           onClick={() => selectCompany(match)}
//           className="suggestion-item"
//         >
//           {match.companyName}-{match.symbol}
//         </li>
//       ))}
//     </ul>
//   </React.Fragment>
//   {selectedCompany && (
//     <div className="selected-company">
//       <p>Selected Company: {selectedCompany.companyName}</p>
//       <p>Symbol: {selectedCompany.Symbol}</p>
//       {stockPrice && <p>Stock Price: {stockPrice}</p>}
//     </div>
//   )}
//   <form>
//     <label>
//       Quantity:
//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//       />
//     </label>
//     <label>
//       Bought Price:
//       <input
//         type="number"
//         value={boughtPrice}
//         onChange={(e) => setBoughtPrice(e.target.value)}
//       />
//     </label>
//     <button type="button" onClick={handleAddStock}>
//       Add Stock
//     </button>
//   </form>
//   <section>
//     <h3>Your Stock Portfolio</h3>
//     <table className="stock-table">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Symbol</th>
//           <th>Stock Name</th>
//           <th>Bought Price</th>
//           <th>Quantity</th>
//           <th>Current Price</th>
//           <th>Total Investment</th>
//           <th>Total Profit/Loss</th>
//           <th>Total Portfolio Value</th>
//         </tr>
//       </thead>
//       <tbody>
//         {stocks.map((stock, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{stock.stockSymbol}</td>
//             <td>{fetchCompanyName(stock.stockSymbol)}</td>
//             <td>{stock.boughtPrice}</td>
//             <td>{stock.quantity}</td>
//             <td>
//               {loading ? 'Loading...' : stockPrices[stock.stockSymbol] || 'Not Available'}
//             </td>
//             <td>{calculateTotalInvestment(stock)}</td>
//             <td className={calculateProfitLossColor(stock)}>{calculateProfitLoss(stock)}</td>
//             <td>{calculatePortfolioValue(stock)}</td>

//           </tr>
//         ))}
//             <tr>
//             <td colSpan="4">Totals</td>
//               <td>{calculateTotalQuantity()}</td>
//               <td></td>
//               <td>{calculateTotalInvestmentAllStocks().toFixed(2)}</td>

//           <td>{calculateTotalProfitLossAllStocks().toFixed(2)}</td>
//           <td>{calculateTotalPortfolioValueAllStocks().toFixed(2)}</td>
//           </tr>

//       </tbody>
//     </table>
//   </section>
// </div>

//   );
// };

// export default Portfolio;

// implementing the edits button
import { toast } from "react-toastify";

import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import json from "../data/stockdata.json";
import "../styles/Portfolio.css";
const Portfolio = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stockPrice, setStockPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { isTodayHoliday } = require("nse_holidays");

  const { user, login } = useUser();
  const [stocks, setStocks] = useState([]);
  const [stockPrices, setStockPrices] = useState({});
  const [editStockAction, setEditStockAction] = useState("add");
  const [editStockQuantity, setEditStockQuantity] = useState("");
  const [editStockBoughtPrice, setEditStockBoughtPrice] = useState("");

  const [stockSymbol, setStockSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [boughtPrice, setBoughtPrice] = useState("");
  const [companyselect, setcompanyselect] = useState("");
  const navigate = useNavigate();
  const fetchCompanyName = (symbol) => {
    const company = json.find((stock) => stock.Symbol === symbol);
    return company ? company.companyName : "Company Name Not Found";
  };
  useEffect(() => {
    // Fetch and display user's existing stocks when the component mounts
    if (user) {
      setStocks(user.stocks || []);
    }
  }, [user]);

  useEffect(() => {
    // Fetch stock prices for all stocks when the component mounts
    const fetchStockPrices = async () => {
      setLoading(true);
      const symbols = stocks.map((stock) => stock.stockSymbol).join(",");
      const apiUrl = `https://stockbackend-uyx3.onrender.com/get_stock_data?tickers=${symbols}`;

      try {
        const response = await axios.get(apiUrl);
        const stockData = response.data;

        if (Array.isArray(stockData) && stockData.length > 0) {
          const prices = {};
          for (const data of stockData) {
            prices[data.ticker] = data.lastPrice;
          }
          setStockPrices(prices);
        } else {
          console.error("Invalid stock data format:", stockData);
        }
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      }

      setLoading(false);
    };

    fetchStockPrices();

    const intervalId = setInterval(() => {
      fetchStockPrices();
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
    

  }, [stocks]); // Run this effect whenever the stocks change

  const fetchStockPrice = async (symbol) => {
    // Placeholder API URL for stock prices (replace with a real API)
    const apiUrl = `https://stockbackend-uyx3.onrender.com/get_stock_data?tickers=${symbol}`;

    try {
      const response = await axios.get(apiUrl);
      const stockData = response.data;

      if (Array.isArray(stockData) && stockData.length > 0) {
        const stockPrice = stockData[0].lastPrice;
        return stockPrice;
      } else {
        console.error("Invalid stock data format:", stockData);
        return "Price Not Available";
      }
    } catch (error) {
      console.error("Error fetching stock price:", error);
      return "Price Not Available";
    }
  };

  const search = (event) => {
    const input = event.target.value.toLowerCase();
    const matches = [];

    if (input.length > 1) {
      for (let i = 0; i < json.length; i++) {
        const companyName = json[i]?.companyName || "";
        const symbol = json[i]?.Symbol || "";
        // Ensure that json[i] is not undefined before accessing companyName
        // if (json[i] && json[i].companyName && json[i].companyName.toLowerCase().includes(input)) {
        //   matches.push(json[i].companyName);
        // }
        if (
          companyName.toLowerCase().includes(input) ||
          symbol.toLowerCase().includes(input)
        ) {
          matches.push({ companyName, symbol });
        }
      }
    }

    setSuggestions(matches);
    setSelectedCompany(null);
  };

  const addStock = async (stockSymbol) => {
    try {
      const response = await axios.post("https://stockbackend-uyx3.onrender.com/addStock", {
        username: user.username,
        stockSymbol,
        quantity: editStockQuantity,
        boughtPrice: editStockBoughtPrice,
      });

      // Assuming your backend returns the updated user data
      const updatedUser = response.data.user;

      // Update the local state of stocks with the new user data
      setStocks(updatedUser.stocks);

      toast.success("Stock added successfully!");
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };

  const deleteStock = async (stockSymbol) => {
    try {
      const response = await axios.post("https://stockbackend-uyx3.onrender.com/deleteStock", {
        username: user.username,
        stockSymbol,
        quantity: editStockQuantity,
      });

      // Assuming your backend returns the updated user data
      const updatedUser = response.data.user;

      // Update the local state of stocks with the new user data
      setStocks(updatedUser.stocks);

      toast.success("Stock deleted successfully!");
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };

  const calculateSum = (property) => {
    return stocks.reduce((sum, stock) => sum + stock[property], 0);
  };

  const selectCompany = async (selectedItem) => {
   
    setSelectedCompany(selectedItem);
    setStockSymbol(selectedItem?.symbol || "");
    setSuggestions([]);
    try {
      const price = await fetchStockPrice(selectedItem.symbol);
      setStockPrice(price);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };
  // Function to calculate total investment for a stock
  const calculateTotalInvestment = (stock) => {
    return (stock.quantity * stock.boughtPrice).toFixed(2);
  };

  // Function to calculate profit/loss for a stock
  const calculateProfitLoss = (stock) => {
    const currentPrice = stockPrices[stock.stockSymbol];
    if (currentPrice !== undefined && currentPrice !== "Not Available") {
      const totalInvestment = stock.quantity * stock.boughtPrice;
      const currentValue = stock.quantity * currentPrice;
      const profitLoss = (currentValue - totalInvestment).toFixed(2);
      return profitLoss;
    } else {
      return "Not Available";
    }
  };
  const handleDeleteStock = async (stockSymbol) => {
    try {
      if (!user) {
        toast.warning("Please login to delete a stock.");
        navigate("/login");
        return;
      }

      const response = await axios.post("https://stockbackend-uyx3.onrender.com/deleteStock", {
        username: user.username,
        stockSymbol,
      });

      const updatedUser = response.data.user;

      setStocks(updatedUser.stocks);

      // Update the user context with the updated user data
      login(updatedUser);

      toast.success("Stock deleted successfully!");
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };

  const handleEditStock = async (stockSymbol) => {
    try {
      if (!user) {
        toast.warning("Please login to edit a stock.");
        navigate("/login");
        return;
      }

      const action = window.prompt(
        'Do you want to add or delete the stock? (Type "add" or "delete")'
      );

      if (action === "add" || action === "delete") {
        setEditStockAction(action);
        setEditStockQuantity("");
        setEditStockBoughtPrice("");

        if (action === "add") {
          // Show a modal or form to get the new quantity and bought price from the user
          // You can use state variables editStockQuantity and editStockBoughtPrice for this

          // For example, using a simple window.prompt for demonstration:
          const newQuantity = window.prompt("Enter new quantity:");
          const newBoughtPrice = window.prompt("Enter new bought price:");

          if (newQuantity !== null && newBoughtPrice !== null) {
            setEditStockQuantity(newQuantity);
            setEditStockBoughtPrice(newBoughtPrice);

            // After the user submits the form or modal, call the following function:
            await addStock(stockSymbol);
          }
        } else if (action === "delete") {
          // Show a modal or form to get the quantity to delete from the user
          // You can use state variable editStockQuantity for this

          // For example, using a simple window.prompt for demonstration:
          const deleteQuantity = window.prompt("Enter quantity to delete:");

          if (deleteQuantity !== null) {
            setEditStockQuantity(deleteQuantity);

            // After the user submits the form or modal, call the following function:
            await deleteStock(stockSymbol);
          }
        }
      } else {
        toast.warning('Invalid action. Please type "add" or "delete".');
      }
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };

  const calculatePortfolioColor = () => {
    const totalPortfolioValue = calculateTotalPortfolioValueAllStocks();
    const totalInvestment = calculateTotalInvestmentAllStocks();

    if (totalPortfolioValue > totalInvestment) {
      return "profit";
    } else if (totalPortfolioValue < totalInvestment) {
      return "loss";
    } else {
      return "neutral"; // No profit or loss
    }
  };
  // Function to calculate total portfolio value for a stock
  const calculatePortfolioValue = (stock) => {
    const currentPrice = stockPrices[stock.stockSymbol];
    if (currentPrice !== undefined && currentPrice !== "Not Available") {
      return (stock.quantity * currentPrice).toFixed(2);
    } else {
      return "Not Available";
    }
  };
  const calculateProfitLossColor = (stock) => {
    const profitLoss = parseFloat(calculateProfitLoss(stock));
    return profitLoss >= 0 ? "profit" : "loss";
  };
  const calculateTotalQuantity = () => {
    return stocks.reduce(
      (total, stock) => total + parseFloat(stock.quantity) || 0,
      0
    );
  };

  // Function to calculate the total investment of all stocks
  const calculateTotalInvestmentAllStocks = () => {
    return stocks.reduce(
      (total, stock) =>
        total + parseFloat(calculateTotalInvestment(stock)) || 0,
      0
    );
  };

  // Function to calculate the total profit/loss of all stocks
  const calculateTotalProfitLossAllStocks = () => {
    return stocks.reduce(
      (total, stock) => total + parseFloat(calculateProfitLoss(stock)) || 0,
      0
    );
  };

  // Function to calculate the total portfolio value of all stocks
  const calculateTotalPortfolioValueAllStocks = () => {
    return stocks.reduce(
      (total, stock) => total + parseFloat(calculatePortfolioValue(stock)) || 0,
      0
    );
  };
  const calculateProfitEarned = (stock) => {
    if (stockPrices[stock.stockSymbol]) {
      const currentStockPrice = stockPrices[stock.stockSymbol];
      const totalInvestment = stock.quantity * stock.boughtPrice;
      const currentInvestment = stock.quantity * currentStockPrice;
  
      // Check if profit earned needs to be calculated based on selling price
      if (stock.decreaseQuantity) {
        const sellingPrice = parseFloat(stock.decreaseQuantity.sellingPrice);
  
        if (!isNaN(sellingPrice)) {
          const profitEarned = (sellingPrice - stock.boughtPrice) * stock.quantity;
          return profitEarned.toFixed(2);
        }
      }
  
      const profitEarned = currentInvestment - totalInvestment;
      return profitEarned.toFixed(2);
    }
    return 'N/A';
  };
  
  
  const handleIncreaseQuantity = async (stockSymbol) => {
    try {
      if (!user) {
        toast.warning("Please login to increase the quantity of a stock.");
        navigate("/login");
        return;
      }

      const existingStock = stocks.find(
        (stock) => stock.stockSymbol === stockSymbol
      );

      const newQuantity = window.prompt("Enter additional quantity:");
      const newBoughtPrice = window.prompt("Enter new bought price:");

      if (newQuantity !== null && newBoughtPrice !== null) {
        const existingInvestment =
          existingStock.quantity * existingStock.boughtPrice;
        const additionalInvestment =
          parseFloat(newQuantity) * parseFloat(newBoughtPrice);
        const totalInvestment = existingInvestment + additionalInvestment;
        const updatedQuantity =
          parseFloat(existingStock.quantity) + parseFloat(newQuantity);
        const updatedBoughtPrice = totalInvestment / updatedQuantity;

        // Update the stock locally
        const updatedStocks = stocks.map((stock) =>
          stock.stockSymbol === stockSymbol
            ? {
                ...stock,
                quantity: updatedQuantity,
                boughtPrice: updatedBoughtPrice,
              }
            : stock
        );
        setStocks(updatedStocks);

        // Update the stock on the server
        await axios.post("https://stockbackend-uyx3.onrender.com/updateStock", {
          username: user.username,
          stockSymbol,
          quantity: updatedQuantity,
          boughtPrice: updatedBoughtPrice,
        });

        toast.success("Quantity increased successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };
  // const handleDecreaseQuantity = async (stockSymbol) => {
  //   try {
  //     if (!user) {
  //       toast.warning("Please login to decrease the quantity of a stock.");
  //       navigate("/login");
  //       return;
  //     }

  //     const existingStock = stocks.find(
  //       (stock) => stock.stockSymbol === stockSymbol
  //     );

  //     const decreaseQuantity = window.prompt("Enter quantity to decrease:");
  //     const sellingPrice = window.prompt("Enter selling price:");
  //     if (decreaseQuantity !== null) {
  //       const updatedQuantity =
  //         parseFloat(existingStock.quantity) - parseFloat(decreaseQuantity);

  //       if (updatedQuantity < 0) {
  //         toast.warning("Cannot decrease quantity below 0.");
  //         return;
  //       }

  //       // If quantity becomes 0, remove the stock
  //       if (updatedQuantity === 0) {
  //         await handleDeleteStock(stockSymbol);
  //         return;
  //       }

  //       const existingInvestment =
  //         existingStock.quantity * existingStock.boughtPrice;
  //       const decreasedInvestment =
  //         parseFloat(decreaseQuantity) * existingStock.boughtPrice;
  //       const totalInvestment = existingInvestment - decreasedInvestment;
  //       const updatedBoughtPrice = totalInvestment / updatedQuantity;

  //       // Update the stock locally
  //       const updatedStocks = stocks.map((stock) =>
  //         stock.stockSymbol === stockSymbol
  //           ? {
  //               ...stock,
  //               quantity: updatedQuantity,
  //               boughtPrice: updatedBoughtPrice,
  //             }
  //           : stock
  //       );
  //       setStocks(updatedStocks);

  //       // Update the stock on the server
  //       await axios.post("http://localhost:3001/updateStock", {
  //         username: user.username,
  //         stockSymbol,
  //         quantity: updatedQuantity,
  //         boughtPrice: updatedBoughtPrice,
  //       });

  //       toast.success("Quantity decreased successfully!");
  //     }
  //   } catch (error) {
  //     toast.error(error.response?.data.error || "An error occurred");
  //   }
  // };

  const handleDecreaseQuantity = async (stockSymbol) => {
    try {
      if (!user) {
        toast.warning("Please login to decrease the quantity of a stock.");
        navigate("/login");
        return;
      }
  
      const existingStock = stocks.find(
        (stock) => stock.stockSymbol === stockSymbol
      );
  
      const decreaseQuantity = window.prompt("Enter quantity to decrease:");
      const sellingPrice = window.prompt("Enter selling price:");
  
      if (decreaseQuantity !== null) {
        const updatedQuantity =
          parseFloat(existingStock.quantity) - parseFloat(decreaseQuantity);
  
        if (updatedQuantity < 0) {
          toast.warning("Cannot decrease quantity below 0.");
          return;
        }
  
        const existingInvestment =
          existingStock.quantity * existingStock.boughtPrice;
        const decreasedInvestment =
          parseFloat(decreaseQuantity) * existingStock.boughtPrice;
        const totalInvestment = existingInvestment - decreasedInvestment;
        const updatedBoughtPrice = totalInvestment / updatedQuantity;
  
        const profitEarned = 
          (sellingPrice || 0) * parseFloat(decreaseQuantity) - decreasedInvestment;
  
        // Update the stock locally
        const updatedStocks = stocks.map((stock) =>
          stock.stockSymbol === stockSymbol
            ? {
                ...stock,
                quantity: updatedQuantity,
                boughtPrice: updatedBoughtPrice,
                decreaseQuantity: {
                  sellingPrice: sellingPrice || 0,
                  profitEarned: profitEarned || 0,
                },
              }
            : stock
        );
        setStocks(updatedStocks);
  
        // Update the stock on the server
        await axios.post("https://stockbackend-uyx3.onrender.com/updateStock", {
          username: user.username,
          stockSymbol,
          quantity: updatedQuantity,
          boughtPrice: updatedBoughtPrice,
          decreaseQuantity: {
            sellingPrice: sellingPrice || 0,
            profitEarned: profitEarned || 0,
          },
        });
  
        toast.success("Quantity decreased successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };
  

  const handleAddStock = async () => {
    try {
      if (!user) {
        toast.warning("Please login to add a stock.");
        navigate("/login");
        return;
      }
      if (quantity <= 0) {
        toast.warning("Please enter correct Quantity");
        return;
      }
      // if (!companyName) {
      //   toast.warning("Please select the Stock");
      //   return;
      // }
      const companyName = fetchCompanyName(stockSymbol);

      const response = await axios.post("https://stockbackend-uyx3.onrender.com/addStock", {
        username: user.username,
        stockSymbol,
        quantity,
        boughtPrice,
        companyName,
      });

      // Assuming your backend returns the updated user data
      const updatedUser = response.data.user;

      // Update the local state of stocks with the new user data
      setStocks(updatedUser.stocks);

      // Update the user context with the updated user data
      login(updatedUser);

      // Reset input fields
      setStockSymbol("");
      setQuantity("");
      setBoughtPrice("");

      // setcompanyselect('');
      setSelectedCompany(null);
      document.getElementById("searchInput").value = "";

      toast.success("Stock added successfully!");
    } catch (error) {
      toast.error(error.response?.data.error || "An error occurred");
    }
  };

  return (
    <div className="app-container">
      <h2>Stock Portfolio</h2>
      <label htmlFor="searchInput">Search for Stocks</label>
      <input
        id="searchInput"
        className="search-input"
        onKeyUp={search}
        placeholder="Type to search..."
      />
      <React.Fragment>
        <ul className="suggestions-list">
          {suggestions.map((match, index) => (
            <li
              key={index}
              onClick={() => selectCompany(match)}
              className="suggestion-item"
            >
              {match.companyName}-{match.symbol}
            </li>
          ))}
        </ul>
      </React.Fragment>
      {selectedCompany && (
        <div className="selected-company">
          <p>Selected Company: {selectedCompany.companyName}</p>
          <p>Symbol: {selectedCompany.symbol}</p>
          {stockPrice && <p>Stock Price: {stockPrice}</p>}
        </div>
      )}
      <form>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Bought Price:
          <input
            type="number"
            value={boughtPrice}
            onChange={(e) => setBoughtPrice(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAddStock}>
          Add Stock
        </button>
      </form>
      <section>
        <h3>Your Stock Portfolio</h3>
        <table className="stock-table">
          {user && (
            <thead>
              <tr>
                <th>#</th>
                <th>Symbol</th>
                <th>Stock Name</th>
                <th>Bought Price</th>
                <th>Quantity</th>
                <th>Current Price</th>
                <th>Total Investment</th>
                <th>Total Profit/Loss</th>
                <th>Total Portfolio Value</th>
                <th>Actions</th> {/* Add this column for actions */}
              </tr>
            </thead>
          )}
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{stock.stockSymbol}</td>
                <td>{fetchCompanyName(stock.stockSymbol)}</td>
                <td>{stock.boughtPrice.toFixed(2)}</td>
                <td>{stock.quantity}</td>
                <td>
                  {loading
                    ? "Loading..."
                    : stockPrices[stock.stockSymbol] || "Not Available"}
                </td>
                <td>{calculateTotalInvestment(stock)}</td>
                <td className={calculateProfitLossColor(stock)}>
                  {calculateProfitLoss(stock)}
                </td>
                <td>{calculatePortfolioValue(stock)}</td>

                <td>
                  {/* <button onClick={() => handleEditStock(stock.stockSymbol)}>Edit</button> */}
                  <button
                    className="delete"
                    onClick={() => handleDeleteStock(stock.stockSymbol)}
                  >
                    Delete
                  </button>
                  <button
                    className="increase"
                    onClick={() => handleIncreaseQuantity(stock.stockSymbol)}
                  >
                    Increase Quantity
                  </button>
                  <button
                    className="decrease"
                    onClick={() => handleDecreaseQuantity(stock.stockSymbol)}
                  >
                    Decrease Quantity
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">Totals</td>
              <td>{calculateTotalQuantity()}</td>
              <td></td>
              <td>{calculateTotalInvestmentAllStocks().toFixed(2)}</td>

              <td className={calculatePortfolioColor()}>
                {calculateTotalProfitLossAllStocks().toFixed(2)}
              </td>
              <td>{calculateTotalPortfolioValueAllStocks().toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Portfolio;

