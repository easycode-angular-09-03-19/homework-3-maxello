import { Component, OnInit } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public carInfo: Car = {
    name: "Mazda",
    mileage: 120000,
    fuelTankCapacity: 60,
    currentFuelCapacity: 27,
    consumption: 10,
    specifications: [
      "Двигатель: 1.5 литра", 
      "Максимальная скорость: 200 км/ч", 
      "Разгон до 100км/ч: 11.2c", 
      "Тип кузова: Седан" 
    ]
  };

  public drive(kilometers: number): void {
      if (this.carInfo.currentFuelCapacity > 0) {
          if(this.carInfo.currentFuelCapacity < kilometers / this.carInfo.consumption){
            this.carInfo.mileage += kilometers / this.carInfo.consumption * this.carInfo.currentFuelCapacity;
            this.carInfo.currentFuelCapacity = 0;
          } else {
            this.carInfo.mileage += kilometers;
            this.carInfo.currentFuelCapacity -= kilometers / this.carInfo.consumption;
          }
      }
  }

  public refuel(): void {
      this.carInfo.currentFuelCapacity += this.carInfo.fuelTankCapacity;
  }
}
