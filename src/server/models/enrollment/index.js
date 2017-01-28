import mongoose, { Schema } from 'mongoose';

const EnrollmentSchema = new Schema({
});

const EnrollmentModel = mongoose.model('Enrollment', EnrollmentSchema);

export { EnrollmentModel as Enrollment, EnrollmentSchema };