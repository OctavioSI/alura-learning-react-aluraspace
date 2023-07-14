import React from 'react'
import { ReactComponent as Fb } from "assets/facebook.svg"
import { ReactComponent as Tt } from "assets/twitter.svg"
import { ReactComponent as Ig } from "assets/instagram.svg"
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <>
      <footer className={styles.rodape}>
        <section className={styles.rodape__social}>
          <a href="/"><Fb /></a>
          <a href="/"><Tt /></a>
          <a href="/"><Ig /></a>
        </section>
        <section>
          Desenvolvido por Alura.
        </section>
      </footer>
    </>
  )
}
