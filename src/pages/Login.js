import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/state";
const Login = () => {
  const { createToken, token, askUserPermission } = useContext(Context);
  const { request_token } = token;
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  useEffect(() => {
    console.log(token);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createToken();
  };

  const handleInputChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };
  return (
    <main className={"form-container"}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Login;
