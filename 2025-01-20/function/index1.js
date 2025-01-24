// 함수
// 자바스크립트에서는 함수를 일급 객체로 취급함

//array, object, function
const a = [];
const b = {};
const c = function (a, b) {
  return a + b;
};
const d = c(1, 2); //3

const subway = {
  name: "부평점 서브웨이",
  sale: 0,
  sellBread: function () {
    this.sale = this.sale + 1000;
  },
  printSale: function () {
    console.log(this.sale);
  },
};

subway.sellBread();
subway.sellBread();
subway.sellBread();
subway.printSale();

const beskinRabbins = {
  icecream: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는외계인", price: 2500 },
    { name: "지헌이는맏형", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecream[num] == undefined) console.log("없는 아이스크림");
    else {
      console.log(`${this.icecream[num].name}아이스크림이 판매되었습니다.`);
      this.sale = this.sale + this.icecream[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출: ${this.sale}`);
  },
  addIcecream: function (namevalue, pricevalue) {
    this.icecream.push({ name: namevalue, price: pricevalue });
  },
};
beskinRabbins.sellIcecream(0);
beskinRabbins.sellIcecream(1);
beskinRabbins.printSale();
beskinRabbins.addIcecream("녹차", "4000");
