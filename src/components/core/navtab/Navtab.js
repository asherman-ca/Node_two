import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from 'react-router';

const SELECT_MAP = {
  '/': 0,
  '/auth': 1
};

const Navtab = ({router}) => (
  <div>
    <Tabs initialSelectedIndex={1}>
      <Tab
        icon={<FontIcon className="fa fa-file-text" />}
        label="Browse"
        onClick={() => router.push('/')}
      >
      </Tab>
      <Tab
        icon={<FontIcon className="fa fa-search" />}
        label="Profile"
        onClick={() => router.push('/auth')}
      >
      </Tab>
    </Tabs>
  </div>
);

export default withRouter(Navtab);