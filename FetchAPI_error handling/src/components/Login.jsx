import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  var { uName } = useParams();
  var navigate = useNavigate(); //useNavigate hook can be used while submit-required vlid inputs should match credentials

  var Navigate = () => {
    navigate("/");
  };

  return (
    <div>
      Login-{uName}
      <button onClick={Navigate}>Return to Home</button>
    </div>
  );
};

export default Login;
