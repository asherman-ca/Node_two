import React from 'react';
import Navtab from './navtab/Navtab';

const App = ({ children }) => {
  return(
    <section>
      <Navtab />
      { children }
    </section>
  );
};

export default App;
