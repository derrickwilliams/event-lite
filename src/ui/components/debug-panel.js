import React, { Component } from 'react';

export default class DebugPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <pre>
        {JSON.stringify(this.props.data, null, 2)}
      </pre>
    );
  }
}