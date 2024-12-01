import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Login / Criar</Link>
      </nav>
    </div>
  )
}
