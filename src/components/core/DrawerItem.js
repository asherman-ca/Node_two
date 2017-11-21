import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const DrawerItem = (props) => {
  return(
    <MenuItem>
      <div className="drawer-item">
        <div>
          {props.player.userName}
        </div>
        <div>
          {props.player.total}
        </div>
      </div>
    </MenuItem>
  );
};

export default DrawerItem;