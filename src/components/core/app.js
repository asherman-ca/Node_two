import React from 'react';
import Nav from './navbar/Nav';

const App = ({ children }) => {
  return(
    <section>
      <Nav />
      { children }
    </section>
  );
};

export default App;
