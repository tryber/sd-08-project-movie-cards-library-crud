import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="movie-forms-input"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
          Título
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            className="movie-forms-input"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
          Subtítulo
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="movie-forms-input"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
          Imagem
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ storyline }
            className="movie-forms-input"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
          Sinopse
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre">
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
          Gênero
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
          Avaliação
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-forms-content">
        <form className="movie-forms">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
