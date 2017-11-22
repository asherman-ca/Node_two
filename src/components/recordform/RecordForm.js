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
      value: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOtherChange = this.handleOtherChange.bind(this);
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  handleOtherChange = (event, index, value) => this.setState({ value });

  render() {

    return (
      <div className="record-form">
        <div className="record-form-item">
          <DatePicker
            hintText="Controlled Date Input"
            value={this.state.controlledDate}
            onChange={this.handleChange}
          />
          <DropDownMenu value={this.state.value} onChange={this.handleOtherChange}>
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </DropDownMenu>
        </div>
      </div>
    );
  }
};
