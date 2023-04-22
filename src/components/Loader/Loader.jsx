import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = ({ isLoading }) => {
  return (
    <SpinnerWrapper>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={isLoading}
      />
    </SpinnerWrapper>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
