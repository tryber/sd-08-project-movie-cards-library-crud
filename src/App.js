import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
