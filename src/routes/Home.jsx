import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [books, setBooks] = useState ([])
    const navigate = useNavigate ()

    useEffect(() => {
        fetch('https://seussology.info/api/books')
  .then(response => response.json())
  .then(json =>  {
    setBooks(json); 
  })
},  []);
  console.log(books)

  const onImgClickHandler = (bookId) => {

    navigate(`/description/${bookId}`);
};

return (
 <>
    <h1>Seuss Treasury</h1>
            <div className='book-container'>
                {books.map((book) => (
                    <div key={book.id} className='each-book'> 
                      {book.image && <img src={book.image} className='img-book'
                      onClick={() => onImgClickHandler(book.id)} />}
                      <h2 className="book-title">  {book.title} </h2>
                    </div>
                ))}
            </div>
</>
);
}