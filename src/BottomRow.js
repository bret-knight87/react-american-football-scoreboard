import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [outs, setOuts] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [innings, setInnings] = useState(0);

  const outCounter = () => {
    if (outs === 3) {
      setOuts(0);
    } else {
      setOuts(outs + 1);
    }
  };

  const strikeCounter = () => {
    if (strikes === 3) {
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const ballsCounter = () => {
    if (balls === 4) {
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };
  return (
    <div class="bottomRow">
      <div class="down">
        <h3 class="down__title">Inning</h3>
        <div class="down__value">{innings}</div>
        <button
          className="homeButtons__touchdown"
          onClick={() => setInnings(innings + 1)}>
          Inning
        </button>
      </div>

      <div class="toGo">
        <h3 class="toGo__title">Outs</h3>
        <div class="toGo__value">{outs}</div>
        <button className="homeButtons__touchdown" onClick={outCounter}>
          Outs
        </button>
      </div>
      <div class="ballOn">
        <h3 class="ballOn__title">Balls</h3>
        <div class="ballOn__value">{balls}</div>
        <button className="homeButtons__touchdown" onClick={ballsCounter}>
          Ball
        </button>
      </div>
      <div class="quarter">
        <h3 class="quarter__title">Strikes</h3>
        <div class="quarter__value">{strikes}</div>
        <button className="homeButtons__touchdown" onClick={strikeCounter}>
          Strike
        </button>
      </div>
    </div>
  );
};

export default BottomRow;
