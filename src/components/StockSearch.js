// import React, { useState } from 'react';
// import axios from 'axios';

// const StockSearch = () => {
//     const [keyword, setKeyword] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [error, setError] = useState(null);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3001/search_stock?keyword=${keyword}`);
//             setSearchResults(response.data);
//             setError(null);
//         } catch (error) {
//             console.error('Error searching stock:', error);
//             setError('Error searching stock. Please try again.');
//             setSearchResults([]);
//         }
//     };

//     return (
//         <div>
//             <h1>Stock Search App</h1>
//             <label htmlFor="keyword">Enter Stock Keyword:</label>
//             <input
//                 type="text"
//                 id="keyword"
//                 placeholder="Enter stock keyword"
//                 value={keyword}
//                 onChange={(e) => setKeyword(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search Stock</button>

//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             <div>
//                 <h2>Search Results:</h2>
//                 <ul>
//                     { searchResults.map((result) => (
//                         <li key={result['1. symbol']}>
//                             {result['1. symbol']} - {result['2. name']}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default StockSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// const StockSearch = () => {
//     const [keyword, setKeyword] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [error, setError] = useState(null);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3001/search_stock?keyword=${keyword}`);
//             setSearchResults(response.data);
//             setError(null);
//         } catch (error) {
//             console.error('Error searching stock:', error);
//             setError('Error searching stock. Please try again.');
//             setSearchResults([]);
//         }
//     };

//     return (
//         <div>
//             <h1>Stock Search App</h1>
//             <label htmlFor="keyword">Enter Stock Keyword:</label>
//             <input
//                 type="text"
//                 id="keyword"
//                 placeholder="Enter stock keyword"
//                 value={keyword}
//                 onChange={(e) => setKeyword(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search Stock</button>

//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             <div>
//                 <h2>Search Results:</h2>
//                 {searchResults.length === 0 ? (
//                     <p>No results found.</p>
//                 ) : (
//                     <ul>
//                         {searchResults.map((result) => (
//                             <li key={result['1. symbol']}>
//                                 {result['1. symbol']} - {result['2. name']}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StockSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// function StockSearch() {
//   const [keyword, setKeyword] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/search_stock?keyword=${keyword}`);
//         console.log(response.data);
//         setSearchResults(response.data);
//     } catch (error) {
//       console.error('Error searching stock:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="keyword">Enter Stock Keyword:</label>
//       <input
//         type="text"
//         id="keyword"
//         placeholder="Enter stock keyword"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search Stock</button>

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((stock) => (
//             <li key={stock.ticker}>
//               {stock.ticker}: {stock.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default StockSearch;

// import React, { useState } from 'react';

// // ... (other imports and setup)

// const StockSearch = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [error, setError] = useState(null);
  
//     const handleSearch = async () => {
//       try {
//         const response = await fetch(`https://stocks.algobook.info/api/v1/stocks/search?companyName=${searchTerm}`);
//         const data = await response.json();
  
//         if (data.error) {
//           setError(data.error);
//           setSearchResults([]);
//         } else {
//           setSearchResults(data);
//           setError(null);
//         }
//       } catch (error) {
//         console.error('Error searching stocks:', error);
//         setError('Error searching stocks. Please try again.');
//         setSearchResults([]);
//       }
//     };
  
//     return (
//       <div>
//         <h1>Stock Search App</h1>
//         <label htmlFor="searchTerm">Enter Company Name:</label>
//         <input
//           type="text"
//           id="searchTerm"
//           placeholder="Enter company name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search Stock</button>
  
//         {error && <p style={{ color: 'red' }}>{error}</p>}
  
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {searchResults.map((result) => (
//               <li key={result.symbol}>{result.companyName} - {result.symbol}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
  
//   export default StockSearch;
  
// import React, { useState, useEffect } from 'react';

// const StockSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     const fetchSearchResults = async () => {
//       try {
//         const response = await fetch(`https://stocks.algobook.info/api/v1/stocks?term=${searchTerm}`);
//         const data = await response.json();

//         if (data.error) {
//           setError(data.error);
//           setSearchResults([]);
//         } else {
//           setError(null);
//           setSearchResults(data);
//         }
//       } catch (error) {
//         console.error('Error searching stocks:', error);
//         setError('Error searching stocks. Please try again.');
//         setSearchResults([]);
//       }
//     };

//     fetchSearchResults();
//   }, [searchTerm]);

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="searchTerm">Enter Company Name:</label>
//       <input
//         type="text"
//         id="searchTerm"
//         placeholder="Enter company name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.ticker}>
//               {result.companyName} ({result.ticker}) - Last Price: {result.lastPrice}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// const StockSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`https://www.google.com/finance/quote/${searchTerm}`);
//       // Process the response HTML to extract stock data (use a library like cheerio)
//       // Example: const stockData = extractStockData(response.data);
//       // Set the extracted data in setSearchResults

//       setSearchResults(stockData);
//       setError(null);
//     } catch (error) {
//       console.error('Error searching stock:', error);
//       setError('Error searching stock. Please try again.');
//       setSearchResults([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="searchTerm">Enter Stock Name:</label>
//       <input
//         type="text"
//         id="searchTerm"
//         placeholder="Enter stock name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.ticker}>
//               {result.companyName} - {result.ticker}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockSearch;


// import React, { useState } from 'react';
// import nsetools from 'nsetools';

// const StockSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   const nse = new nsetools();

//   const handleSearch = () => {
//     try {
//       const stockData = nse.getQuote(searchTerm);
//       setSearchResults([stockData]);
//       setError(null);
//     } catch (error) {
//       console.error('Error searching stock:', error);
//       setError('Error searching stock. Please try again.');
//       setSearchResults([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="searchTerm">Enter Stock Name:</label>
//       <input
//         type="text"
//         id="searchTerm"
//         placeholder="Enter stock name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.symbol}>
//               {result.info.symbol} - {result.info.lastPrice}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockSearch;


// src/components/StockSearch.js
// StockSearch.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const StockSearch = () => {
//   const [keyword, setKeyword] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/search_stock?keyword=${keyword}`);
//       setSearchResults(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error searching stock:', error);
//       setError('Error searching stock. Please try again.');
//       setSearchResults([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="keyword">Enter Stock Keyword:</label>
//       <input
//         type="text"
//         id="keyword"
//         placeholder="Enter stock keyword"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.ticker}>
//               {result.companyName} ({result.ticker})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// const StockSearch = () => {
//     const [keyword, setKeyword] = useState(''); // Define keyword using useState
//     const [error, setError] = useState(null);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/search', { searchTerm :keyword});
//         setSearchResults(response.data);
//         setError(null);
// } catch (error) {
//         console.error('Error searching:', error);
//         setError('Error searching stock. Please try again.');

//       setSearchResults([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Search App</h1>
//       <label htmlFor="keyword">Enter Stock Keyword:</label>
//       <input
//         type="text"
//         id="keyword"
//         placeholder="Enter stock keyword"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search Stock</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         <h2>Search Results:</h2>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.Symbol}>
//               {result.Symbol} - {result.companyName}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>

//   );
// };

// export default StockSearch;

// import React, { useState } from 'react';
// import companiesData from '../data/stockdata.json';

// const StockSearch = () => {
//   const [keyword, setKeyword] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     setKeyword(searchTerm);

//     const filteredSuggestions = companiesData.filter((company) =>
//       company.companyName.includes(searchTerm)
//     );

//     setSuggestions(filteredSuggestions);
//   };

//   const handleSelect = (Symbol) => {
//     // Handle what to do when a suggestion is selected (e.g., display the Symbol)
//     alert(`Selected Symbol: ${Symbol}`);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="keyword"
//         placeholder="Enter company name"
//         value={keyword}
//         onChange={handleSearch}
//       />

//       <ul>
//         {suggestions.map((company) => (
//           <li key={company.Symbol} onClick={() => handleSelect(company.Symbol)}>
//             {company.companyName} - {company.Symbol}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StockSearch;

// import React, { useState } from 'react'
// import data from '../data/stockdata.json';


// const StockSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);


//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//     filterData(value);
//   };


//   const filterData = (searchTerm) => {
//     const filteredData = data.filter((item) =>
//       item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filteredData);
//   };


//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />


//       <ul>
//         {filteredData.map((item) => (
//             <li key={item.companyName}>
//             {item.companyName && item.companyName.toLowerCase()} -    {item.Symbol}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default StockSearch;


// import React from 'react';
// import json from '../data/stockdata.json';
 
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { suggestions:[] };
//         this.search = this.search.bind(this);
//     }
     
//     search(event) {
//         let input = event.target.value;
//         //console.log('event.target.value: ' + input);
//         console.log('this.searchResults: ' + json);
//         let matches = [], i;
         
//         if (input.length > 1) {
//             for (i = 0; i < json.length; i++) {
//                 if (json[i].match(input)) {
//                     matches.push(json[i]);
//                 }
//             }
//         }
         
//         this.setState({ suggestions: matches });
//     }
 
//     render() {
//         return (
//             <div>
//         <h2>ReactJS - Autocomplete</h2>
//                 <label>Search Here</label>  <input onKeyUp={this.search.bind(this)}/> 
//                 <React.Fragment>
//                     <ul style={{listStyleType:'none'}}>
//                         {this.state.suggestions.map(res => (
//                             <li key={res}>
//                                 {res}
//                             </li>
//                         ))}
//                     </ul>
//                 </React.Fragment>
//             </div>
//         );
//     }
// }
 
// export default App; 

// import React from 'react';
// import json from '../data/stockdata.json';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [] };
//     this.search = this.search.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase(); // Convert input to lowercase
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         // Check if the company name contains the input
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName); // Push the companyName to matches
//         }
//       }
//     }

//     this.setState({ suggestions: matches });
//   }

//   render() {
//     return (
//       <div>
//         <h2>ReactJS - Autocomplete</h2>
//         <label>Search Here</label> <input onKeyUp={this.search} />
//         <React.Fragment>
//           <ul style={{ listStyleType: 'none' }}>
//             {this.state.suggestions.map((res, index) => (
//               <li key={index}>
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//       </div>
//     );
//   }
// }

// export default App;
// import React from 'react';
// import json from '../data/stockdata.json';
// // import './App.css'; // Import your CSS file
// import '../styles/StockSearch.css'
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [] };
//     this.search = this.search.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches });
//   }

//   render() {
//     return (
//       <div className="app-container">
//         {/* <h2>ReactJS - Autocomplete</h2> */}
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li key={index}>{res}</li>
//             ))}
//           </ul>
//         </React.Fragment>
//       </div>
//     );
//   }
// }

// export default App;


// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null };
//     this.search = this.search.bind(this);
//     this.selectCompany = this.selectCompany.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null });
//   }

//   selectCompany(selectedCompanyName) {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;



// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null };
//     this.search = this.search.bind(this);
//     this.selectCompany = this.selectCompany.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null });
//   }

//   selectCompany(selectedCompanyName) {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// App.js
// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css';

// class StockSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null };
//     this.search = this.search.bind(this);
//     this.selectCompany = this.selectCompany.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null });
//   }

//   selectCompany(selectedCompanyName) {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default StockSearch;


// StockSearch.js
// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css';

// class StockSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null };
//     this.search = this.search.bind(this);
//     this.selectCompany = this.selectCompany.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null });
//   }

//   selectCompany(selectedCompanyName) {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });
//     this.props.onCompanySelect(selectedCompany); // Invoke the callback
//   }

//   render() {
//     return (
//       <div className="stock-search-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default StockSearch;

// StockSearch.js
import React from 'react';
import json from '../data/stockdata.json';
import '../styles/StockSearch.css';

class StockSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [], selectedCompany: null };
    this.search = this.search.bind(this);
  }

  search(event) {
    let input = event.target.value.toLowerCase();
    let matches = [];

    if (input.length > 1) {
      for (let i = 0; i < json.length; i++) {
        if (json[i].companyName.toLowerCase().includes(input)) {
          matches.push(json[i].companyName);
        }
      }
    }

    this.setState({ suggestions: matches, selectedCompany: null });
  }

  selectCompany(selectedCompanyName) {
    const selectedCompany = json.find(
      (company) => company.companyName === selectedCompanyName
    );
    this.setState({ selectedCompany, suggestions: [] });
    // Handle the selected company directly within this component
    console.log('Selected Company:', selectedCompany);
  }

  render() {
    return (
      <div className="app-container">
        <h2>ReactJS - Autocomplete</h2>
        <label htmlFor="searchInput">Search Here</label>
        <input
          id="searchInput"
          className="search-input"
          onKeyUp={this.search}
          placeholder="Type to search..."
        />
        <React.Fragment>
          <ul className="suggestions-list">
            {this.state.suggestions.map((res, index) => (
              <li
                key={index}
                onClick={() => this.selectCompany(res)}
                className="suggestion-item"
              >
                {res}
              </li>
            ))}
          </ul>
        </React.Fragment>
        {this.state.selectedCompany && (
          <div className="selected-company">
            <p>
              Selected Company: {this.state.selectedCompany.companyName}
            </p>
            <p>Symbol: {this.state.selectedCompany.Symbol}</p>
          </div>
        )}
      </div>
    );
  }
}

export default StockSearch;
// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css';

// class StockSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null };
//     this.search = this.search.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null });
//   }

//   async selectCompany(selectedCompanyName) {
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });

//     // Fetch stock price
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${selectedCompany.Symbol}`);
//       const data = await response.json();

//       if (data.error) {
//         console.error('Error fetching stock data:', data.error);
//       } else {
//         console.log('Stock Price:', data[0]?.lastPrice);
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//             {/* Display stock price here */}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default StockSearch;
// import React from 'react';
// import json from '../data/stockdata.json';
// import '../styles/StockSearch.css';

// class StockSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { suggestions: [], selectedCompany: null, stockPrice: null };
//     this.search = this.search.bind(this);
//   }

//   search(event) {
//     let input = event.target.value.toLowerCase();
//     let matches = [];

//     if (input.length > 1) {
//       for (let i = 0; i < json.length; i++) {
//         if (json[i].companyName.toLowerCase().includes(input)) {
//           matches.push(json[i].companyName);
//         }
//       }
//     }

//     this.setState({ suggestions: matches, selectedCompany: null, stockPrice: null });
//   }

//     async selectCompany(selectedCompanyName) {
      
//     const selectedCompany = json.find(
//       (company) => company.companyName === selectedCompanyName
//     );
//     this.setState({ selectedCompany, suggestions: [] });

//     // Fetch stock price
//     try {
//       const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${selectedCompany.Symbol}`);
//       const data = await response.json();

//       if (data.error) {
//         console.error('Error fetching stock data:', data.error);
//       } else {
//         const stockPrice = data[0]?.lastPrice;
//         this.setState({ stockPrice });
//       }
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   }

//   render() {
//     return (
//       <div className="app-container">
//         <h2>ReactJS - Autocomplete</h2>
//         <label htmlFor="searchInput">Search Here</label>
//         <input
//           id="searchInput"
//           className="search-input"
//           onKeyUp={this.search}
//           placeholder="Type to search..."
//         />
//         <React.Fragment>
//           <ul className="suggestions-list">
//             {this.state.suggestions.map((res, index) => (
//               <li
//                 key={index}
//                 onClick={() => this.selectCompany(res)}
//                 className="suggestion-item"
//               >
//                 {res}
//               </li>
//             ))}
//           </ul>
//         </React.Fragment>
//         {this.state.selectedCompany && (
//           <div className="selected-company">
//             <p>
//               Selected Company: {this.state.selectedCompany.companyName}
//             </p>
//             <p>Symbol: {this.state.selectedCompany.Symbol}</p>
//             {this.state.stockPrice !== null && (
//               <p>Stock Price: {this.state.stockPrice}</p>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default StockSearch;

// import React, { useState, useEffect } from 'react';
// import '../styles/StockSearch.css';
// import json from '../data/stockdata.json';

// const StockSearch = ({ onSelect }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [stockPrice, setStockPrice] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (selectedCompany) {
//         try {
//           const response = await fetch(`http://localhost:3001/get_stock_data?tickers=${selectedCompany.Symbol}`);
//           const data = await response.json();

//           if (data.error) {
//             console.error('Error fetching stock data:', data.error);
//           } else {
//             const price = data[0]?.lastPrice;
//             setStockPrice(price);
//           }
//         } catch (error) {
//           console.error('Error fetching stock data:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [selectedCompany]);

//   useEffect(() => {
//     const matches = json.filter(
//       (company) => company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSuggestions(matches);
//   }, [searchTerm]);

//   const handleSelect = (selectedCompanyName) => {
//     const selectedCompany = json.find((company) => company.companyName === selectedCompanyName);
//     setSelectedCompany(selectedCompany);
//     onSelect(selectedCompany); // Notify the parent component about the selection
//   };

//   return (
//     <div className="app-container">
//       <h2>ReactJS - Autocomplete</h2>
//       <label htmlFor="searchInput">Search Here</label>
//       <input
//         id="searchInput"
//         className="search-input"
//         onKeyUp={(e) => setSearchTerm(e.target.value)}
//         placeholder="Type to search..."
//       />
//       <ul className="suggestions-list">
//         {suggestions.map((res, index) => (
//           <li key={index} onClick={() => handleSelect(res)} className="suggestion-item">
//             {res}
//           </li>
//         ))}
//       </ul>
//       {selectedCompany && (
//         <div className="selected-company">
//           <p>Selected Company: {selectedCompany.companyName}</p>
//           <p>Symbol: {selectedCompany.Symbol}</p>
//           {stockPrice !== null && <p>Stock Price: {stockPrice}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockSearch;


