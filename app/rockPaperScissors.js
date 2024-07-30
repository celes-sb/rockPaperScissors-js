"use client";

import React, { useState, useRef } from "react";
import styles from "./page.module.css";

function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundResultsMsg, setRoundResultsMsg] = useState("");
  const [winnerMsg, setWinnerMsg] = useState("");
  const resetGameBtnRef = useRef(null);
  const optionsContainerRef = useRef(null);

  const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const hasPlayerWonTheRound = (player, computer) => {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  };

  const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
      setPlayerScore(playerScore + 1);
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      setComputerScore(computerScore + 1);
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  };

  const showResults = (userOption) => {
    const result = getRoundResults(userOption);
    setRoundResultsMsg(result);

    if (playerScore === 3 || computerScore === 3) {
      setWinnerMsg(
        `${playerScore === 3 ? "Player" : "Computer"} has won the game!`
      );

      resetGameBtnRef.current.style.display = "block";
      optionsContainerRef.current.style.display = "none";
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerScoreSpanElement(playerScore);
    setComputerScoreSpanElement(computerScore);
    resetGameBtnRef.current.style.display = "none";
    optionsContainerRef.current.style.display = "block";
    setWinnerMsg("");
    setRoundResultsMsg("");
  };

  return (
    <>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h4>Player Score:</h4>
          <strong>
            <span className="score">{playerScore}</span>
          </strong>
        </div>

        <div className={styles.card}>
          <h4>Computer Score:</h4>
          <strong>
            <span className="score">{computerScore}</span>
          </strong>
        </div>
      </div>

      <div className="options-container" ref={optionsContainerRef}>
        <div className="btn-container">
          <button className={styles.button} onClick={() => showResults("Rock")}>
            Rock
          </button>
          <button
            className={styles.button}
            onClick={() => showResults("Paper")}
          >
            Paper
          </button>
          <button
            className={styles.button}
            onClick={() => showResults("Scissors")}
          >
            Scissors
          </button>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h4>Resultado</h4>
        </div>
      </div>

      <div className="results-container">
        <p>{roundResultsMsg}</p>
        <p>{winnerMsg}</p>
        <button
          className={styles.button}
          ref={resetGameBtnRef}
          onClick={resetGame}
        >
          Play again?
        </button>
      </div>
    </>
  );
}

export default RockPaperScissors;