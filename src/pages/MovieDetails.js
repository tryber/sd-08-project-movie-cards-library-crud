import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
      isLoading: true,
    };

    this.buscarMovie = this.buscarMovie.bind(this);
  }

  componentDidMount() {
    this.buscarMovie();
  }

  buscarMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ isLoading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ isLoading: false, movie });
    });
  }

  async apagarMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = { movie };
    const { match: { params: { id } } } = this.props;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {console.log(movie)}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.apagarMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: String.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
