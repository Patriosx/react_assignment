import React, { useContext, useEffect } from "react";
import { Context } from "../context/state";
const Login = () => {
  const { createToken, token, askUserPermission } = useContext(Context);
  const { request_token } = token;
  useEffect(() => {
    // createToken();
  }, []);
  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <main className={"form-container"}>
      <h1>token</h1>
      <button
        onClick={() => {
          console.log(request_token);
          askUserPermission(request_token);
        }}
      >
        get token
      </button>
    </main>
  );
};

export default Login;
