// 이미지 변경 함수
const img_url = [
  "images/img01.jpg",
  "images/img02.jpg",
  "images/img03.jpg",
  "images/img04.jpg",
  "images/img05.jpg",
  "images/img06.jpg",
];

$(function () {
  // 년/월/일
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1; // 컴퓨터에서는 월수가 0부터 시작함 그래서+1 하는것
  let date = d.getDate();

  // .html로 하든 .text로 하든 상관 없음
  $(".year").html(year);
  $(".month").text(month);
  $(".day").html(date);

  // 1~9월을 01 ~ 09월로 표시
  if (month > 9) {
    $(".month").html(month);
  } else {
    $(".month").html(`0${month}`);
  }

  function changeBg() {
    // 0 ~ 2 랜덤값 생성(이미지 번호)
    // Math.floor를 사용해서 소숫점자리가 사라짐
    let imgNum = Math.floor(Math.random() * 6);

    // 이미지 변경
    $("body").css({
      background: `url('images/filter_box.png'),
          url(${img_url[imgNum]})`,
      "background-repeat": "no-repeat",
      "background-size": "cover",
    });
  }

  //setInterval(함수, 시간ms)
  setInterval(changeBg, 1000); // 1000 = 1초
});
