import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

export default class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledDate: null,
      value: '',
      userName: '',
      take: 0,
      loc: '',
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

  handleLocChange = (event, index, value) => this.setState({ loc: value });

  handleTakeChange = (event, newValue) => {
    console.log(newValue);
    this.setState({ take: newValue }); 
  }

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
              Add Location
            </div>
            <DropDownMenu value={this.state.loc} onChange={this.handleLocChange}>
              <MenuItem value={'Kellys Place'} primaryText="Kellys Place" />
              <MenuItem value={'App Academy'} primaryText="App Academy" />
            </DropDownMenu>
          </div>
        
          <div className="record-form-player">
            <div className="record-form-row">
              <div className="record-form-player-text">
                Enter Player Name
              </div>
              <DropDownMenu value={this.state.userName} onChange={this.handleOtherChange}>
                <MenuItem value={'Alex'} primaryText="Alex" />
                <MenuItem value={'David'} primaryText="David" />
                <MenuItem value={'Kelly'} primaryText="Kelly" />
                <MenuItem value={'Raymond'} primaryText="Raymond" />
                <MenuItem value={'Matt'} primaryText="Matt" />
              </DropDownMenu>
            </div>
            <div className="record-form-row">
              <TextField
                onChange={this.handleTakeChange}
                floatingLabelText="Enter Take"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
