import connectToDatabase from '../../../lib/mongodb';
import Book from '../../../models/Book';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const books = await Book.find();
        res.status(200).json(books);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    // You can add more cases for POST, PUT, DELETE, etc.
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
