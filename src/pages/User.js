import { useContext, useEffect, useState } from 'react'

import styles from '../styles/pages/User.module.css'
import { Card } from '../components/Card'
import { UserContext } from '../contexts/UserContext'
import { sortBy } from '../utils/sortBy'

export default function User() {
  const [ orderedList, setOrderedList ] = useState([])
  const [ orderBy, setOrderBy ] = useState('desc')

  const { userData, username } = useContext(UserContext)
  const { avatar_url, bio, email, followers, following } = userData.userData
  const { repoList } = userData

  useEffect(() => {
    setOrderedList(sortBy(repoList, orderBy))
  }, [repoList, orderBy])

  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.user}>
          <div className={styles.userPhoto}>
            <img src={avatar_url} alt={username} />
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
          {orderedList.map((repo, index) => {
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
