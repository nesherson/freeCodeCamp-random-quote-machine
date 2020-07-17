import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import styles from './App.module.css';

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(quotes.length)
  );
  const [randomColor, setRandomColor] = useState(getRandomColor());

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
    <div
      className={styles.main}
      style={{
        backgroundColor: randomColor,
        color: randomColor,
      }}
    >
      <QuoteBox
        randomColor={randomColor}
        quoteText={quote.quote}
        quoteAuthor={quote.author}
        click={() => {
          setRandomNumber(getRandomNumber(quotes.length));
          setRandomColor(getRandomColor());
        }}
      />
    </div>
  );
};

export default App;
