import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
    this.movieRequest = this.movieRequest.bind(this);
    this.movieDetailsInfo = this.movieDetailsInfo.bind(this);
  }

  componentDidMount() {
    this.movieRequest();
  }

  async movieRequest() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const request = await movieAPI.getMovie(id);
    console.log(request);
    this.setState({
      movie: request,
    });
  }

  movieDetailsInfo() {
    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } } = this.state;
    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    if (movie.length === 0) return <Loading />;

    return (
      <div>
        { this.movieDetailsInfo() }
      </div>
    );
  }
}

// Props Validation consultada no codigo https://github.com/tryber/sd-08-project-movie-cards-library-crud/blob/1848e366c44ac8dec81d5c4c58981b5d7f7d35aa/src/pages/MovieDetails.js
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
