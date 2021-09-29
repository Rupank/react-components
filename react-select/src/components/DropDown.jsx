import React, { useState } from "react";

const options = ["1", "2", "3", "4", "5"];
function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <p onClick={() => setIsActive((prev) => !prev)}>Choose Label</p>
      {isActive &&
        options.map((option) => (
          <div
            onClick={(e) => {
              if (selected.filter((item) => item == option).length === 0) {
                setSelected([...selected, option]);
              }
            }}
          >
            {option}
          </div>
        ))}
    </div>
  );
}

export default DropDown;
