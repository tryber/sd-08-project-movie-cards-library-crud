import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="/" component={ NotFound } />
        <Route path="/notfound" exact component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
