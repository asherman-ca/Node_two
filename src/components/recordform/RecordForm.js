import React from 'react';

export default class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {

    return (
      <div className="record-form">
        <div className="record-form-item">
          Record Form
        </div>
      </div>
    );
  }
};