import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import styles from '../styles/components/SwitchButton.module.css'

export function SwitchButton() {
  const { setOrderBy, orderBy } = useContext(UserContext)
  const [ order, setOrder ] = useState(orderBy)

  function onAsc() {
    setOrderBy('asc')
    setOrder('asc')
  }

  function onDesc() {
    setOrderBy('desc')
    setOrder('desc')
  }

  return (
    <div className={styles.container}>
      <span onClick={onAsc}>Asc</span>
      <button className={`${styles[order]}`} />
      <span onClick={onDesc}>Desc</span>
    </div>
  )
}