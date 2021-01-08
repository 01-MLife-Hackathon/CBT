import React from 'react';
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom';

import MainPage from './pages/MainPage'
import MakeQuiz from './pages/MakeQuiz';
function App() {
  return(
    <BrowserRouter>
      <Route path = "/" component = {MainPage}/>
      <Route path = "/Quiz" component = {MakeQuiz}/>
    </BrowserRouter>
  );
}

export default App;
