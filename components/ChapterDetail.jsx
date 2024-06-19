const ChapterDetail = ({ chapter }) => (
  <div>
    <h1>{chapter.title}</h1>
    <div>
      {chapter.images.map((image, index) => (
        <img key={index} src={image} alt={`Page ${index + 1}`} />
      ))}
    </div>
  </div>
);

export default ChapterDetail;
