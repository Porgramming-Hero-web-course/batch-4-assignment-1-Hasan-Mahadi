"use strict";
{
    ;
    const updateProfile = (profile, updates) => {
        return Object.assign(Object.assign({}, profile), updates);
    };
    const myProfile = {
        name: "Hasan Mahadi",
        age: 24,
        email: " Hasan@proheroexampl.com"
    };
    console.log(updateProfile(myProfile, { name: "mahadi", age: 30 }));
}
