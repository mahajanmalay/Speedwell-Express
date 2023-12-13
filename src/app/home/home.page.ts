import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  packageWeight: number = 0;
  weightUnit: string = 'g'; // Default to grams
  destinationType: string = "";
  transportMethod: string = "";
  estimatedPrice: number | undefined;

  constructor(private menuController: MenuController) {}

  staffLogin(): void {
    // Add your staff login logic here
  }

  trackOrder(): void {
    // Add your track order logic here
    alert("Tracking functionality is under construction.... will be launched ASAP")
  }

  closeMenu(): void {
    this.menuController.close();
  }

  estimatePrice() {
    // constants for prices
    const prices: any = {
      'Pune&PCMC': { byRoad: { base: 50, perKg: 60 } },
      'Mumbai': { byRoad: { base: 60, perKg: 70 } },
      'Maharashtra': { byRoad: { base: 80, perKg: 80 } },
      'Out of Maharashtra': { byRoad: { base: 120, perKg: 90 }, byAir: { base:160, perKg: 160 } },
      'North-East/J&K': { byRoad: { base: 130, perKg: 120 }, byAir: {base:180, perKg: 180 } },
    };
  
    // Determine base and per kg prices based on destination
    const destinationPrices = prices[this.destinationType];
    console.log(this.transportMethod)

    if (!destinationPrices) {
      console.error(`Prices for ${this.destinationType} are not defined.`);
      alert(`Enter valid details.`)
      return;
    }
  
    // Determine the selected transport method
    const selectedTransportMethod = this.transportMethod === 'byAir' ? 'byAir' : 'byRoad';
  
    const priceDetails = destinationPrices[selectedTransportMethod];
  
    if (!priceDetails) {
      console.error(`Price details for ${selectedTransportMethod} are not defined.`);
      return;
    }
  
    // Calculate weight in kg
    const weightInKg = this.weightUnit === 'g' ? this.packageWeight / 1000 : this.packageWeight;
  
    // Calculate the total price
    if (!priceDetails) {
      console.error(`Prices for byAir are not defined for ${this.destinationType}.`);
      return;
    }
    // console.log(selectedTransportMethod)
    // console.log(priceDetails)
    // console.log(weightInKg)
    if(weightInKg<=0.5){
      this.estimatedPrice = priceDetails.base
    }
    else if(weightInKg>0.5 && weightInKg<1){
      this.estimatedPrice = priceDetails.perKg
    }
    else{
      this.estimatedPrice = priceDetails.perKg*weightInKg 
    }

   
  }
  
  
}
