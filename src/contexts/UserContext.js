import { createContext, useState } from 'react'

import { getGithubUserData } from '../services/getGithubUserData'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState('')
  const [ orderBy, setOrderBy ] = useState('desc')

  async function getUserData(name) {
    const data = await getGithubUserData(name)
    setUserData(data)
    setUsername(name)
    return data
  }

  return (
    <UserContext.Provider value={{
      getUserData,
      setUserData,
      userData,
      username,
      orderBy,
      setOrderBy,
    }}>
      {children}
    </UserContext.Provider>
  )
}