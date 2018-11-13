//
// Object destructuring
//

const person = {
  name: 'Sam',
  age: 51,
  location: {
    city: 'Rennes',
    temp: 88
  }
};

// // const name = person.name;
// // const age = person.age;
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}`);

if (person.location.city && person.location.temp) {
  console.log(`It's ${person.location.temp} in ${person.location.city}`);
}

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//
// Array destructuring
//

//const address = ['267 rue de Nantes', 'Rennes', 'Ille et Vilaine', '35200'];
const address = [];
console.log(`You are in ${address[1]} ${address[2]}.`);

const [, city, state = 'Bretagne'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00','$2.50','$2.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);