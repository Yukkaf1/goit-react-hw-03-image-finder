import PropTypes from 'prop-types';
import { Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ link, tags, onClick }) => {
  return <Img src={link} alt={tags} onClick={onClick} />;
};

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
