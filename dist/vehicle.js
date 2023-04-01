"use strict";
class Vehicle {
    constructor(_make, _model, _year, _rented = false) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get Make() {
        return this._make;
    }
    get Model() {
        return this._model;
    }
    get Year() {
        return this._year;
    }
    get isRented() {
        return this._rented;
    }
    set Rented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this._rented) {
            console.log(`${this._make} ${this._model} is already rented.`);
        }
        else {
            this._rented = true;
        }
    }
    returnVehicle() {
        if (!this._rented) {
            console.log(`${this._make} ${this._model} was not rented.`);
        }
        else {
            this._rented = false;
            console.log(`Returning ${this._make}`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented = false, _num) {
        super(make, model, year, rented);
        this._num = _num;
    }
    rentalRate() {
        return 50;
    }
    get Number() {
        return this._num;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented = false, _num) {
        super(make, model, year, rented);
        this._num = _num;
    }
    rentalRate() {
        return 75;
    }
    get Number() {
        return this._num;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented = false, _engineSize) {
        super(make, model, year, rented);
        this._engineSize = _engineSize;
    }
    rentalRate() {
        return 25;
    }
    get EngineSize() {
        return this._engineSize;
    }
}
//Testingn
const car = new Car('Toyota', 'Civic', 2020, true, 1000);
car.rent();
car.returnVehicle();
console.log(`Car rental rate: $${car.rentalRate()} per day`);
const truck = new Truck('Toyota', 'Mazda', 2018, true, 2000);
truck.rent();
console.log(`Truck rental rate: $${truck.rentalRate()} per day`);
truck.returnVehicle();
const motorcycle = new Motorcycle('Suzuki', '125', 2012, true, 125);
console.log(`Motorcycle engine size: ${motorcycle.EngineSize} cc`);
motorcycle.rent();
console.log(`Motorcycle rental rate: $${motorcycle.rentalRate()} per day`);
motorcycle.returnVehicle();
//# sourceMappingURL=vehicle.js.map