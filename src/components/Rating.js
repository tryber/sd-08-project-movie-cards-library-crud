import React from 'react';
import PropTypes from 'prop-types';
import EstrelaMax from './img-components/002-estrela-1.svg';
import Estrela from './img-components/001-estrela.svg';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const Max = 5;

    return (
      <div className="movie-card-rating">
        {rating === Max
          ? <img src={ EstrelaMax } alt="Estrela Max" className="star-max" />
          : <img src={ Estrela } alt="Estrela" className="star" />}
        <div className="rating">{rating}</div>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
