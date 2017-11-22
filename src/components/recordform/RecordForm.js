import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledDate: null,
      value: '',
      userName: '',
      take: 0,
      location: '',
      date: 0,
      sessions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOtherChange = this.handleOtherChange.bind(this);
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  handleOtherChange = (event, index, value) => this.setState({ userName: value });

  render() {

    return (
      <div className="record-form">
        <div className="record-form-item">
          <div className="record-form-title">
            Add Game
          </div>
          <DatePicker
            hintText="Enter Date"
            value={this.state.controlledDate}
            onChange={this.handleChange}
          />
          <div className="record-form-dropdown">
            <div className="record-form-dropdown-text">
              Add Player
            </div>
            <DropDownMenu value={this.state.userName} onChange={this.handleOtherChange}>
              <MenuItem value={'Alex'} primaryText="Alex" />
              <MenuItem value={'David'} primaryText="David" />
              <MenuItem value={'Kelly'} primaryText="Kelly" />
              <MenuItem value={'Raymond'} primaryText="Raymond" />
              <MenuItem value={'Matt'} primaryText="Matt" />
            </DropDownMenu>
          </div>
        </div>
      </div>
    );
  }
};
