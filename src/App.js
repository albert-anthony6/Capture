import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ContactUs from './pages/ContactUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/work" component={OurWork} />
        <Route exact path="/work/:id" component={MovieDetail} />
        <Route exact path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
