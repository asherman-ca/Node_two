import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './app';
import RecordsIndexContainer from '../records/RecordsIndexContainer';
import AuthFormContainer from '../auth/AuthFormContainer';
import RecordFormContainer from '../recordform/RecordFormContainer';


const Root = ({ store }) => {

  const customizedTheme = {
    palette: {
      primary1Color: '#30673a',
      accent1Color: 'white',
    },
  };

  return (
    <MuiThemeProvider muiTheme={ getMuiTheme(customizedTheme) }>
      <Provider store={store}>
        <Router history={ hashHistory }>
          <Route path='/' component={ App }>
            <IndexRoute component={ RecordsIndexContainer } />
            <Route path='forms' component={ RecordFormContainer } />
            <Route path='auth' component={ AuthFormContainer } />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

// Root.propTypes = {
//   store: React.PropTypes.object.isRequired
// };

export default Root;
