import "./globals.sass";
import styles from "./home.module.sass";

export default function Home() {
  return (
    <div className={styles.section}>
      <h2
        className={`${styles.section} ${styles["section-title"]} ${styles.contrast}`}
      >
        Home
      </h2>
      <div
        className={`${styles["section-content"]} ${styles["work-in-progress"]}`}
      >
        WORK IN PROGRESS<span className={styles.blink}>_</span>
      </div>
    </div>
  );
}
