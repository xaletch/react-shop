import React from 'react'

import styles from "./style.module.css";

const NotFoundBlock = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.h1}>Ничего не найдено :(</h1>
        <p className={styles.description}>К сожалению данная странеца не найдена</p>
    </div>
  )
}

export default NotFoundBlock;