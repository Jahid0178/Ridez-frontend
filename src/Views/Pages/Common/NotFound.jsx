import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div className="container mx-auto px-2">
        <div className="h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-9xl py-4 text-orange-500 font-bold">404</h1>
            <p className="py-4 text-5xl font-semibold">
              OOPS! THAT PAGE CAN'T BE FOUND.
            </p>
            <p className="py-4 text-xl">
              It looks like nothing was found at this location. You can either
              go back to the last page or go to homepage
            </p>
            <Link to="/" className="btn-secondary mt-4 inline-block">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
