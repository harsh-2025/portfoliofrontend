// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/signup', {
//         username,
//         password,
//       });

//       toast.success(response.data.message);
//       // Handle successful signup, e.g., redirect to login page
//     } catch (error) {
//       toast.error(error.response?.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignup}>
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// working good for react with mongodb******************************
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post('https://stockbackend-uyx3.onrender.com/signup', {
        name,
        dob,
        email,
        username,
        password,
      });
      navigate('/login');
      toast.success(response.data.message);

      console.log('Signup successful:', response.data);
      // Handle successful signup, e.g., redirect to login page
    } catch (error) {
        toast.error(error.response?.data.error || 'An error occurred');

    //   if (error.response) {
    //     // setError(error.response.data.message || 'An error occurred');
    //   } else if (error.request) {
    //     setError('No response received from the server');
    //   } else {
    //     setError('Error setting up the request');
    //   }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;



// setting up for the firebase********************************
// Signup.js

// import React, { useState } from 'react';
// // import firebase from 'firebase/app';
// import 'firebase/auth';
// // import 'firebase/auth';
// import axios from "axios";

// import 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from '../firebase/config'; // Adjust the path accordingly
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from "react";
// import firebaseApp from '../firebase/config';
// // const firebase = initializeApp(firebaseConfig);


// const Signup = () => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState(null);

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
// //   const firebase = initializeApp(firebaseConfig);
// useEffect(() => {
//     if (!firebaseApp.apps.length) {
//       console.log("Firebase not initialized, initializing now...");
//       // Initialize Firebase
//     }
//   }, []);
//   const handleSignup = async () => {
//     try {
//       // Your signup logic here

//       // Assuming your backend is running on http://localhost:3001
//       const response = await axios.post("http://localhost:3001/signup", {
//         name,
//         dob,
//         email,
//         username,
//         password,
//       });

//       toast.success(response.data.message);
//       // Handle successful signup, e.g., redirect to login page
//     } catch (error) {
//       toast.error(error.response?.data.error || "An error occurred");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Date of Birth:
//           <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignup}>
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
