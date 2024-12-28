import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

export const User = mongoose.model('user', UserSchema);

