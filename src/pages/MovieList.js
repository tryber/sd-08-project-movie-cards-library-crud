import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loadingMessenge: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({
      movies: [...await movieAPI.getMovies()],
      loadingMessenge: false,
    });
  }

  render() {
    const { loadingMessenge, movies } = this.state;
    // Render Loading here if the request is still happening
    const loadingElement = <Loading />;
    return (
      <div>
        <div>
          <h1 className="page-title">Movie Cards Library</h1>
        </div>
        <div className="movie-list" data-testid="movie-list">
          {loadingMessenge
            ? loadingElement
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
