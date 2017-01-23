// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        {this.props.children}
      </div>
    );
  }
}
