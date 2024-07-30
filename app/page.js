import styles from "./page.module.css";
import RockPaperScissors from "./rockPaperScissors.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Let's play
          <code className={styles.code}> Rock, Paper, Scissors!</code>
        </p>
      </div>

      <div className={styles.description}>
        <div>
          <strong>Rules to the Game</strong>
        </div>
        <div>You will be playing against the computer.</div>
        <div>The first one to three points wins.</div>
        <div>Rock beats Scissors, Scissors beats Paper & Paper beats Rock</div>
        <div>
          If the player and computer choose the same option (e.g: Paper and
          Paper), then no one gets the point.
        </div>
      </div>
      
      <RockPaperScissors />

      <footer>
        <p>
          Made by
          <code className={styles.code}> Celeste S. Bareiro</code>
        </p>
      </footer>
    </main>
  );
}

/*

<div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            Rock <span>-&gt;</span>
          </h2>
        </div>

        <div className={styles.card}>
          <h2>
            Paper <span>-&gt;</span>
          </h2>
        </div>

        <div className={styles.card}>
          <h2>
            Scissors <span>-&gt;</span>
          </h2>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h4>Player Score:</h4>
        </div>

        <div className={styles.card}>
          <h4>Computer Score:</h4>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h4>resultado</h4>
        </div>
      </div>

*/