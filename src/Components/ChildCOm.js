import React from "react";

const ChildCOm = ({ firstName }) => {
  console.log("Child");
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default React.memo(ChildCOm);
