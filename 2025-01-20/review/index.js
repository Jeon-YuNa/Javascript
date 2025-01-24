const mbti = prompt("유저의 MBTI").toUpperCase();
const first = mbti[0];
const second = mbti[1];
const third = mbti[2];
const fourth = mbti[3];

const mbtiObj = {
  E: "외향형",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};
alert(
  `${mbtiObj[first]} ${mbtiObj[second]} ${mbtiObj[third]} ${mbtiObj[fourth]}`
);

// const mail = prompt("이메일 입력");
// const test = mail.includes("@");
// const test2 = mail.includes(".com") || mail.includes(".net");
// const test3 =
//   mail.includes("naver") ||
//   mail.includes("kakao") ||
//   mail.includes("yahoo") ||
//   mail.includes("paran");

// alert(test && test2 && test3 ? "이메일이 맞음" : "이메일이 아님");
