{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.


    class Car {
        // make: string;
        // model: string;
        // year: number;


        // constructor(make: string, model:string, year: number){
        // this.make = make;
        // this.model = model;
        // this.year = year;
        // }

        constructor(

            public make: string,
            public model: string,      //best practics
            public year: number,

        ) {};


        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year
        }

    }

    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());


    
}