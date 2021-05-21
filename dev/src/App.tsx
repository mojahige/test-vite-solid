import type { Component } from "solid-js";
import styles from "./App.module.css";
import image from "@assets/dummy.png";

console.log(styles)

const App: Component = () => {
  return (
    <>
      <div className={styles.ImageContainer}>
        <img src={`${image}`} className={styles.Image} alt="" />
      </div>
    </>
  )
};

export default App;