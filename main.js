person = { name: "nima", lastname: "beheshtaein" };

porsons = [
  { name: "nima", lastname: "beheshtaein" },
  { name: "ali", lastname: "alipoor" },
];

// for (const person of porsons) {
//   console.log(person);
// }

function logPerson(person) {
  for (const key in person) {
    console.log(`Your ${key} is ${person[key]}`);
  }
}
