import React from "react";
import { useParams } from "react-router-dom";

const Homepage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>This is the homepage</h1>
      {name}
    </div>
  );
};

export default Homepage;
