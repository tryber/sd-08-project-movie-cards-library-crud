import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const apiMovies = await movieAPI.getMovies();
    this.setState({
      movies: apiMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {
          loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}
export default MovieList;
