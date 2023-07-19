// src/routes/auth/Login.jsx
import { useContext } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { currentUser, login, authError } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);
    await login(credentials);
    window.location.reload(true);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="selection:bg-blue-200 flex flex-col gap-2"
    >
      <h1 className="text-white">Login</h1>
      {authError && <div className="text-red-500">{authError}</div>}
      <fieldset className="flex flex-col">
        <label htmlFor="title">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="company">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>{" "}
      <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer"
        type="submit"
      ></input>
    </Form>
  );
}

export default Login;
