$(document).ready(function(){

  //하단 footTop 배너 자동전화효과 함수생성___________
  let foldidx=0;
  let fidx=0;

  function footBanner(){     
    fidx++;
    if(fidx>5){ 
      fidx=0;
    }

    $(".view1 ul li").eq(foldidx).stop().fadeOut(300);
    $(".view1 ul li").eq(fidx).stop().fadeIn(300);  
    foldidx=fidx; 
  };
  setInterval(footBanner,4000);


  //하단 footTop 배너 UpDown_________________________
  $(".timebanner .view2").hide();

  chk1=true;

  $(".timebanner .shapeUp").click(function(){

    if(chk1){
      $(".shapeUp").html("<span class='material-symbols-outlined up'>expand_more</span>");
      $("#foot_banner").stop().animate({bottom:"0px"},500);
      $(".timebanner .view2").show();
      $(".timebanner .view1").hide();
      chk1=false;
    }else{
      $(".shapeUp").html("<span class='material-symbols-outlined up'>expand_less</span>");
      $("#foot_banner").stop().animate({bottom:"-140px"},500);
      $(".timebanner .view2").hide();
      $(".timebanner .view1").show();   
      chk1=true;
    }

  });


  //하단 footBottom 고정배너 UpDown__________________
  chk2=true;

  $(".footBottom .shapeDown").click(function(){

    if(chk2){
      $(".shapeDown").html("<span class='material-symbols-outlined down'>expand_more</span>");
      $(".footBottom").stop().animate({bottom:"-85px"},500);
      chk2=false;
    }else{
      $(".shapeDown").html("<span class='material-symbols-outlined down'>expand_less</span>");
			$(".footBottom").stop().animate({bottom:"0px"},500);
			chk2=true;
    }
    
  });

});