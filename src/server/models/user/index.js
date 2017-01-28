import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  uid: 'string',
  name: 'string',
  permissions: { type: 'array' }
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel as User, UserSchema };