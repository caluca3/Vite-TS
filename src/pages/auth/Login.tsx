import React, { Component } from "react";

export const Login = () => {
  const googleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const url: string = "http://localhost:3001/api/auth/google";
    await fetch(url)
      .then((res: Response) => console.log(res))
      .catch((err: Error) => console.log(err));
    console.log(url);
  };

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
          <div className=" ">
            <button
              type="submit"
              className=" bg-blue-700 rounded px-4 py-2 mt-3"
              onClick={googleSubmit}
            >
              Sign Up From GOOGLE
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

//TODO: crear componente para renderizar los posts
//TODO: Iniciar una sesion en el servidor
//TODO: CRUD post
//TODO: Iniciar sesion
