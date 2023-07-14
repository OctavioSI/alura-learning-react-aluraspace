import React from 'react'
import Tags from '../Tags'
import Cards from './Cards'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import { useState } from 'react'

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtraFotos = (tag) => {
    const fotosFiltradas = fotos.filter((foto) => foto.tag === tag)
    setItens(fotosFiltradas)
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} fotos={fotos}/>
      <ul className={styles.galeria__cards}>
        {itens.map((foto) => {
          return (
            <Cards key={foto.id} styles={styles} foto={foto} />
          )
        })}
      </ul>
    </section>
  )
}
