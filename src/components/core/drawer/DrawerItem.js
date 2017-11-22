import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const DrawerItem = (props) => {
  return(
    <MenuItem>
      <div className="drawer-item">
        <div className="drawer-name">
          {props.player.userName}
        </div>
        <div classNAme="drawer-total">
          {props.player.total}
        </div>
      </div>
    </MenuItem>
  );
};

export default DrawerItem;