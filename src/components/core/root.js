import React from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './app';
import RecordsIndexContainer from '../records/RecordsIndexContainer';
import AuthFormContainer from '../auth/AuthFormContainer';

const Root = ({ store }) => {

  const history = syncHistoryWithStore(browserHistory, store);

  const customizedTheme = {
    palette: {
      primary1Color: '#30673a',
      accent1Color: 'white',
    }
  };

  return (
    <MuiThemeProvider muiTheme={ getMuiTheme(customizedTheme) }>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={ App }>
            <IndexRoute component={ RecordsIndexContainer } />
            <Route path='auth' component={ AuthFormContainer } />
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
