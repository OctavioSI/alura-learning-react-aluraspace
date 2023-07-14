import React from 'react'

export default function Links({link, styles}) {
  return (
    <li className={styles.menu__item}>
      <img src={link.icone} alt={link.titulo} />
      <a href={link.href}>{link.titulo}</a>
    </li>
  )
}
