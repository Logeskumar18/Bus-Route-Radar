import BusRoute from "../model/busRouteModel.js";


export const getAllBusRoutes = async (req, res) => {
  try {
    const busRoutes = await BusRoute.find();

    if (busRoutes.length === 0) {
      return res.status(404).json({ message: "No bus routes found" });
    }

    
    res.status(200).json(busRoutes);
  } catch (error) {
    console.error("Error retrieving bus data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

