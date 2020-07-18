import React from 'react';
import ShareQuoteBtn from './ShareQuoteBtn';
import styles from './quoteBox.module.css';
import { ReactComponent as TwitterIcon } from './icons/logo-twitter.svg';
import { ReactComponent as TumblrIcon } from './icons/logo-tumblr.svg';

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
        <p id='text' className={styles.quoteText}>
          <span className={styles.quote}>"</span>
          {quoteText}
        </p>
        <div className={styles.quoteAuthor}>
          <span id='author'>- {quoteAuthor}</span>
        </div>
        <div className={styles.buttons}>
          <div>
            <ShareQuoteBtn
              title='Tweet this quote!'
              link={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteText}"%20 ${quoteAuthor}`}
              icon={<TwitterIcon />}
              color={randomColor}
              style={styles.link}
            />
            <ShareQuoteBtn
              title='Post this quote on Tumblr!'
              link='https://www.tumblr.com'
              icon={<TumblrIcon />}
              color={randomColor}
              style={styles.link}
            />
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
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/nesherson'
          >
            nesherson
          </a>
        </span>
      </div>
    </div>
  );
};

export default QuoteBox;
