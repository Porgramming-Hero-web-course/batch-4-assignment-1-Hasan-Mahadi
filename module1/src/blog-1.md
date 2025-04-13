

1.The significance of union and intersection types in Typescript.


Answer:

# Union and intersection types both are very important in TypeScript, because they help to combine different types of values ​​and structures...


# Union Type: It allows users to accept any one of the multiple types. For example, string | number union type can be either string or number.

Use System:
Useful when a value could be multiple different types, and you want to accept any of them.


//example 

function StudentId(id: number | string) {
  console.log("Your ID is: " + id);
}

StudentId(101);          // number
StudentId("abc-123");    // string

//here id can be either a number or a string.



# Intersection Type: It combines multiple types to form a new type, which contains all the properties of the type. For example,  type (A & B) intersection will contain the properties of type A and type B together.

Use System:
Useful when you want to merge multiple types into a single, richer type.

//example

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Hasan",
  employeeId: 1001
};

Staff must have both name (from Person) and employeeId (from Employee).




# Finally  They help make the code more flexible and reusable.
Union Types (|)
Allows a value to be one of multiple types.
Used for flexibility.
Example: string | number


Intersection Types (&)
Combines multiple types into one.
Used for merging properties.
Example: { name: string } & { age: number }

In TypeScript, union and intersection types are powerful method for  type-safe code.

