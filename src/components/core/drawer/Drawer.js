import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { values } from 'lodash';
import DrawerItem from './DrawerItem';

const style = {
  color: 'white'
};

const drawerStyle = {
  paddingTop: 25
};

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <IconButton 
          iconStyle={style}
          iconClassName="fa fa-folder-open-o"
          onClick={this.handleToggle}
        >
        </IconButton>
        <Drawer
          containerStyle={drawerStyle}
          docked={false} 
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <div className="drawer-title">Cash Leaders</div>
            {values(this.props.totals).map(player => {
              return <DrawerItem player={player} />;
            })}
          <div className="drawer-footer">
            <div style={{marginBottom: 5}}>
              Produced by Alex Sherman
            </div>
            <div>
              <a href="https://www.asherman.online">
                www.asherman.online
              </a>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}