const toUpper = (word) => {
  return word.toUpperCase();
};
const d = () => {
  console.log("된장국 요리!");
};
const cook = (recipe) => {
  console.log("요리시작!");
  recipe();
  console.log("요리끝!");
};
// 함수 안에  함수 매개변수
// 콜백 함수(마술상자 안에 마술상자)

const skill = (active) => {
  console.log("스킬 준비!");
  active();
  console.log("스킬 완료!");
};
skill(fire);
skill(ice);

const fire = () => {
  console.log("불 스킬");
};
const ice = () => {
  console.log("얼음 스킬");
};
