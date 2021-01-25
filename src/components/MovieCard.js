import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Coroa from './img-components/001-coroa.svg';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, genre, bookmarked } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <div className="movie-card-top">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          {bookmarked ? <img src={ Coroa } alt="Coroa" className="bookmarked" /> : ''}
        </div>
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <p className="genre">{genre}</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    bookmarked: PropTypes.bool,
  }).isRequired,
};

export default MovieCard;
