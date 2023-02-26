import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.imdbID} image={image.Poster} />;
    });

    return (
      <div className="image-list">{renderedImages}</div>
    );
  }
  
  export default ImageList;