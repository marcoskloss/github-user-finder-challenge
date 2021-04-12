import styles from '../styles/components/Card.module.css'

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Repo Name</div>
      <div className={styles.stars}>Stars 3</div>
    </div>
  );
}
