import express from "express";
import { getAllBusRoutes } from "../controllers/busControllers.js"; 

const busRouter = express.Router();


busRouter.get("/busroutes", getAllBusRoutes);

export default busRouter;
