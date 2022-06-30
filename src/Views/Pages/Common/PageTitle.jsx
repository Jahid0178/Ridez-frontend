import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="container mx-auto px-3">
      <div className="py-20">
        <h1 className="text-6xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
