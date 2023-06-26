import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.page !== 1 &&
      this.props.images.length !== prevProps.images.length
    ) {
      window.scrollBy({ top: 520, behavior: 'smooth' });
    }
  }

  render() {
    const { images, clickHandler } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              src={image.small}
              data={image.large}
              alt={image.alt}
              clickHandler={clickHandler}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  clickHanlder: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      small: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;
