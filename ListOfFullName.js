const users = [
  { firstName: "Aliya", lastName: "Bhat", age: 25 },
  { firstName: "Parth", lastName: "Samthan", age: 30 },
  { firstName: "Kartik", lastName: "Aryan", age: 36 },
];

// WE USE HERE MAP FUNCTION BEAUSE WE DONT WANT TO FILTER OUT SOME VALES

const output = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(output);
