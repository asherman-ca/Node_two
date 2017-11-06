import React from 'react';
import Navtab from './navtab/NavtabContainer';

const App = ({ children }) => {
  return(
    <section>
      <Navtab />
      { children }
    </section>
  );
};

export default App;
