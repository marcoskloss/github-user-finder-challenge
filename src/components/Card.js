import { useState } from 'react';
import styles from '../styles/components/Card.module.css'
import { Modal } from './Modal';

export function Card({ repoName, stars, description, link, languages }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className={styles.container} onClick={() => setIsActive(true)}>
        <div className={styles.name}>{repoName}</div>
        <div className={styles.stars}>
          <span>{stars}</span>
          <img src="/assets/star.svg" alt="Star"/>
        </div>
      </div>
      {isActive && (<Modal 
        name={repoName}
        stars={stars}
        description={description}
        link={link}
        languages={languages}
        setIsActive={setIsActive}
      />)}
    </>
  );
}
