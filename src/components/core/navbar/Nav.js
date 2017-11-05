import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './Logged';
import Drawer from './Drawer';

class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  render() {
    return (
      <AppBar
        title="Creddit"
        iconElementLeft={<Drawer />}
        iconElementRight={<span style={{ width: 20, display: 'inline-block' }} />}
      />
    );
  }
}

export default AppBarExampleComposition;