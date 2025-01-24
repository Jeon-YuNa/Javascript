//1. 아이디 길이가 4~16 글자
//틀리면 아이디 길이가 유효하지 않습니다!
//2. 반드시 !, @, #, & 중 하나를 포함해야하고
// 틀리면: 반드시 특수문자 하나를 포함해야합니다!
//3. 마지막 글자가 알파벳 대문자로 끝나야함
//틀리면 마지막 알파벳은 무조건 대문자여야 합니다!
// 모두 통과하면 완성! 알럿

const id = prompt("만들고싶은 아이디");
const special = !(
  id.includes("!") ||
  id.includes("@") ||
  id.includes("#") ||
  id.includes("&")
);

console.log(id.slice(-1));
if (id.length < 4 || id.length > 16) {
  alert("아이디 길이가 유효하지 않습니다!");
} else if (special) {
  alert("반드시 !, @, #, & 중 하나를 포함해야합니다!");
} else if (id.slice(-1).toLowerCase() == id.slice(-1)) {
  alert("마지막 알파벳은 무조건 대문자여야 합니다!");
} else {
  alert("완성!");
}
