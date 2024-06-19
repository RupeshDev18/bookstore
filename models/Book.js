import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema({
  title: String,
  images: [String]
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImage: String,
  tableOfContents: [ChapterSchema]
});

const Book = mongoose.models.Book || mongoose.model('Book', BookSchema);

export default Book;
