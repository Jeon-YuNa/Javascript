const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getLotto = () => {
  while (true) {
    const lotto = new Array(6).fill(0).map((v) => String(getRandom(1, 45)));
    const newLotto = lotto
      .reduce((a, c) => {
        if (a.includes(c)) return a;
        else return a + "," + c;
      })
      .split(",");
    if (newLotto.length == 6) return newLotto;
  }
};
const getLotto1 = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(1)
          .map((v) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
console.log(getLotto());
