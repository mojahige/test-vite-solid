import type { Component } from 'solid-js'
import { Heading } from '@/Heading'
import styles from './App.module.css'
import image from '@assets/dummy.png'

export const App: Component = () => {
  return (
    <>
      <Heading textContent="Vite + Solid Test 👍" />
      <div className={styles.ImageContainer} data-testid="foo">
        <img src={`${image}`} className={styles.Image} alt="" />
      </div>
    </>
  )
}
