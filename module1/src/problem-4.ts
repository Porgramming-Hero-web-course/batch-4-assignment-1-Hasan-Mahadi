{
  //
  //Problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape) => {
    if ("shape" in shape && shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if ("shape" in shape && shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      return 0;
    }
  };

  // Sample Input 1:
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // Sample Output 1:
  console.log(circleArea);
  //78.54;

  // Sample Input 2:
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // Sample Output 2:
  console.log(rectangleArea);
  //24;

  //
}