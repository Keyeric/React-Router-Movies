import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
