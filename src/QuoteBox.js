import React from 'react';
import styles from './quoteBox.module.css';

const QuoteBox = (props) => {
  return (
    <div className={styles.quoteBox} id='quote-box'>
      <h1>Quote</h1>
      <p id='text'>{props.quoteText}</p>
      <span id='author'>{props.quoteAuthor}</span>
      <button>Next</button>
    </div>
  );
};

export default QuoteBox;
