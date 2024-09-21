const users = [
  { firstName: "Aliya", lastName: "Bhat", age: 25 },
  { firstName: "Puja", lastName: "Bhat", age: 25 },
  { firstName: "Parth", lastName: "Samthan", age: 30 },
  { firstName: "Kartik", lastName: "Aryan", age: 36 },
];

// {25:2, 30:1, 36:2} we use reduce here beacuse we want one value out of it

//initially pass empty object

const output = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age] += 1;
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(output);
