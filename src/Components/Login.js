import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-primaryColor-100 to-secondaryColor-100 min-h-screen flex flex-col justify-center">
      <div className="bg-white p-8 rounded-lg mx-auto" style={{ maxWidth: "400px" }}>
        <h1 className="text-3xl text-center font-bold text-primaryColor-100 mb-8">
          Login
        </h1>
        <form className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-textColor-100 font-semibold">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg py-2 px-3"
          />
          <label htmlFor="password" className="text-textColor-100 font-semibold">
            Passwort
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-lg py-2 px-3"
          />
          <button className="bg-primaryColor-100 text-white rounded-lg py-2 px-4 hover:bg-primaryColor-200 transition-colors duration-300 ease-in-out">
            Login
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-textColor-100">
            Noch nicht registriert?{" "}
            <Link to="/register">
              <button className="bg-secondaryColor-100 text-white rounded-lg py-2 px-4 hover:bg-secondaryColor-200 transition-colors duration-300 ease-in-out">
                Registrieren
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;