import styles from '../styles/pages/User.module.css'

import { Card } from '../components/Card'

export default function User() {
  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.user}>
          <div className={styles.userPhoto}>
            <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=640&w=426" alt="Username"/>
          </div>
          <h4>Username</h4>
          <div className={styles.userAbout}>
            <p className={styles.bio}>Fascinado por tecnologia e ávido por novos desafios</p>
            <p className={styles.follow}>
              <span>5 followers</span>
              <span>12 following</span>
            </p>
            <p className={styles.email}>Email</p>
          </div>
        </div>
      </aside>
      <section className={styles.reposContainer}>
        <h1>Username repositories</h1>
        <div className={styles.repoList}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  )
}
