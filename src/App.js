import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/" exact component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
