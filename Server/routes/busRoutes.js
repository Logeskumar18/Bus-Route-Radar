import express from "express";
import { getAllBusRoutes, getBusDetailsByNumber, getBusesBetweenStops, getBusesByStopName } from "../controllers/busControllers.js"; 

const busRouter = express.Router();


busRouter.get("/busroutes", getAllBusRoutes);
busRouter.get('/find-route', getBusesBetweenStops)
busRouter.post('/find-details', getBusDetailsByNumber)
busRouter.post('/buses-by-stop', getBusesByStopName)

export default busRouter;
