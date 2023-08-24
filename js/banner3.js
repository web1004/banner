$(document).ready(function(){

  //다음보기
  $(".ban_btn .ban_right").click(function(){

    $(".ban ul").stop(true,true).animate({marginLeft:"-=260px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){

    $(".ban ul").stop(true,true).animate({marginLeft:"+=260px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

  });

});