import mongoose from "mongoose";

const StopSchema = new mongoose.Schema({
  name: String,
  km: Number
});

const BusRouteSchema = new mongoose.Schema({
  busNumber: String,
  from: String,
  to: String,
  stops: [StopSchema]
}, { collection: 'BusDetails' }); 

const BusRoute = mongoose.model('BusRoute', BusRouteSchema);

export default BusRoute;
