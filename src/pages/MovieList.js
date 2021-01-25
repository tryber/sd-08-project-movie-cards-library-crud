import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((movies) => {
        this.setState({
          loading: false,
          movies,
        });
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <ReactLoading />;
    }
    return (

      <div data-testid="movie-list">

        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
