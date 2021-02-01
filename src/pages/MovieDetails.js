import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      isLoading: true,
    };
  }
  
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // let { id } = useParams();
    movieAPI.getMovie(id).then((answer)=>{
      this.setState({
        movie: answer,
        isLoading: false,
      })
    });
  }
  
  render() {
    const { match: { params: { id } } } = this.props;
    // let { id } = useParams();
    const { movie,isLoading } = this.state;
    //   // Change the condition to check the state
    // console.log(movie);
    if (isLoading) return <Loading />;
    // console.log(movie);
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    console.log(movie);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
