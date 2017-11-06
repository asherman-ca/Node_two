import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from 'react-router';

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

class Navtab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
    this.authLink = this.authLink.bind(this);
  }

  authLink() {
    console.log('auth link');
    this.props.router.push('/auth');
  }

  render() {
    return(
      <div>
        <Tabs initialSelectedIndex={1}>
          <Tab
            icon={<FontIcon className="fa fa-file-text" />}
            label="Browse"
            onClick={() => this.props.router.push('/')}
          >
          </Tab>
          <Tab
            icon={<FontIcon className="fa fa-search" />}
            label="Profile"
            onClick={() => this.authLink}
          >
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navtab);