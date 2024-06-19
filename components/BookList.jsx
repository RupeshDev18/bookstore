import Link from 'next/link';

const BookList = ({ books }) => (
  <div>
    {books?.map(book => (
      <div key={book._id} className="book-card">
        <Link href={`/books/${book._id}`}>
          <a>
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default BookList;
