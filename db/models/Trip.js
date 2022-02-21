const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const TripSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  image: { type: String },
  country: String,
  discreption: String,
  duration: String,
  Rank: Number,
  type: {
    type: [String], // Array of Strings
    enum: ["Family", "Solo", "Freinds", "Couples", "For everyone"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
TripSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Trip", TripSchema);
