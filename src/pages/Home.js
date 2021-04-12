import { useState, useContext } from 'react';
import {  useHistory } from 'react-router'

import styles from '../styles/pages/Home.module.css'
import { UserContext } from '../contexts/UserContext'

export default function Home() {
  const [username, setUsername] = useState('')
  const { getUserData } = useContext(UserContext)
  const history = useHistory()

  function handleChange(e) {
    const input = e.target.value
    setUsername(input)
  }

  async function handleSubmit() {
    try {
      await getUserData(username)
      history.push(`/${username}`)
    } catch(e) {
      console.log('ERROR', e)
      //mostrar mensagem de erro
    }
  }

  return (
    <div className={styles.container}>
      <main>
        <h1>
          Github <br />
          <span>User</span> <br />
          Finder
        </h1>
        <section>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder='Search for a user'
              onChange={handleChange}  
            />
          <button onClick={handleSubmit}>
            <img style={{width: '35%'}} src="/assets/search-icon.svg" alt="Search"/>
          </button>
          </div>
        </section>
      </main>
    </div>
  );
}
