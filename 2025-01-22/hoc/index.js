// const arr = [1, 3, 5, 7, 9];
//💚짱중요💚
/////////////////////////////////// map() : 요소들을 바꿔주는 함수
// const double = (x) => x * 2;
// const plus = (x) => x + 10;
// const change = (x) => (x ** 3 < 10 ? "짜장면" : "탕수육");
// const change1 = (x) => (x ** 3 < 100 ? "커피" : "붕어빵");
// const newArr1 = arr.map(change);
// const newArr2 = arr.map(change1);
// console.log(newArr1);
// console.log(newArr2);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const length = (x) => (x.length >= 6 ? x + "💙" : x + "💔");
// const length2 = (x) => (x.length * 2 < 15 ? "짧다" : "길다");
// const newArr3 = fruits.map(length2);
// console.log(newArr3);

const arr = [1, 3, 5, 7, 9];
/////////////////////////////////// some() : 요소중에 하나라도 있으면 true 없으면 false
/////////////////////////////////// every() : 요소가 모두 해당되면 true 없으면 false
// arr.some();
const arrhas = (x) => x == 3;
const five = (x) => x < 5;
const num = (x) => x % 2 == 0;
const ten = (x) => x < 10;

const some = arr.some(num);
const every = arr.every(ten);
// console.log(some);
// console.log(every);
/// {}는 return 값으로 돌려줘야함

const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];
//1. 과일이름중에 k,b,s로 시작하는게 있으면 true 아니면 false
//2. 과일이름중에 길이가 모두 4~12글자 사이면 true 아니면 false
//3. 과일이름중에 i,o,u가 있으면 하트 아니면 다이너마이트
const start = (f) =>
  f.startsWith("k") || f.startsWith("b") || f.startsWith("s");
const length = (f) => f.length >= 4 && f.length <= 12;
const has = (f) =>
  f.includes("i") || f.includes("o") || f.includes("u") ? "💙" : "🧨";
const newFruits = fruits.some(start);
const newFruits1 = fruits.every(length);
const newFruits2 = fruits.map(has);
console.log(newFruits2);

const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`;
const songArr = song.split(" ");
const songChange = (w) => (w.length > 6 ? "💛" : w);
const result = song
  .split(" ")
  .map((w) => (w.length > 6 ? "💛" : w))
  .join(" ");
console.log(result);
//.join(" ") 배열을 일자로 합친다

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter
const six = (x) => x >= 6;
const newNumArr = numArr.filter(six);
const oddArr = numArr.filter((x) => x % 2); // 홀수만
const double = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
console.log(double);
