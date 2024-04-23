
//write a class to calculate the Uber price

class UberPriceCalculator {
    constructor() {
        this.baseFare = 30;
        this.costPerKilometer = 10;
        this.costPerMinute = 6;
        this.bookingFee = 10;

    }

calculatePrice(distanceInKilometers, timeInMinutes) {

    let distanceCost = this.costPerKilometer * distanceInKilometers;

    let timeCost = this.costPerMinute * timeInMinutes;



    let totalprice = this.baseFare + distanceCost + timeCost + this.bookingFee;
    return totalprice;
}
}
  let calculator = new UberPriceCalculator();

  let distanceInKilometers = 7; // Distance in kilometers
  let timeInMinutes = 30; // Time in minutes
  
  let estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
