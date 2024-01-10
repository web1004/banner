$(document).ready(function(){

  let bnum =0;

  //다음보기
  $(".ban_btn .ban_right").click(function(){    

    if(bnum<6){
      $(".ban ul").stop().animate({left:"-=260px"},500);    
      bnum++;

      //이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(bnum==0){
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum==6){
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }

  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){

    if(bnum>0){
      $(".ban ul").stop().animate({left:"+=260px"},500);    
      bnum--;

      //이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(bnum==0){
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }
      if(bnum==6){
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      }else{
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }

  });

});