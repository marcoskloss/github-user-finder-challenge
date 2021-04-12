import { createContext, useState } from 'react'

import { getGithubUserData } from '../services/getGithubUserData'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})

  async function getUserData(username) {
    const data = await getGithubUserData(username)
    setUserData(data)
  }

  return (
    <UserContext.Provider value={{
      getUserData,
      userData
    }}>
      {children}
    </UserContext.Provider>
  )
}