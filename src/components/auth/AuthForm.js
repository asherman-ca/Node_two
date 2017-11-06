import React from 'react';

export default class AuthForm extends React.Component {
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
        Records Index
      </div>
    );
  }
};