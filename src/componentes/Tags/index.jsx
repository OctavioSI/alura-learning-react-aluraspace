import React from 'react';
import styles from './Tags.module.scss';

export default function Tags({tags, filtraFotos, fotos, setItens}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por Tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => { return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li> })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}
