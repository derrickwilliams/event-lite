import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { RaisedButton, FlatButton, Dialog } from 'material-ui';

import { map, curry } from 'lodash';

const toiLineupStyle = {
  width: '75%',
  maxWidth: '650px',
  margin: '0 auto'
};

const toiLineupItemStyle = {
  marginBottom: '10px'
};

const handleRegisterClicked = curry((eventId, clickEvent) => {
  console.log('start REGISTRATION', eventId);
});

const isEnrolled = () => false;

const ToiLineup = (props) => (
  <div className="toi-lineup-list" style={toiLineupStyle}>{map(props.events, e => <ToiLineupCard event={e} key={e.id} />)}</div>
);

const RegisterButton = (props, a) => (
  <RaisedButton label="Register" primary={true} onClick={props.onClick}/>
);

const AlreadyRegisteredButton = () => (
  <RaisedButton label="Already registered" disabled={true} />
);

const ToiLineupCard = ({ event }) => (
  <Card className="toi-lineup-list-item" style={toiLineupItemStyle}>
    <CardHeader
      title={event.title}
      subtitle={`${event.presenter} - [some version of the date]`}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {event.description}
      <hr />
      seats: {event.capacity}
    </CardText>

    <CardActions>
      {isEnrolled() ? <AlreadyRegisteredButton /> : <RegisterButton onClick={handleRegisterClicked(event.id)} />}
    </CardActions>

    <Dialog />
  </Card>
);

export default ToiLineup;