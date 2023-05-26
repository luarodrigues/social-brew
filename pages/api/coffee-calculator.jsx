//BE
const brewMethodRatios = {
  Espresso: 2,
  "V60 or Kalita": 16,
  AeroPress: 17,
  "French Press": 18,
  "Cold Brew (concentrate)": 5,
  "Cold Brew": 10,
  "Moka Pot": 12,
  Chemex: 13,
};

export default function handler(request, response) {
  const { coffeeAmount, brewMethod } = request.query;
  // console.log(coffeeAmount, brewMethod);
  const ratio = brewMethodRatios[brewMethod];
  const calculatedWaterAmount = coffeeAmount * ratio;
  // console.log(calculatedWaterAmount);
  response.status(200).json(calculatedWaterAmount);
}
