import BusRoute from "../model/busRouteModel.js";



export const getAllBusRoutes = async (req, res) => {
  try {
    const busRoutes = await BusRoute.find();
    res.json({ success: true, data: busRoutes });
  } catch (error) {
    console.error("Error retrieving bus data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
