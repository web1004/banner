$(document).ready(function(){

  //자동으로 슬라이드 함수생성
  function bannerAuto(){

    $(".ban ul").stop().animate({marginLeft:"-=260px"},1000,function(){			
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });	

  }
  bauto=setInterval(bannerAuto,4000);

  

  //다음보기
  $(".ban_btn .ban_right").click(function(){

    clearInterval(bauto);

    $(".ban ul").stop(true,true).animate({marginLeft:"-=260px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

    bauto=setInterval(bannerAuto,4000);

  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){

    clearInterval(bauto);

    $(".ban ul").stop(true,true).animate({marginLeft:"+=260px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

    bauto=setInterval(bannerAuto,4000);

  });


  //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
  $(".ban").hover(function(){ 
		clearInterval(bauto);  
	}, function(){
		bauto=setInterval(bannerAuto,4000);
	});


}); 