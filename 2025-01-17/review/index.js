const busNum = Number(prompt("버스 노선 번호 1~3"));
const age = Number(prompt("승객의 나이"));
const bustype = ["시내버스", "광역버스", "마을버스"];
const busPrice = [1200, 2000, 1000];

if (7 >= age || age >= 65) {
  alert("버스 요금은 무료입니다.");
} else if (8 <= age && age <= 19) {
  alert(
    `청소년 비용은 ${bustype[busNum - 1]} 비용은 ${
      busPrice[busNum - 1] * 0.7
    }원 입니다.} `
  );
} else if (bus != busNum) {
  alert("해당 버스노선이 없습니다.");
} else {
  alert(
    `성인 비용은 ${bustype[busNum - 1]} 비용은 ${
      busPrice[busNum - 1] * 1
    }원 입니다.} `
  );
}
