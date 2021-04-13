import { useContext, useEffect, useState } from 'react'

import styles from '../styles/pages/User.module.css'

import { UserContext } from '../contexts/UserContext'
import { sortBy } from '../utils/sortBy'
import { Card } from '../components/Card'
import { SwitchButton } from '../components/SwitchButton'

export default function User() {
  const { userData, username } = useContext(UserContext)
  const { avatar_url, bio, email, followers, following } = userData.userData
  const { repoList } = userData

  const [ orderedList, setOrderedList ] = useState(() => sortBy(repoList, 'desc'))
  const { orderBy } = useContext(UserContext)


  useEffect(() => {
    setOrderedList(prevState => sortBy(prevState, orderBy))
  }, [repoList, orderBy, orderedList])

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
        <h1>{username} repositories</h1>
        <SwitchButton />
        <div className={styles.repoList}>
          {orderedList.map((repo, index) => {
            const name = repo.fullName.split('/')[1]
            return (
              <Card
                repoName={name}
                stars={repo.stars}
                description={repo.description}
                laguages={repo.languages}
                link={repo.link}
                key={index}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
