const users = [
  { firstName: "Aliya", lastName: "Bhat", age: 25 },
  { firstName: "Puja", lastName: "Bhat", age: 25 },
  { firstName: "Parth", lastName: "Samthan", age: 30 },
  { firstName: "Kartik", lastName: "Aryan", age: 36 },
];

//Find out the firstName whose age is less tan 30

const output = users
  .filter((user) => {
    return user.age < 30;
  })
  .map((res) => {
    return res.firstName;
  });

console.log(output);

// same by using reduce

const outputReduce = users.reduce((acc, cur) => {
  if (cur.age < 30) {
    acc.push(cur.firstName);
  }
  return acc;
}, []); //initially, the acc will be an empty array

console.log(outputReduce);
