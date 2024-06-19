import connectToDatabase from '../../../lib/mongodb';
import Book from '../../../models/Book';

export default async function handler(req, res) {
  await connectToDatabase();

  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const book = await Book.findById(id);
        if (!book) {
          return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    // You can add more cases for PUT, DELETE, etc.
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
