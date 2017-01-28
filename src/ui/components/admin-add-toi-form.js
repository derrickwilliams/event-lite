import React from 'react';
import { DatePicker, RaisedButton, TimePicker } from 'material-ui';

const ToiSignUpForm = () => (
  <div>
    <DatePicker autoOk={true} hintText="date" container="inline" />
    <TimePicker autoOk={true} hintText="start time" />
    <TimePicker autoOk={true} hintText="end time" />
    <RaisedButton label="Submit" />
  </div>
);

export default ToiSignUpForm;