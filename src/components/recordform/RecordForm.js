import React from 'react';

export default class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    console.log('auth form');
    return (
      <div>
        Record Form
      </div>
    );
  }
};