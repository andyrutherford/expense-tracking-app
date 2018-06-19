//
// Object Destructuring
//

// const person = {
//     name: 'Shaq',
//     age: 26,
//     location: {
//         city: 'Los Angeles',
//         temp: 92
//     }
// };

// //const name = person.name;
// //const age = person.age;
// const { name, age } = person;
// console.log(`${name} is ${age}`);

// //Default values
// //Only used if theres no value in the object
// const { gender = "male" } = person;
// console.log(`${name} is a ${gender}`);

// //Renaming variables
// const { city, temp:temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// //Rename variable and set default value
// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//
// Array Destructuring
//

const address = ['1299 S Juniper St', 'Denver', 'Colorado', '80303'];

const [ , city, state='Location Unknown', ] = address;

console.log(`You are in ${city}, ${state}.`);