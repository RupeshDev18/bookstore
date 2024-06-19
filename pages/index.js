import axios from 'axios';
import BookList from '../components/BookList';

const Home = ({ books }) => (
  <div>
    <h1>Bookstore</h1>
    <BookList books={books} />
  </div>
);

export async function getServerSideProps() {
  try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`);
  return {
    props: {
      books: res.data
    }
  };
  }catch{
    return {
      props: {
        books: []
      }
    };
  }
}

export default Home;
