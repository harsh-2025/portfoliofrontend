import React, { useState, useEffect } from 'react';
import companies from "nse-companies";

const PortfolioDetails = () => {
    return (
        {"symbols": [], "length": 6}
    );
}
export default PortfolioDetails;

// const PortfolioDetails = () => {
//   const [companiesList, setCompaniesList] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCompaniesList();
//   }, []);

//   const fetchCompaniesList = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/get_all_companies');
//       const data = await response.json();

//       if (data.error) {
//         setError(data.error);
//       } else {
//         setCompaniesList(data);
//         setError(null);
//       }
//     } catch (error) {
//       console.error('Error fetching companies list:', error);
//       setError('Error fetching companies list. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Stock Data App</h1>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {companiesList.length > 0 && (
//         <div>
//           <h2>List of Companies:</h2>
//           <ul>
//             {companiesList.map((company) => (
//               <li key={company.symbol}>{company.symbol} - {company.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PortfolioDetails;
