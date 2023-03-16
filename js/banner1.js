$(document).ready(function(){

  //box1)아래에서 위로....
  $(".box1").hover(function(){
    $(".box1 li:first-child").stop().animate({marginTop:"-176px"},250);
  },function(){
    $(".box1 li:first-child").stop().animate({marginTop:"0px"},250);
  });

  //box2)위에서 아래로....
  $(".box2").hover(function(){
    $(".box2 li:first-child").stop().animate({marginTop:"0px"},250);
  },function(){
    $(".box2 li:first-child").stop().animate({marginTop:"-176px"},250);
  });

  //box3)오른쪽에서 왼쪽으로....
  $(".box3").hover(function(){
    $(".box3 li:first-child").stop().animate({marginLeft:"-176px"},250);
  },function(){
    $(".box3 li:first-child").stop().animate({marginLeft:"0px"},250);
  });

  //box4)왼쪽에서 오른쪽으로....
  $(".box4").hover(function(){
    $(".box4 li:first-child").stop().animate({marginLeft:"0px"},250);
  },function(){
    $(".box4 li:first-child").stop().animate({marginLeft:"-176px"},250);
  });

  //box5)여러개의 이미지목록....
  $(".box5 ul li").hover(function(){
    $(this).find(".text").stop().animate({bottom:"0px"});
  },function(){
    $(this).find(".text").stop().animate({bottom:"-120px"});
  });

});
