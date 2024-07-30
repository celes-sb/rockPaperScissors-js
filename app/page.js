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
          <h2>
            <strong>Rules to the Game</strong>
          </h2>
        </div>
        <br />
        <div>- You will be playing against the computer.</div>
        <div>- The first one to three points wins.</div>
        <div>
          - Rock beats Scissors, Scissors beats Paper & Paper beats Rock
        </div>
        <div>
          - If the player and computer choose the same option (e.g: Paper and
          Paper), then no one gets the point.
        </div>
      </div>

      <RockPaperScissors />

      <footer className={styles.footer}>
        <a
          href="https://www.github.com/celes-sb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Made by Celeste S. Bareiro
        </a>
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