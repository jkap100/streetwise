import React from "react";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">Close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
