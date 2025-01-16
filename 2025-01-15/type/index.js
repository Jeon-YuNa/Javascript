// Number 타입

// 수학적인 실수, 정수 나타냄
const my_number1 = 1;
const my_number2 = 101;

// String 타입
// "", '', ``(백틱)로 문자를 나타냄
const my_number3 = "피자 1호 L라지";
const id = "990101";
const coke = `350ML`;

const birth = "19990101";
const birth1 = 19990101;

// 사칙연산
// Number 타입
const num = 3 + 10;

// String 타입
// 타입에 따른 연산자의 역할 변경
// 문자열 연결연산
const test = "로제" + "떡볶이";

const str = "3" + "10";
const str1 = "3" - "10";
const str2 = !!"ㅇㅇㅇ";
const str3 = +"100";
const str4 = "3" * 10;
const str5 = "3" / "10";

console.log(str); // 310
console.log(str1); // -7
console.log(str2); // true
console.log(str3); // 100
console.log(str4); // 30
console.log(str5); // 0.3

const nickname = "potato";
const order = `${nickname}님 주문하신 음료나왔습니다.`;

console.log(order);
