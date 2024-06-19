import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    // Use existing database connection
    return;
  }
  // Use new database connection
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectToDatabase;
