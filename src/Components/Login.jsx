import React from "react";

const Login = (props) => {
  const intialAction=() =>{
    console.log("Initial Action");
    props.actions.intialAction();
  }
  return (
    <div>
      <button onClick={()=> intialAction()}>Login</button>
    </div>
  );
};

export default Login;
