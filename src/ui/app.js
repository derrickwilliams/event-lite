import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import DebugPanel from './components/debug-panel';
import AdminPanel from './components/admin-panel';
import ToiLineup from './components/toi-lineup';
import ToiRegisterForm from './components/toi-register-form';

import { getEvents } from './data';

const appData = {
  events: [
    {
      id: 'event1',
      title: 'ABCs are fun',
      description: 'Doing stuff with your ABCs.',
      presenter: 'Joe Bob',
      start: (new Date()).getTime(),
      end: (new Date()).getTime(),
      capacity: 45
    },
    {
      id: 'event2',
      title: 'Why PHP sucks',
      description: 'Bitching about PHP',
      presenter: 'That PHP guy',
      start: (new Date()).getTime(),
      end: (new Date()).getTime(),
      capacity: 20
    }
  ]
};

export default class App extends Component {
  componentDidMount() {
    return getEvents()
      .then(events => {
        this.setState({ events: appData.events });
      });
  }
  render() {
    if (!this.state) return <h1>Loading...</h1>;

    return (

      <div className="app-conetnt">
        <ToiLineup events={this.state.events} />
        <ToiRegisterForm />
      </div>
    );
  }
}