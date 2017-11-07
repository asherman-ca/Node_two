import React from 'react';
import Navtab from './navtab/NavtabContainer';

const App = ({ children }) => {
  return(
    <section className="origin">
      <Navtab />
      { children }
    </section>
  );
};

export default App;
