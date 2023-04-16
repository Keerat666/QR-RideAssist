//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    id_created_at: { type: Date, default: Date.now() },
    pickup_point: { type: String, required: true, description: "Should be required" },
    drop_point: { type: String, required: true, description: "Should be required" },
    pickup_coordinates: { type: String, required: true, description: "Should be required" },
    drop_coordinates: { type: String, required: true, description: "Should be required" },
    user_mobile: { type:Number , required: true, description: "Should be required" },
    driver_id: { type: String, required: true, description: "Should be required" },
    user_details:{ type: {} , description: "Should be required" },
    driver_details:{ type: {} , description: "Should be required" },
    otp: { type: Number, required: true, description: "Should be required" , default : getRndInteger(1000,9999)},
    trip_fare: { type: Number, required: true, description: "Should be required", default : getRndInteger(40,500) },
    trip_status: { type: String, enum: ['Active', 'Finished', 'Cancelled'], default : "Active" },

}, { collection: 'trips' });

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

var TripModel = mongoose.model('Trips', tripSchema);

module.exports = TripModel;
