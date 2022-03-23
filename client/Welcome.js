import React from "react";

const Welcome = (props) => {
  return (
    <div id="welcome-box" onClick={props.clickHandler}>
      <div id="main-logo">
        <h1 id="logo-top">EENIE</h1>
        <h1 id="logo-bottom">MEENIE</h1>
      </div>
      <div id="under-logo">
        <h1>Baby Name Game</h1>
      </div>
    </div>
  );
};

export default Welcome;
