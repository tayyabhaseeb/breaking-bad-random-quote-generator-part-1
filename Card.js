import React, { useEffect, useState } from "react";

export default function Card() {
  // ! State Declaration
  const [quote, setQuote] = useState(
    "Free food always tastes good. Free drinks even better."
  );
  const [author, setAuthor] = useState("Hank Schrader");
  const [data, setData] = useState([]);

  //   ! Data fetching

  useEffect(() => {
    fetch(`https://api.breakingbadquotes.xyz/v1/quotes/100`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function handleClick() {
    let randomNum = Math.floor(Math.random() * data.length);
    let randomObj = data[randomNum];
    let updatedQuote = randomObj.quote;
    let updatedAuthor = randomObj.author;

    setQuote(updatedQuote);
    setAuthor(updatedAuthor);
  }

  //   * JSX
  return (
    <div className="card-cont">
      <p className="quote-text">{quote}</p>
      <p className="author"> ~ {author}</p>
      <button className="quoteBtn" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}
