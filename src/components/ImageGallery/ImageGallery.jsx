import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleryItem key={id}>
            <ImageGalleryItem
              link={webformatURL}
              tags={tags}
              onClick={() => onClick({ largeImageURL, tags })}
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
