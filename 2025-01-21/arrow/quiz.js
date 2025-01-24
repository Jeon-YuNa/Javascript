// add 함수 x,y
function add(x, y) {
  return x + y;
}
// minus 함수 x,y
function minus(x, y) {
  return x - y;
}
//hello 함수 : 이름이 들어오면 00님 안녕
function hello(name) {
  return `${name}님 안녕하세요.`;
}
//tolength 함수 : 문자가 들어오면 "00문자 : 문자의 길이00"
function tolength(a) {
  return `${a}문자 : ${a.length}`;
}
// console.log(hello("가나다라마바사"));

//square_three : x가 들어오면 제곱의 세배 돌려줌
function square_three(x) {
  return x ** 2 * 3;
}
//lunch_menu : x가 들어오면 점심메뉴:~~입니다. 돌려줌
function lunch_menu(x) {
  return `점심메뉴: ${x}입니다.`;
}
//allergy_test : 새우 땅콩, 조개 중 하나가 포함이면 알러지 있음 없으면 없음 돌려줌
function allergy_test(a) {
  const word = a.includes("새우") || a.includes("땅콩") || a.includes("조개");
  return word ? "알러지 있음" : "알러지 없음";
}
console.log(allergy_test("새우"));

//threeToArray 세개의 단어를 넣으면 배열로
function threeToArray(a, b, c) {
  return [a, b, c];
}

//getIphone version, model, storage
function getIphone(version, model, storage) {
  return { version: version, model: model, strage: storage };
}

// 몇도를 넣으면 평각, 직각, 둔각, 예각 돌려주는 함수
function angle(x) {
  if (x == 180 || x == 0) return "평각";
  else if (x == 90) return "직각";
  else if (90 < x && x < 180) return "둔각";
  else if (0 < x && x < 90) return "예각";
}
console.log(angle(45));

//단어, 알파벳 입력 알파벳 기준으로 앞의 단어를 대문자
function getWord(word, a) {
  const [first] = word.split(a);
  return first.toUpperCase();
}
console.log(getWord("americano", "c"));

//단어의 길이가 4~10사이면 유효 아니면 유효하지않음
function length(w) {
  return w.length() <= 4 && w.length() >= 10 ? "요효" : "유효하지않음";
}
