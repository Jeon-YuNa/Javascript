// 정규표현식 타입 => /문자열/
const a = /hello/i;
// 뒤에 옵션
// i = ignore = 대문자 소문자 상관없이
const b = a.test("HELLO world!"); // a에 hello가 있느냐
console.log(b);

const str = "hello world!";
const result = str.match(a); // 매치하는 부분이 있으면 배열로 바꿔줌
console.log(result);

const c = /a{2,4}/;
// aa or aaa or aaaa 있는지
console.log(c.test("a")); //false
console.log(c.test("aa")); //true
console.log(c.test("aaa")); //true
console.log(c.test("aaaa")); //true
console.log(c.test("aaaaa")); //true aa,aaa가 있기 때문에
