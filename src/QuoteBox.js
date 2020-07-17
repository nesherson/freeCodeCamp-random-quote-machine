import React from 'react';
import styles from './quoteBox.module.css';
import TwitterLogo from './TwitterLogo';
import TumblrLogo from './TumblrLogo';

const QuoteBox = ({ randomColor, quoteText, quoteAuthor, click }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.quoteBox}
        style={{
          color: randomColor,
        }}
        id='quote-box'
      >
        <p id='text' className={styles.quoteText} style={{ opacity: '1' }}>
          <span className={styles.quote}>"</span>
          {quoteText}
        </p>
        <div className={styles.quoteAuthor}>
          <span id='author'>- {quoteAuthor}</span>
        </div>
        <div className={styles.buttons}>
          <div>
            <a
              href=''
              className={styles.link}
              style={{ backgroundColor: randomColor }}
            >
              <TwitterLogo />
            </a>
            <a
              href=''
              className={styles.link}
              style={{ backgroundColor: randomColor }}
            >
              <TumblrLogo />
            </a>
          </div>
          <button
            className={styles.btn}
            onClick={click}
            style={{ backgroundColor: randomColor }}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <span>
          by
          <a target='_blank' href='https://github.com/nesherson'>
            nesherson
          </a>
        </span>
      </div>
    </div>
  );
};

export default QuoteBox;
