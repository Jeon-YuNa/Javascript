const menu = [
  {
    name: "부대찌개",
    price: 13000,
    kcal: 700,
    ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
  },
  {
    name: "죽",
    price: 4000,
    kcal: 200,
    ingredients: ["소고기", "밥", "물"],
  },
  {
    name: "샌드위치",
    price: 0,
    kcal: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kcal: 700,
    ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
  },
];
// 메뉴에서 가격이 10% 올린 배열 콘솔로
// const tenPercent = menu.price.map((price) => price * 1.1);
const tenPercent = (x) => {
  x.price = x.price * 1.1;
  return x;
};
// const newMenu = menu.map(tenPercent);
// console.log(newMenu);

//모든메뉴에 설탕이 추가됨, 성분에 설탕 추가, kcal + 100
const addSugar = (x) => {
  x.kcal = x.kcal + 100;
  x.ingredients.push("설탕");

  return x;
};
// const newMenu1 = menu.map(addSugar);
// console.log(newMenu1);

const vegun = (x) => x.ingredients.every((v) => !(v == "햄" || v == "소고기"));
const newMenu2 = menu.filter(vegun);
// console.log(newMenu2);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];
//카페인 없는 음료만 추출
// const nonCaffeine = (x) => x.shots == 0;
// const newStarbucks = starbucks.filter(nonCaffeine);
// console.log(newStarbucks);
// //커피콩이 들어가면 가격 20% 할인
// const sale = (x) => {
//   x.price = x.ingredients.some((x) => x == "커피콩") ? x.price * 0.8 : x.price;
//   return x;
// };
// const newStarbucks2 = starbucks.map(sale);
// console.log(newStarbucks2);

//성분에 꿀없으면 꿀 추가 이름에도 꿀 추가, 가격 + 300 원
const honey = (x) => {
  if (!x.ingredients.includes("꿀")) {
    x.name = x.name + "꿀❤";
    x.price = x.price + 300;
    x.ingredients.push("꿀");
  }
  return x;
};
const newStarbucks3 = starbucks.map(honey);
console.log(newStarbucks3);

// const newStarbucks4 = starbucks.map((x) => {
//   !x.ingredients.includes("꿀")
//     ? (x.name = x.name + "꿀🧡" && x.price + 300 && x.ingredients.push("꿀"))
//     : x;

//   return x;
// });
// console.log(newStarbucks4);

//String -> Array
const arr = "엄준식".split(" ");
const arr1 = [..."엄준식"];

//Array -> String
["김밥", "천국"].join(" ");
