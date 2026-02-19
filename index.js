import express from "express";

const app = express();

app.get("/api/ndvi", (req, res) => {
  const { lat, lng } = req.query;

  const ndvi = 0.62; // mock value for now
  let health_label = "Good";
  if (ndvi < 0.4) health_label = "Risk";
  else if (ndvi < 0.6) health_label = "Watch";

  res.json({
    ndvi,
    health_label,
    date: new Date().toISOString().slice(0, 10),
    lat,
    lng
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NDVI API running on port ${PORT}`);
});
