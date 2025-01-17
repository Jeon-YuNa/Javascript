const ex = [100, false, ["커피", "콜라", "아이스크림"]];

const menu = ["아메리카노", "모카라떼", "다방커피"]; // array 타입
const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

//배열 관련된 연산자

//1. indexing 연산자 (=꺼내기)
const test = [menu, soccer];
console.log(test[1][1]); //황희찬
console.log(test[0][2]); //다방커피

//2. Destructuring 연산자 (=분해)
const test1 = [...menu, ...soccer];
console.log(test1); //["아메리카노", "모카라떼", "다방커피", "손흥민", "황희찬", "이강인", "김민재"]

//3. Rest 연산자
// ... -> 앞의것 빼고 나머지
const [son, ...rest] = soccer; //["손흥민", "황희찬", "이강인", "김민재"];
console.log(son); // 손흥민
console.log(rest); //["황희찬", "이강인", "김민재"];

const [son1, rest1] = soccer;
console.log(son1); // 손흥민
console.log(rest1); // 황희찬

//4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "황희찬";
console.log(soccer);

//5. delete 연산자 (=삭제)
delete soccer[3];
console.log(soccer);
