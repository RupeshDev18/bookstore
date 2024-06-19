import Link from 'next/link';

const BookDetail = ({ book }) => (
  <div>
    <h1>{book.title}</h1>
    <h2>{book.author}</h2>
    <img src={book.coverImage} alt={book.title} />
    <ul>
      {book.tableOfContents.map((chapter, index) => (
        <li key={index}>
          <Link href={`/books/${book._id}/chapters/${index}`}>
            <a>{chapter.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BookDetail;
