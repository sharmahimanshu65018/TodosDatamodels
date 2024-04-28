import mongoose from 'mongoose';

// const userSchema=new mongoose.Schema({
//   username:String,
//   email:String,
//   isActive:Boolean
// });

const userSchema = new mongoose.Schema(
  {
    usename: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password must be required'],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
