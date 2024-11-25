
import {useState, useEffect} from 'react'

export const Quotes = () => {
    const [quotes, setQuotes] = useState ([]);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
  .then(response => response.json())
  .then(json =>  {
    setQuotes(json); 
  })
},  []);
  console.log(Quotes)


return (
 <>
    <h1>Quotes</h1>
            <div className='quotes-container'>
                {quotes.map((quote) => (
                    <div className="quote" key={quote.id}> 
                      <h2>  {quote.text} </h2>
                      <p>- Dr. Seuss in "{quote.book.title}"</p>
                     </div>
                ))}
            </div>
</>
);
}