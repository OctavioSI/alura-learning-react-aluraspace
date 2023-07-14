import React from 'react'
import styles from './Populares.module.scss'
import populares from './fotos-populares.json'
import CardPopular from './CardPopular'
import Botao from 'componentes/Botao'

export default function Populares() {
  const textobotao = "Ver mais Fotos"

  return (
    <>
      <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
          {populares.map((popular) => {
            return (
              <CardPopular key={popular.id} styles={styles} popular={popular} />               
            )
          })}
        </ul>
        <Botao>{textobotao}</Botao>
      </aside>
    </>
  )
}
