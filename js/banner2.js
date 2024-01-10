$(document).ready(function(){

  let banner_w= $(".ban ul li").width()+10;  //배너간 오른쪽여백이 있는 겨우 여백만큼(10px) 더해줌

  $(".ban ul li:last").prependTo(".ban ul");
  //목록 마지막 이미지를 목록 안의 가장 앞으로 배치
  $(".ban ul").css({ left:-banner_w});
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기


  //다음보기
  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    $(".ban ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
  });

});