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
        title="Pokr"
        titleStyle={{fontWeight: 'bold'}}
        iconElementLeft={<span style={{ width: 20, display: 'inline-block' }} />}
        iconElementRight={<Logged />}
      />
    );
  }
}

export default AppBarExampleComposition;