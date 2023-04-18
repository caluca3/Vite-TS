//mport React from "react";
//
//xport const Login = () => {
// console.log("Hola mudno");
// return (
//   <>
//     <div
//       id="g_id_onload"
//       data-client_id="113333846904-qolb1o8l304kk6v2vo1fmgg978v31umg.apps.googleusercontent.com"
//       data-context="signin"
//       data-login_uri="http://localhost:"
//       data-itp_support="true"
//     ></div>
//   </>
// );
//;
import React, { Component } from "react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-3 flex bg-slate-300 rounded-md flex-col">
        <h3>Sign Up</h3>
        <form className="flex text-center flex-col justify-center">
          <div className="p-3 grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-col">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className=" ">
            <button type="submit" className=" bg-blue-700 rounded px-4 py-2 ">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

//crear componente para renderizar los posts
//Iniciar una sesion en el servidor
