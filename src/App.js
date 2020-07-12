import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({
    quote: 'To live is to suffer.',
    author: 'N.N.',
  });
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

  const randomNumber = Math.floor(Math.random() * quotes.length);

  return (
    <div className='main'>
      {randomQuote !== undefined ? (
        <QuoteBox
          quoteText={randomQuote.quote}
          quoteAuthor={randomQuote.author}
          click={() => {
            setRandomQuote(quotes[randomNumber]);
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
