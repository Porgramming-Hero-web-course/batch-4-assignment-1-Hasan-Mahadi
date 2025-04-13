"use strict";
{
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person = { name: "Hasan", age: 24 };
    console.log(getProperty(person, "name"));
}
