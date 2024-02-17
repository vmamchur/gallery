import "./App.module.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.section}>
        <div className={styles.primary}>primary</div>
        <div className={styles.primary80}>primary80</div>
        <div className={styles.primary40}>primary40</div>
        <div className={styles.primary10}>primary10</div>
      </div>

      <div className={styles.section}>
        <div className={styles.blackText}>blackText</div>
        <div className={styles.grayLight}>grayLight</div>
        <div className={styles.grayMedium}>grayMedium</div>
        <div className={styles.grayDark}>grayDark</div>
      </div>
    </div>
  );
}

export default App;
