import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title,
      subtitle, imagePath, storyline, genre, rating, id } } = this.props;

    return (
      <div data-testid="movie-card">
        <img alt={ title } src={ imagePath } />
        <section className="movie-card-body">
          <h3 className="movie-title">{title}</h3>
          <h4 className="movie-subtitle">{subtitle}</h4>
          <p className="movie-genre">{genre}</p>
          <p className="movie-storyline">{storyline}</p>
          <p className="movie-rating">{rating}</p>
          <Link to={ `movie/${id}` } className="movie-details">VER DETALHES</Link>
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;
