import React from 'react'
import styles from './Menu.module.scss'
import links from './links.json'
import Links from './Links'

export default function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
          {links.map((link) => {
            return (
              <Links key={link.id} link={link} styles={styles} />
            )
          })}
        </ul>
      </nav>
    </>
  )
}
