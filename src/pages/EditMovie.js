import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './EditMovie.css';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fecthMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fecthMovie() {
    const { match } = this.props;
    const requestMovie = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: requestMovie, status: 'loaded' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div className="edit-movie-container" data-testid="edit-movie">
        <div className="edit-movie-form">
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.string.isRequired,
};

export default EditMovie;
