import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Logged from './Logged';
import Drawer from './Drawer';

class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  render() {
    return (
      <div>
        <AppBar
          title="Creddit"
          iconElementLeft={<Drawer />}
          iconElementRight={this.state.logged ? <Logged /> : <FlatButton label="Login" /> }
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;