
import express from "express";
import { getAllBusRoutes } from "../controller/busController.js"; 

const busRouter = express.Router();


busRouter.get("/busroutes", getAllBusRoutes);

export default busRouter;
