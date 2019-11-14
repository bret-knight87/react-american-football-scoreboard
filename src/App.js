//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
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
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Cards</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Cubs</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
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
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 1)}>
            Run Scored
          </button>
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(0)}>
            Reset
          </button>
          {/* <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button> */}
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 1)}>
            Run Scored
          </button>
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(0)}>
            Reset
          </button>
          {/* <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button> */}
        </div>
      </section>
    </div>
  );
}

export default App;
