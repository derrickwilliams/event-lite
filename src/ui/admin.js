import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AdminApp from './admin-app';

injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <AdminApp />
  </MuiThemeProvider>,
  document.getElementById('appRoot')
);