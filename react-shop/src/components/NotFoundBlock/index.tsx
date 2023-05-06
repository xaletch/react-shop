import React from 'react'

import styles from "./style.module.css";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.h1}>Ничего не найдено :(</h1>
        <p className={styles.description}>К сожалению данная странеца не найдена. попробуйте обновить страницу</p>
    </div>
  )
}