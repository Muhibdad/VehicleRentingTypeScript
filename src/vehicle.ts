abstract class Vehicle {

  
    constructor(private _make: string, private _model: string, private _year: number, private _rented: boolean = false) {
    }
  
    get Make (){
      return this._make;
    }
  
    get Model() {
      return this._model;
    }
  
    get Year () {
      return this._year;
    }
  
    get isRented() {
      return this._rented;
    }
  
    set Rented(rented:boolean) {
      this._rented = rented;
    }
  
    public abstract rentalRate(): number;
  
    public rent(): void {
      if (this._rented) {
        console.log(`${this._make} ${this._model} is already rented.`);
      } else {
        this._rented = true;
      }
    }
  
    public returnVehicle(): void {
      if (!this._rented) {
        console.log(`${this._make} ${this._model} was not rented.`);
      } else {
        this._rented = false;
        console.log(`Returning ${this._make}`);
      }
    }
  }
  
  class Car extends Vehicle {
  
    constructor(make: string, model: string, year: number, rented: boolean = false, private _num:number) {
      super(make, model, year, rented);
      
    }
  
    public rentalRate(): number {
      return 50;
    }
  
    get Number() {
      return this._num;
    }
  }
  
  class Truck extends Vehicle {
  
    constructor(make: string, model: string, year: number, rented: boolean = false, private _num:number) {
      super(make, model, year, rented);

    }
  
    public rentalRate(): number {
      return 75;
    }
  
    get Number() {
        return this._num;
      }
  }
  
  class Motorcycle extends Vehicle {
  
    constructor(make: string, model: string, year: number, rented: boolean = false, private _engineSize:number) {
      super(make, model, year, rented);
    }
  
    public rentalRate(): number {
      return 25;
    }
  
    get EngineSize(): number {
      return this._engineSize;
    }
  }
  //Testingn
  const car = new Car('Toyota', 'Civic', 2020, true, 1000);
  car.rent();
  car.returnVehicle();
  console.log(`Car rental rate: $${car.rentalRate()} per day`);
  
  const truck = new Truck('Toyota', 'Mazda', 2018, true, 2000 );
  truck.rent();
  console.log(`Truck rental rate: $${truck.rentalRate()} per day`);
  truck.returnVehicle();
  
  const motorcycle = new Motorcycle('Suzuki', '125',2012, true,125);
  console.log(`Motorcycle engine size: ${motorcycle.EngineSize} cc`);
  motorcycle.rent();
  console.log(`Motorcycle rental rate: $${motorcycle.rentalRate()} per day`);
  motorcycle.returnVehicle();
  