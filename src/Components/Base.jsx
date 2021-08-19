import React, { useState, useEffect } from "react";

const Base = () => {
  const [name, setName] = useState("Andres");

  useEffect(() => {
    setTimeout(() => {
      setName("Andrés Vásquez");
    }, 2000);
  });

  return (
    <div>
      <h1>This is the main page</h1>
      {name}
    </div>
  );
};

export default Base;
