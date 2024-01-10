$(document).ready(function(){

  let x=0;
  let s=-1;  //흘러가는 방향을 의미

  function motion(){
    x = x + s;
    if ( x < -300 ) { x = 0 };
		if ( x > 0 ) { x = -300 };

    $("#gall").css({left:x});
  };

  bauto = setInterval(motion,20);

  //오버시 멈춤
  $("#gall").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(motion,20);
  });

  //이전다음버튼
  $(".left").click(function(){
    s= -1;
  });
  $(".right").click(function(){
    s= 1;
  });

});