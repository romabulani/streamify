import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 my-6 md:w-[700] w-screen">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg"> Couldn't find page you are looking for, Go back to <Link to="/" className="font-bold text-purple-500">Home Page</Link></p>
    </div>
  );
};

export default NotFound;
