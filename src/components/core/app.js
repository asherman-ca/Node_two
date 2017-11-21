import React from 'react';
import Navtab from './navtab/NavtabContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Drawer from './Drawer';

const style = {
  position: 'absolute',
  bottom: 50,
  right: 50
};

const App = ({ children }) => {
  return(
    <section className="origin">
      <Navtab />
      { children }
      <FloatingActionButton style={style}>
        <Drawer />
      </FloatingActionButton>
    </section>
  );
};

export default App;
