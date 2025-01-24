// const starbucks = {
//   menu: [
//     { name: "아아", price: 4000 },
//     { name: "라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sale: 0,
//   sellcoffee: function (i) {
//     if (!menu[i]) console.log("없는 메뉴");
//     else {
//       console.log(`주문하신 음료는 ${this.menu[i].name}입니다.`);
//       this.sale = this.sale + this.menu[i].price;
//     }
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
//   addMenu: function (menuName, priceValue) {
//     this.menu.push({ name: menuName, price: priceValue });
//   },
// };
// starbucks.sellcoffee(0);
// starbucks.sellcoffee(2);
// starbucks.printSale();
// starbucks.addMenu("녹차라떼", 4500);
// starbucks.sellcoffee(3);
// starbucks.printSale();
// console.log(starbucks.menu);

// const magician = {
//   level: 1,
//   exp: 0,
//   hp: 100,
//   mana: 100,
//   levelUp: function (ex) {
//     this.exp = this.exp + ex;
//     if (this.exp >= 100) {
//       this.exp = this.exp - 100;
//       this.level = this.level + 1;
//       console.log("레벨 업!");
//     }
//   },
//   magic: function () {
//     if (this.mana < 10) console.log("매직클로를 쓸 수 없습니다.");
//     else {
//       this.mana = this.mana - 10;
//       this.levelUp(10);
//       console.log("매직클로 사용");
//     }
//   },
//   tele: function () {
//     if (this.mana < 50) console.log("텔레포트를 쓸 수 없습니다.");
//     else {
//       this.mana = this.mana - 50;
//       this.levelUp(50);
//       console.log("텔레포트 사용");
//     }
//   },
//   potion: function () {
//     this.mana = this.mana + 50;
//     this.hp = this.hp + 50;
//     console.log("포션 사용");
//   },
//   print: function () {
//     console.log(`마나: ${this.mana}`);
//     console.log(`경험치: ${this.exp}`);
//     console.log(`레벨: ${this.level}`);
//   },
// };
// magician.magic();
// magician.print();
// magician.tele();
// magician.print();
// magician.potion();
// magician.print();
// magician.tele();
// magician.print();
// magician.tele();

// const youtube = {
//   id: "YUNA",
//   sub: [{ name: "channel1" }, { name: "channel2" }, { name: "channel3" }],
//   like: [{ name: "channel4" }, { name: "channel5" }, { name: "channel6" }],
//   subActive: function (name) {
//     this.sub.push({ name: name });
//   },
//   likeActive: function (name) {
//     this.like.push({ name: name });
//   },
// };
// youtube.subActive("channel10");
// console.log(youtube.sub);
// youtube.likeActive("channel12");
// console.log(youtube.like);

// const car = {
//   carname: "현대",
//   carKM: 1200,
//   kmUP: function (km) {
//     this.carKM = this.carKM + km;
//   },
//   kmDOWN: function (km) {
//     this.carKM = this.carKM ? this.carKM - 1 : 0;
//   },
//   break: function () {
//     this.carKM = 0;
//   },
//   print: function () {
//     console.log(this.carKM);
//   },
// };
// car.kmUP(100);
// car.print(100);
// car.kmDOWN(200);
// car.print(200);
// car.break(200);
// car.print(200);

const calculator = {
  result: 0,

  showHistory: [],
  add: function (x) {
    this.result = this.result + x;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
  minus: function (x) {
    this.result = this.result - x;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
  divide: function (x) {
    if (x == 0) console.log("에러!");
    else this.result = this.result / x;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
  square: function (x) {
    this.result = this.result ** x;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
  clear: function () {
    this.result = 0;
    this.showHistory.push(this.result);
    console.log(this.result);
  },
};
calculator.add(10);
calculator.square(2);
calculator.clear();
calculator.add(2);
calculator.square(2);
console.log(calculator.showHistory);
