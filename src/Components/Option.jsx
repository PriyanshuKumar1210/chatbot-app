
// import React from "react";

// const Options = (props) => {
//   const handleLogin = () => {
//     props.actions.handleLogin();
//   };

//   const handleSignup = () => {
//     props.actions.handleSignup();
//   };

//   const handleForget = () => {
//     props.actions.handleForget();
//   };

//   return (
//     <div>
//       <button onClick={() => handleLogin()} style={styles.button}>
//         Logins
//       </button>
//       <button onClick={handleSignup} style={styles.button}>
//         Signup
//       </button>
//       <button onClick={handleForget} style={styles.button}>
//         Forget Password
//       </button>
//     </div>
//   );
// };

// const styles = {
//   button: {
//     padding: "8px 16px",
//     margin: "5px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     bottom:"10px"
//   },
// };

// export default Options;


import React from "react";
import "./Options.css"; // ✅ Import external CSS

const Options = (props) => {
  const handleLogin = () => props.actions.handleLogin();
  const handleSignup = () => props.actions.handleSignup();
  const handleForget = () => props.actions.handleForget();

  return (
    <div className="options-container">
      <button className="option-button" onClick={handleLogin}>
        Login
      </button>
      <button className="option-button" onClick={handleSignup}>
        Sign Up
      </button>
      <button className="option-button" onClick={handleForget}>
        Forgot Password
      </button>
    </div>
  );
};

export default Options;
