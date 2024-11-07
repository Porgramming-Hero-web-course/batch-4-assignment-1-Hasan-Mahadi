{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Shape = Circle | Rectangle;  // where each type has a unique shape property  


    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        widht: number;
        height: number;
    }



    const calculateShapeArea = (shape: Shape) => {

        if (shape.shape === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);

        } else if (shape.shape === "rectangle") {
            return shape.widht * shape.height;
        }

    };

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        widht: 4,
        height: 6,
    });

    console.log(rectangleArea);



}