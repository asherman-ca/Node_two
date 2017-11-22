import React from 'react';
import Navtab from './navtab/NavtabContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Drawer from './drawer/Drawer';

const style = {
  position: 'absolute',
  bottom: 50,
  right: 50
};

const totals = {
  1: { userName: 'Alex', userId: 1, total: 530 },
  2: { userName: 'Raymond', userId: 2, total: 200 },
  3: { userName: 'Matt', userId: 3, total: 30 },
  4: { userName: 'David', userId: 4, total: -50 },
  5: { userName: 'Carson', userId: 5, total: -600 },
  6: { userName: 'Kelly', userId: 6, total: -300 }
};

const App = ({ children }) => {
  return(
    <section className="origin">
      <Navtab />
      { children }
      <FloatingActionButton style={style}>
        <Drawer totals={totals} />
      </FloatingActionButton>
    </section>
  );
};

export default App;
