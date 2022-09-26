import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const Rate = ({ searchRate, setSearchRate }) => {
  
  const tabRate = [];

  const HandleStars = (rate) => {
    setSearchRate(rate);
  };

  for (let i = 1; i <= 5; i++) {
    if (i <= searchRate) {
      tabRate.push(
        <BsFillStarFill
          style={{ color: "#FFD700" }}
          onClick={() => HandleStars(i)}
        />
      );
    } else {
      tabRate.push(
        <BsStar style={{ color: "#808080" }} onClick={() => HandleStars(i)} />
      );
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      {tabRate.map((e, k) => (
        <div style={{ margin: "5px" }} key={k}>
          {e}
        </div>
      ))}
    </div>
  );
};

export default Rate;
