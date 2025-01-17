const coffee = "americano";

coffee.includes("can"); // can이 들어가는지
console.log(coffee.includes("can")); //true

const id = prompt("유저 아이디");
// @와 IT를 포함하면 합격, 아니면 불합격
// id.includes("@") && id.includes("IT") ? alert("합격") : alert("불합격");

"choco".toUpperCase(); //대문자화
"choco".toLowerCase(); //소문자화
id == id.toLowerCase() ? alert(id.toUpperCase()) : alert(id.toLowerCase());

const a = "ice".repeat(3); //ice 3번 반복
"americano".replaceAll("a", "k"); // a -> k 로 바꿈
"icecream".slice(1, 4); //cec  1~4번째까지 자름
"icecream".length; //글자 길이
