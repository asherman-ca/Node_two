import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from 'react-router';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Records from 'material-ui/svg-icons/maps/rate-review';

// const SELECT_MAP = {
//   '/': 0,
//   '/auth': 1
// };

// const Navtab = () => (
  // <div>
  //   <Tabs initialSelectedIndex={1}>
  //     <Tab
  //       icon={<FontIcon className="fa fa-file-text" />}
  //       label="Browse"
  //       onClick={() => this.props.router.push('/')}
  //     >
  //     </Tab>
  //     <Tab
  //       icon={<FontIcon className="fa fa-search" />}
  //       label="Profile"
  //       onClick={() => this.props.router.push('/auth')}
  //     >
  //     </Tab>
  //   </Tabs>
  // </div>
// );

// export default withRouter(Navtab);

const SELECT_MAP = {
  '/': 0,
  '/forms': 1
};

class Navtab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive(tab) {
    this.props.router.push(`${tab.props['data-route']}`);
  }

  render() {
    return(
      <div>
        <Tabs className="navtab" initialSelectedIndex={SELECT_MAP[this.props.router.location.pathname]}>
          <Tab
            icon={<i className="fa fa-users three-times" aria-hidden="true"></i>}
            data-route="/"
            onActive={this.handleActive}
          >
          </Tab>
          <Tab
            icon={<i className="fa fa-cogs three-times" aria-hidden="true"></i>}
            data-route="/forms"
            onActive={this.handleActive}
          >
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navtab);