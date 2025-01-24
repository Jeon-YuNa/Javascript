//funtion[함수]
//마술상자
//입력:
//출력:

function plus100(x) {
  return x + 100; // x에 100을 더해서 돌려준다
}

const a = plus100(500);
console.log(a);

//twice
//x가 들어오면 두배를 돌려주는 함수 만들고 실행
function twice(x) {
  return x * 2;
}
const b = twice(500);
console.log(b);

//lulckybiky
//어떠한 문구 넣으면 마지막에 러키비키잖아😊 붙여서 돌려주는 함수
function lulckybiky(sentence) {
  return sentence + "러키비키잖아😊";
}
const c = lulckybiky("11시잖아 ");
console.log(c);

//홀수인지 짝수인지
function number(x) {
  return x % 2 ? "홀수" : "짝수"; // 0: flase, 1: true
}
const d = number(7);
console.log(d);
