import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images &&
        images.map(image => (
          <GalleryItem key={image.id}>
            <ImageGalleryItem
              link={image.webformatURL}
              tags={image.tags}
              onClick={() => onClick(image.largeImageURL, image.tags)}
            />
          </GalleryItem>
        ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
