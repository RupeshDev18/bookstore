import axios from 'axios';
import ChapterDetail from '../../../../components/ChapterDetail';

const ChapterPage = ({ chapter }) => (
  <div>
    <ChapterDetail chapter={chapter} />
  </div>
);

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${params.id}`);
  const book = res.data;
  const chapter = book.tableOfContents[params.chapterIndex];
  return {
    props: {
      chapter
    }
  };
}

export default ChapterPage;
