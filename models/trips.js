//Require Mongoose
var mongoose = require('mongoose');
var rn = require('random-number');
var genOTP = rn.generator({
  min:  1000
, max:  9999
, integer: true
})

var genFare = rn.generator({
  min:  47
, max:  600
, integer: true
})

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
    otp: { type: Number, required: true, description: "Should be required" , default : genOTP()},
    trip_fare: { type: Number, required: true, description: "Should be required", default : genFare() },
    trip_status: { type: String, enum: ['Active', 'Finished', 'Cancelled'], default : "Active" },

}, { collection: 'trips' });


var TripModel = mongoose.model('Trips', tripSchema);

module.exports = TripModel;
