const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 export const userSchema = new Schema( {
     email: {
         type: String,
         required: 'Email is required'
     },
     password: {
         type: String,
         required: 'Password is required'
     },
     firstName: {
         type: String,
         default: 'Elon'
     },
     lastName: {
         type: String,
         default: 'Musk'
     },
     cities: {
         type: Array,
         default: [],
     }
 }, {
     timestamps: true
     })
