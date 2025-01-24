const result = [1, 2, 3, 4, 5].reduce((acc, current) => {
  console.log({ acc, current });
  return acc + current;
});
console.log(result);

const coffee = "americano".split("a").reduce((a, c) => a + c);
console.log(coffee);
