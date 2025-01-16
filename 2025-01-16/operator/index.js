//연산자

//산술연산
// +, -, /, %, **
const a = 1 + 2; //3
const a1 = 1 - 2; //-1
const a2 = 2 * 2; // 4
const a3 = 3 / 2; // 1.5
const a4 = 3 % 2; // 1
const a5 = 3 ** 2; // 9

//대입연신
// =
const b = "블라블라";

//비교연산[boolean타입으로 귀결됨]
//>, <, >=, <=, ==(same), !=(diff)
const c = 5 > 3; //true
const c1 = 5 < 3; //false
const c2 = 5 >= 3; //true
const c3 = 5 <= 3; //false
const c4 = 10 == 9; //false
const c5 = 10 != 9; //true
const c6 = 10 === "10"; //false
const c7 = 10 === 10; //true

//논리 연산
// &&(and), ||(or), !(not)
const d = 5 > 3 && 10 > 5 && 3 > 0; //true
const d1 = flase || flase || flase || true; //true
const d2 = !false; // true
const d3 = !(5 <= 3) || !(3 > 10); // true
const d4 = 5 > 3 && 3 <= 10; // true

// 삼항연산
// 조건 ? 값1 : 값2
// true이면 앞의 값 flase면 뒤의 값
const e = 5 > 3 ? "떡볶이" : "순대"; // 떡볶이
const e1 = 5 > 10 ? "마라탕" : "요거트"; // 요거트

// 단항 연산
// +
const f = +"100"; //string -> number

// es6 연산자

// ??, ..., ?., #
