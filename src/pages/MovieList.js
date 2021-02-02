import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.requestMovie = this.requestMovie.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.requestMovie();
  }

  requestMovie() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((response) => this.setState({
        movies: response,
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
        {movies.length > 0 && <Link to="/movies/new">ADICIONAR CARTÃO</Link>}
      </div>
    );
  }
}

export default MovieList;
