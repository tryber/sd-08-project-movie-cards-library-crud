import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Details from '../components/Details';
import Delete from '../components/Delete';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingMessenge: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    const movieRequired = await movieAPI.getMovie(id);
    this.setState({
      movie: movieRequired,
      loadingMessenge: false,
    });
  }

  // deleteCard() {
  //   const { match: { params: { id } } } = this.props;
  //   console.log(id);
  //   // await movieAPI.deleteMovie(id, () => <Redirect to="/" />);
  // }

  render() {
    const { loadingMessenge, movie } = this.state;
    return (
      <section>
        {loadingMessenge
          ? <Loading />
          : (
            <>
              <div className="page-title">Movie Infos</div>
              <Details movie={ movie } data-testid="movie-details" />
              <Delete id={ movie.id } />
            </>
          )}
      </section>
    );
  }
}

MovieDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}).isRequired;

export default MovieDetails;
