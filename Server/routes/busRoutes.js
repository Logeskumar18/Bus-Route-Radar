import express from "express";
import { getBusDetailsByNumber, getBusesBetweenStops, getBusesByStopName } from "../controllers/busControllers.js"; 

const busRouter = express.Router();



busRouter.post('/find-route', getBusesBetweenStops)
busRouter.post('/find-details', getBusDetailsByNumber)
busRouter.post('/buses-by-stop', getBusesByStopName)

export default busRouter;
