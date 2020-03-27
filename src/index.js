const person = {
    name: "Deyve",
    address: {
        country: "Canada",
        city: "Vancouver"
    }
};

const personUpdated = {
    ...person,
    name: "David",
    address: {
        ...person.address,
        city: "Toronto"
    },
    age: 41
};

console.log(person);
console.log(personUpdated);
