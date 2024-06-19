import axios from 'axios';
import BookDetail from '../../components/BookDetail';

const BookPage = ({ book }) => (
  <div>
    <BookDetail book={book} />
  </div>
);

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${params.id}`);
  return {
    props: {
      book: res.data
    }
  };
}

export default BookPage;
