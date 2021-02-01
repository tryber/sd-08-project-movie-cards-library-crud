import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.dataFetch = this.dataFetch.bind(this);
  }

  componentDidMount() {
    this.dataFetch();
  }

  async dataFetch() {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data });
    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
