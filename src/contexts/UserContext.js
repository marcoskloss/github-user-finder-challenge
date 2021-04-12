import { createContext, useState } from 'react'

import { getGithubUserData } from '../services/getGithubUserData'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState('')

  async function getUserData(name) {
    const data = await getGithubUserData(name)
    setUserData(data)
    setUsername(name)
  }

  return (
    <UserContext.Provider value={{
      getUserData,
      userData,
      username
    }}>
      {children}
    </UserContext.Provider>
  )
}