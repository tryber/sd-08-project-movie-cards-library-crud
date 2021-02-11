import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title } = movie;
  return (
    <div>
      { title }
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
