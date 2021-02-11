// Biblioteca React
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Componetes nível Superior
import App from './App';
// Componentes nível inferior
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

export default function AppRouters() {
  return (
    <App>
      <Switch>
        <Route path="/" component={ MovieList } exact />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </App>
  );
}
