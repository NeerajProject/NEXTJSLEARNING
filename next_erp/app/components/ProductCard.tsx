'use client';
import React from 'react'
import styles from './ProductCard.module.css'

export const ProductCard = () => {
  return (
    <div className={styles.card}>ProductCard
            <button onClick={() => alert('Button clicked!')}>Click</button>

    </div>
  )
}
