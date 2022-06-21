// 이미지 변경 함수
const img_url = [
    'images/img01.jpg', 
    'images/img02.jpg', 
    'images/img03.jpg',
    'images/img04.jpg',
    'images/img05.jpg',
    'images/img06.jpg'
  ];

  $(function() {
    
    function changeBg() {

      // 0 ~ 2 랜덤값 생성(이미지 번호)
      // Math.floor를 사용해서 소숫점자리가 사라짐
      let imgNum = Math.floor(Math.random() * 6);

      // 이미지 변경
      $('body').css({
          'background': `url('images/filter_box.png'),
          url(${img_url[imgNum]})`, 'background-repeat': 'no-repeat',
          'background-size': 'cover'
      });
    };

    //setInterval(함수, 시간ms)
    setInterval(changeBg, 1000);    // 1000 = 1초

  });




