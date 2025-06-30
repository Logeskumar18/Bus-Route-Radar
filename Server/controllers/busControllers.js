import BusRoute from "../model/busRouteModel.js";




export const getBusesBetweenStops = async (req, res) => {
  const { from, to } = req.body;

  if (!from || !to) {
    return res.status(400).json({ success: false, message: "'from' and 'to' are required query parameters." });
  }

  try {
    const matchingRoutes = await BusRoute.find({
      'stops.name': { $all: [from, to] }
    });

    const result = [];

    for (const route of matchingRoutes) {
      const stopNames = route.stops.map(stop => stop.name);
      const fromIndex = stopNames.indexOf(from);
      const toIndex = stopNames.indexOf(to);

      if (fromIndex >= 0 && toIndex > fromIndex) {
        const stopsInBetween = route.stops.slice(fromIndex, toIndex + 1);
        result.push({
          busNumber: route.busNumber,
          from,
          to,
          stops: stopsInBetween
        });
      }
    }

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "No direct bus route found between the given stops." });
    }

    res.json({ success: true, data: result });

  } catch (error) {
    console.error("Error finding bus routes:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getBusDetailsByNumber = async (req, res) => {
  const { busNumber } = req.body;

  if (!busNumber) {
    return res.status(400).json({ success: false, message: "'busNumber' is required as a query parameter." });
  }

  try {
    const route = await BusRoute.findOne({ busNumber: busNumber });

    if (!route) {
      return res.status(404).json({ success: false, message: "Bus route not found." });
    }

    res.json({
      success: true,
      data: {
        busNumber: route.busNumber,
        from: route.from,
        to: route.to,
        distance: route.distance,
        stops: route.stops
      }
    });

  } catch (error) {
    console.error("Error fetching bus route:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const getBusesByStopName = async (req, res) => {
  const { stopName } = req.body;

  if (!stopName) {
    return res.status(400).json({
      success: false,
      message: "'stopName' is required in the request body."
    });
  }

  try {
    const routes = await BusRoute.find({
      'stops.name': stopName
    });

    if (!routes.length) {
      return res.status(404).json({
        success: false,
        message: "No bus routes found for the given stop."
      });
    }

    const result = routes.map(route => ({
      busNumber: route.busNumber,
      from: route.from,
      to: route.to,
      distance: route.distance
    }));

    res.json({
      success: true,
      stopName,
      totalBuses: result.length,
      buses: result
    });

  } catch (error) {
    console.error("Error fetching buses by stop:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};



