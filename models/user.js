import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email elready exists!'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    // match: [/^[A-Za-z][A-Za-z0-9_]{4,29}$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique']
  },
  image: {
    type: String
  }
})

const User = models.User || model("User", UserSchema)

export default User

