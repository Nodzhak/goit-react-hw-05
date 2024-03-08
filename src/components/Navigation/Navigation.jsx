import {Link, NavLink} from 'react-router-dom'
import styles from './Navigation.module.css'
import clsx from 'clsx'

const makeLinkClass = (isActive) =>{
  return clsx(styles.link, isActive && styles.isActive)
}

export default function Navigation(){
  return(
    <nav className={styles.nav}>
      <NavLink to="/" className={makeLinkClass}>Home</NavLink>
      <NavLink to="/movies" className={makeLinkClass}>Movies</NavLink>
    </nav>
  )
}
