import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  title: String,
  start: { type: Date },
  end: { type: Date },
  capacity: Number
});

const EventModel = mongoose.model('Event', EventSchema);

export { EventModel as Event, EventSchema };