import { useContext } from 'react'

import styles from '../styles/pages/User.module.css'
import { Card } from '../components/Card'
import { UserContext } from '../contexts/UserContext'

export default function User() {
  const { userData, username } = useContext(UserContext)
  const { avatarUrl, bio, email, followers, following }  = userData.userData 
  const { repoList } = userData
  console.log(userData);

  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.user}>
          <div className={styles.userPhoto}>
            <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=640&w=426" alt="Username"/>
          </div>
          <h4>{username}</h4>
          <div className={styles.userAbout}>
            <p className={styles.bio}>{bio}</p>
            <p className={styles.follow}>
              <span>{followers} followers</span>
              <span>{following} following</span>
            </p>
            <p className={styles.email}>{email ? email : ''}</p>
          </div>
        </div>
      </aside>
      <section className={styles.reposContainer}>
        <h1>Username repositories</h1>
        <div className={styles.repoList}>
          {repoList.map((repo, index) => {
            const repoName = repo.fullName.split('/')[1]
            return (
              <Card 
                repoName={repoName}
                stars={repo.stars}
                key={index}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
