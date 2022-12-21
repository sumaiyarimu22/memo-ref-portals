import React from "react";

const SupermanFan = ({ superHero }) => {
  const superHeroRef = React.createRef();
  const changeColorHandler = () => {
    superHeroRef.current.textContent = superHero;
  };
  return (
    <div>
      <h1 ref={superHeroRef}>Superman</h1>
      <button onClick={changeColorHandler}>Change Color</button>
    </div>
  );
};

export default SupermanFan;
