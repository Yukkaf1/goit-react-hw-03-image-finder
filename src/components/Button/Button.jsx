import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoadMore onClick={onLoadMore} type="button">
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
