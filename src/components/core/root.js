import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app';

const Root = ({ store }) => {

  const customizedTheme = {
    palette: {
      primary1Color: '#6DB3C2',
      accent1Color: 'gray',
    }
  };

  return (
    <MuiThemeProvider muiTheme={ getMuiTheme(customizedTheme) }>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={ App }>

          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;
