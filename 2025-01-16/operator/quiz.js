//1.
// const cm = prompt("손님의 키");
// const cm1 = Number(cm);
// if (cm1 >= 140) {
//   window.alert("탑승가능");
// } else {
//   window.alert("탑승금지");
// }
// 1. 정답
// const quiz1_result = Number(cm) > 140 ? "탑승가능" : "탑승금지";
// alert(quiz1_result);

//2.
// const number = window.prompt("숫자");
// const number1 = Number(number) % 2;
// if (number1 == 1) {
//   window.alert("홀수입니다.");
// } else {
//   window.alert("짝수입니다.");
// }
//2. 정답
// const quiz2_result = Number(number) % 2 == 1 ? "홀수" : "짝수";
// alert(quiz2_result);

//3.
// const year = window.prompt("태어난 년도");
// const age = 2026 - Number(year);
// if (age >= 20) {
//   window.alert("성인입니다.");
// } else {
//   window.alert("미성년자 입니다.");
// }
//3. 정답
// const quiz3_result = age >= 20 ? "성인" : "미성년자"
// alert(quiz3_result);

//4.
// const hour = window.prompt("몇 시");
// const min = window.prompt("몇 분");
// const sec = window.prompt("몇 초");

// const hour1 = Number(hour) * 60 * 60;
// const min1 = Number(min) * 60;
// const sec1 = Number(sec);

// window.alert(hour1 + min1 + sec1);
//4. 정답
// alert(`${Number(hour) * 3600 + Number(min) * 60 + Number(sec)} 초`);

//5.
// const number1 = window.prompt("숫자1");
// const number2 = window.prompt("숫자2");
// if (Number(number1) > Number(number2)) {
//   window.alert(number1);
// } else {
//   window.alert(number2);
// }
//5. 정답
// alert(Number(number1) > Number(number2) ? number1 : number2);
