import React from 'react';

export default class RecordsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    console.log('records index');
    return(
      <div>
        Records Index
      </div>  
    );
  }
};