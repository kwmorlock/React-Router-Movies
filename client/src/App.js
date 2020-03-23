import React, { useState } from 'react';
import { Route } from "react-router-dom";

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/item-list/:itemID">
          <Items items={product} />
        </Route>
        <Route path="/item-list/">
          <ItemsList items={product} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
