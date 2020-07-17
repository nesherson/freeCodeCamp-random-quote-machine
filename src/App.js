import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import styles from './App.module.css';

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(quotes.length)
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      const { quotes } = await response.json();
      setQuotes(quotes);
    };
    fetchData();
  }, []);

  const quote = quotes.length && quotes[randomNumber];

  return (
    <div className={styles.main}>
      <QuoteBox
        quoteText={quote.quote}
        quoteAuthor={quote.author}
        click={() => {
          setRandomNumber(getRandomNumber(quotes.length));
        }}
      />
    </div>
  );
};

export default App;
