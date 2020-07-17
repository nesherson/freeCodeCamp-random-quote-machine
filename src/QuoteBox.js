import React from 'react';
import styles from './quoteBox.module.css';

const QuoteBox = (props) => {
  return (
    <div className={styles.quoteBox} id='quote-box'>
      <p id='text' className={styles.quoteText}>
        <span className={styles.quote}>"</span>
        {props.quoteText}
      </p>
      <div className={styles.quoteAuthor}>
        <span id='author'>- {props.quoteAuthor}</span>
      </div>
      <div>
        <button onClick={props.click}>New Quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;
