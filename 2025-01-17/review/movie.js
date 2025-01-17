const movieNum = Number(prompt("영화의 번호"));
const age = Number(prompt("관람자의 나이"));
const movieType = ["액션영화", "로맨틱코미디", "공포영화"];
const moviePrice = [10000, 8000, 9000];

if (age < 13) {
  alert(
    `귀하의 나이는 ${age}이고 선택하신 영화는 ${
      movieType[movieNum - 1]
    }로 금액은 ${moviePrice[movieNum - 1] * 0.5}원 입니다.`
  );
} else if (age >= 60) {
  alert(
    `귀하의 나이는 ${age}이고 선택하신 영화는 ${
      movieType[movieNum - 1]
    }로 금액은 ${moviePrice[movieNum - 1] * 0.7}원 입니다.`
  );
} else {
  alert(
    `귀하의 나이는 ${age}이고 선택하신 영화는 ${
      movieType[movieNum - 1]
    }로 금액은 ${moviePrice[movieNum - 1]}원 입니다.`
  );
}
