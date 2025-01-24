const arr = [1, 3, 5, 7, 9];

//0~1000번인 배열
const arr1 = Array(1001)
  .fill(0)
  .map((x, i) => i);
//i = 순번
// console.log(arr1);

//5의배수 0~100
const arr2 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0);

//   Array(21).fill(0).map((x,i) => i * 5)
// console.log(arr2);

//0~100 3의배수는 쥐 5의 배수는 돼지 15의 배수는 토끼
const arr3 = Array(101)
  .fill(0)
  .map((x, i) => {
    return i % 3 == 0 && i % 5 == 0
      ? "🐰"
      : i && i % 3 == 0
      ? "🐹"
      : i && i % 5 == 0
      ? "🐷"
      : i;
  });
// console.log(arr3);
//1900~2025 연도 , 띠
const mekeZodiac = (to, from) => {
  const zodiac = [
    "🐭",
    "🐮",
    "🐯",
    "🐰",
    "🐲",
    "🐍",
    "🐴",
    "🐏",
    "🐵",
    "🐔",
    "🐶",
    "🐷",
  ];

  return Array(from - to)
    .fill(0)
    .map((x, i) => i + to)
    .map((x) => {
      return `연도:${x}, 띠:${zodiac[x % 12]}`;
    });
};
const result = mekeZodiac(1000, 3000);
console.log(result);
