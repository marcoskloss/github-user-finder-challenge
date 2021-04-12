import styles from '../styles/components/Card.module.css'

export function Card({ repoName, stars }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{repoName}</div>
      <div className={styles.stars}>
        <span>{stars}</span>
        <img src="/assets/star.svg" alt="Star"/>
      </div>
    </div>
  );
}
