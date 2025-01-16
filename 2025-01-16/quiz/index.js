const movie = +prompt("1~3");
const age = +prompt("나이");

if (age < 13 && movie == 1) {
  alert(
    `귀하의 나이는 ${age}이고 선택한 영화는${movie}이므로 최종 티켓 가격은 ${
      10000 * 0.5
    }원 입니다.`
  );
} else if (age < 13 && movie == 2) {
  alert(8000 * 0.5 + "원 입니다.");
} else if (age < 13 && movie == 3) {
  alert(9000 * 0.5 + "원 입니다.");
} else if (age >= 60 && movie == 1) {
  alert(10000 * 0.3 + "원 입니다.");
} else if (age >= 60 && movie == 2) {
  alert(8000 * 0.3 + "원 입니다.");
} else if (age >= 60 && movie == 3) {
  alert(9000 * 0.3 + "원 입니다.");
} else if (movie == 1) {
  alert("10000원 입니다.");
} else if (movie == 2) {
  alert("8000원 입니다.");
} else {
  alert("9000원 입니다.");
}
if (movie == 1) {
  const moviename = "액션영화";
  if (age < 13) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${
        10000 * 0.5
      }원 입니다.`
    );
  } else if (age >= 60) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${
        10000 * 0.3
      }원 입니다.`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${10000}원 입니다.`
    );
  }
} else if (movie == 2) {
  const moviename = "공포영화";
  if (age < 13) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${
        9000 * 0.5
      }원 입니다.`
    );
  } else if (age >= 60) {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${
        9000 * 0.3
      }원 입니다.`
    );
  } else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는${moviename}이므로 최종 티켓 가격은 ${9000}원 입니다.`
    );
  }
}
