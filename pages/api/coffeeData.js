import coffeeData from "/coffee-data.json";

export default function handler(req, res) {
  res.status(200).json(coffeeData);
}
