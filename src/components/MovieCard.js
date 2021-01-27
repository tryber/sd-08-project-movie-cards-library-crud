import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <img src={ imagePath }/>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
