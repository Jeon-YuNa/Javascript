const pizza = (emoji) => {
  return `${emoji}피자`;
};
// console.log(pizza("🍕"));
const repeat = (word) => {
  return word.repeat(3);
};
// console.log(repeat("kim"));
const USD = (KRW) => {
  return (KRW / 1432.5).toFixed(2);
};
// console.log(USD(10000));

// const gotoAcademy = (move) => {
//   console.log("집에서 출발");
//   move();
//   console.log("학원 도착");
// };
// const car = () => {
//   console.log("차");
// };
// const walk = () => {
//   console.log("걷기");
// };
// gotoAcademy(car);
// gotoAcademy(walk);

const makeBeverage = (make) => {
  console.log("주문 받기");
  make();
  console.log("주문 완료");
};
const coffee = () => {
  console.log("1.원두갈기");
  console.log("2.평탄화하기");
  console.log("3.커피기계넣기");
  console.log("4.버튼클릭");
  console.log("5.즙짜기");
};
const smoothie = () => {
  console.log("1.재료넣기");
  console.log("2.얼음넣기");
  console.log("3.갈기");
  console.log("4.즙짜기");
};
const tea = () => {
  console.log("1.티백넣기");
  console.log("2.뜨물넣기");
  console.log("3.후불기");
};
makeBeverage(coffee);
makeBeverage(smoothie);
makeBeverage(tea);
