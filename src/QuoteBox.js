import React from 'react';
import styles from './quoteBox.module.css';

const QuoteBox = () => {
  return (
    <div className={styles.quoteBox} id='quote-box'>
      <h1>Quote</h1>
      <p>To live is to suffer</p>
    </div>
  );
};

export default QuoteBox;
