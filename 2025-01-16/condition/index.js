// const username = prompt("이름");
// if (username == "") {
//   alert("살아있다.");
// }

// const number = Number(prompt("숫자"));
// if (0 < number) {
//   alert("정수입니다!");
// } else {
// alert("음의 정수입니다.")
// }

// const num = Number(prompt("숫자"));

// if (num % 2) {
//   alert("홀수.");
// } else {
//   alert("짝수");
// }

// + 는 숫자 변환해주는 역할
// const num = +prompt("정수 입력");
// if (num > 0) {
//   alert("양의 정수");
// } else if (num == 0) {
//   alert("0 입니다.");
// } else {
//   alert("음의 정수");
// }

// const num = +prompt("숫자 입력");

// if (num > 0 && num % 2 == 1) {
//   alert("홀수");
// } else if (num > 0 && num % 2 == 0) {
//   alert("짝수");
// } else if (num < 0 && num % 2 == -1) {
//   alert("음의 홀수");
// } else if (num < 0 && num % 2 == 0) {
//   alert("음의 짝수");
// } else if (num == 0) {
//   alert("0 입니다.");
// } else if (num == NaN) {
//   alert("숫자가 아닙니다.");
// } else {
//   const result = num == 0 ? "0입니다." : "에러입니다.";
//   alert(result);
// }

const year = +prompt("몇년생인지?");
if (year % 12 == 0) {
  alert("원숭이띠 입니다.");
} else if (year % 12 == 1) {
  alert("닭띠 입니다.");
} else if (year % 12 == 2) {
  alert("개띠 입니다.");
} else if (year % 12 == 3) {
  alert("돼지띠 입니다.");
} else if (year % 12 == 4) {
  alert("쥐띠 입니다.");
} else if (year % 12 == 5) {
  alert("소띠 입니다.");
} else if (year % 12 == 6) {
  alert("호랑이띠 입니다.");
} else if (year % 12 == 7) {
  alert("토끼띠 입니다.");
} else if (year % 12 == 8) {
  alert("용띠 입니다.");
} else if (year % 12 == 9) {
  alert("뱀띠 입니다.");
} else if (year % 12 == 10) {
  alert("말띠 입니다.");
} else {
  alert("양띠 입니다.");
}
