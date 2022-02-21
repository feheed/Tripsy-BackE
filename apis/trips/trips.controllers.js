const Trip = require("../../db/models/Trip");

exports.tripListFetch = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    return res.json(trips);
  } catch (error) {
    next(error);
  }
};

exports.tripCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    req.body.owner = req.user._id;
    const newTrip = await Trip.create(req.body);
    await newTrip.populate({
      path: "owner",
      select: "username",
    });
    return res.status(201).json(newTrip);
  } catch (error) {
    next(error);
  }
};
