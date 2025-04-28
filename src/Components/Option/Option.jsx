
// import React from "react";
// import "./Options.css"; // ✅ Import external CSS

// const Options = (props) => {
//   const handleLogin = () => props.actions.handleLogin();
//   const handleSignup = () => props.actions.handleSignup();
//   const handleForget = () => props.actions.handleForget();

//   return (
//     <div className="options-container">
//       <button className="option-button" onClick={handleLogin}>
//         Login
//       </button>
//       <button className="option-button" onClick={handleSignup}>
//         Sign Up
//       </button>
//       <button className="option-button" onClick={handleForget}>
//         Forgot Password
//       </button>
//     </div>
//   );
// };

// export default Options;


// import React, { useState } from "react";
// import "./Options.css"; // ✅

// const Options = (props) => {
//   const [showOptions, setShowOptions] = useState(false);

//   const handleMenuClick = () => {
//     setShowOptions((prev) => !prev); // toggle
//   };

//   const handleLogin = () => props.actions.handleLogin();
//   const handleSignup = () => props.actions.handleSignup();
//   const handleForget = () => props.actions.handleForget();

//   return (
//     <div className="options-container">
//       {!showOptions ? (
//         <button className="option-button" onClick={handleMenuClick}>
//           Menu
//         </button>
//       ) : (
//         <>
//           <button className="option-button" onClick={handleLogin}>
//             Login
//           </button>
//           <button className="option-button" onClick={handleSignup}>
//             Sign Up
//           </button>
//           <button className="option-button" onClick={handleForget}>
//             Forgot Password
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Options;


import React, { useState } from "react";
import "./Options.css"; // ✅

const Options = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMenuClick = () => {
    setShowOptions(true); // Open menu
  };

  const handleBackClick = () => {
    setShowOptions(false); // Close menu
  };

  const handleLogin = () => props.actions.handleLogin();
  const handleSignup = () => props.actions.handleSignup();
  const handleForget = () => props.actions.handleForget();

  return (
    <div className="options-container">
      {!showOptions ? (
        <button className="option-button" onClick={handleMenuClick}>
          Menu
        </button>
      ) : (
        <div className="options-links">
          <p onClick={handleLogin} className="option-link">1. Login</p>
          <p onClick={handleSignup} className="option-link">2. Sign Up</p>
          <p onClick={handleForget} className="option-link">3. Forgot Password</p>
          <p onClick={handleBackClick} className="option-link back-link">🔙 Back</p>
        </div>
      )}
    </div>
  );
};

export default Options;

