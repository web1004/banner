$(document).ready(function(){

  let x=0;
  let s=-1;  //흘러가는 방향을 의미

  function motion(){
    x = x + s;
    if ( x < -1300 ) { x = 0 };  /* 전체폭의 반(즉 1개의 총너비) */
		if ( x > 0 ) { x = -1300 };

    $(".banner_in").css({left:x});
  };

  bauto = setInterval(motion,20);

  //오버시 멈춤
  $(".banner_in").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(motion,20);
  });

  //이전다음버튼
  $(".ban_left").click(function(){
    s= -1;
  });
  $(".ban_right").click(function(){
    s= 1;
  });


});