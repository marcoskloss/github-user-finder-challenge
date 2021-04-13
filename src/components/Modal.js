import styles from '../styles/components/Modal.module.css'

export function Modal({ name, description, stars, link, languages, setIsActive }) {
  const formattedLink = link.replace('https://', '')

  return (
    <div className={styles.overlay} onClick={() => setIsActive(prevState => !prevState)}>
      <div className={styles.container}>
        <h2>{name}</h2>
        {description && <p>{description}</p>}
        <span>{stars}</span>
        <span>{languages}</span>
        <img src="/assets/star.svg" alt="Stars"/>
        <a target="_blank" rel="noreferrer" href={link} className={styles.link}>{formattedLink}</a>
      </div>
    </div>
  )
}