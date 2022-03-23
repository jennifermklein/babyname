import React from "react";

const SettingsBox = (props) => {
  // const slider = document.getElementById('year')
  // console.log(slider);
  return (
    <div id="settings-box">
      <h2>Settings</h2>
      <form>
        <input
          value={props.year}
          min="1890"
          max="2020"
          id="year"
          name="year"
          type="range"
          onChange={props.handleYearChange}
        ></input>
        <span>
          Show me the top
          <input
            value={props.pop}
            min="1"
            max="99"
            type="number"
            onChange={props.handlePopChange}
          ></input>
          % of names that were popular in {props.year} for
          <select name="gender" onChange={props.handleSelect}>
            <option defaultValue="anyone">anyone</option>
            <option value="girls">girls</option>
            <option value="boys">boys</option>
          </select>
        </span>
        <input
          id="submit-settings"
          type="submit"
          onClick={props.submitHandler}
        ></input>
      </form>
    </div>
  );
};

export default SettingsBox;
