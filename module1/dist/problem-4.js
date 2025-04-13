"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.shape === "rectangle") {
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
