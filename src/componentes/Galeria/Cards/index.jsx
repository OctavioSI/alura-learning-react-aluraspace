import React from 'react'
import favorito from '../favorito.png'
import abrirmodal from '../open.png'

export default function Cards({foto, styles}) {
  return (
    <>
    <li key={foto.id} className={styles.galeria__card}>
            <img src={foto.imagem} alt={foto.titulo} className={styles.galeria__imagem}/>
            <p className={styles.galeria__descricao}>{foto.titulo}</p>
            <div>
              <p>{foto.creditos}</p>
              <span>
                <img src={favorito} alt="Favoritar" />
                <img src={abrirmodal} alt="Abrir detalhes" />
              </span>
            </div>
          </li>
    </>
  )
}
