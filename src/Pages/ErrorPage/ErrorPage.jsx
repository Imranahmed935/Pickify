import React from "react";
import error from "../../assets/error/Animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border p-10 mt-10">
        <h1 className="text-4xl font-bold ml-10">Welcome to Pickify</h1>
        <div className="w-96 h-80 ml-10">
          <Lottie animationData={error}></Lottie>
        </div>
        <h1 className="text-red-600 font-bold">
          We're sorry, but the page you were looking for doesn't exist.
        </h1>
        <Link to={"/"}>
          {" "}
          <button className="btn btn-outline lg:ml-32 mt-4">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
