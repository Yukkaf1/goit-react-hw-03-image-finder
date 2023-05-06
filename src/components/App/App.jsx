import { Component } from 'react';
import { Box } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import * as API from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: false,
    isLoading: false,
    showModal: false,
    currImg: null,
    showLoadMore: false,
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({ isLoading: true });

        const images = await API.getImages(query, page);

        if (images.total === 0) {
          toast.warn('Your search did not return any results.', {
            theme: 'dark',
          });

          return;
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          totalImages: images.totalHits,
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = async ({ query: keyword }) => {
    const { query, page } = this.state;

    if (keyword === '') {
      toast.warn('In the Search field, enter the text to be searched.', {
        theme: 'dark',
      });
      return;
    }

    this.setState({ page: 1, query: keyword, images: [], totalImages: 0 });

    if (query === keyword && page === 1) {
      try {
        this.setState({ isLoading: true });

        const images = await API.getImages(query, page);
        console.log(query);
        console.log(images);

        this.setState({
          images: [...images.hits],
          isLoading: false,
        });
      } catch (error) {
        this.setState({ error: true, isLoading: false });
      }
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = (currImg = null) => {
    this.setState({ currImg });
  };

  handleImgClick = (largeImageURL, tags) => {
    this.toggleModal();
    this.setState({ currImg: { largeImageURL, tags } });
  };

  closeModal = () => {
    this.toggleModal();
    this.setState({ currImg: null });
  };

  render() {
    const { images, isLoading, currImg, error, totalImages } = this.state;
    const showLoadMore = !isLoading && images.length !== totalImages;

    return (
      <Box>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onClick={this.toggleModal} />
        {showLoadMore && <Button onLoadMore={this.loadMore} />}
        <Loader isLoading={isLoading} />
        {currImg && (
          <Modal
            onClose={this.toggleModal}
            link={currImg.largeImageURL}
            tags={currImg.tags}
          />
        )}
        <ToastContainer />
        {error && toast.error(`Oops something went wrong, try again.`)}
      </Box>
    );
  }
}
