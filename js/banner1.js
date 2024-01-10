$(document).ready(function(){

  let nold=0;
  nnum=$(".news_list li").length;

  //다음보기
  $(".nright").click(function(){
    nnew=nold+1;
    if(nnew<nnum){ //이미지 전체개수보다 적으면 수행
      $(".news_list li").eq(nold).hide();
			$(".news_list li").eq(nnew).show();
			nold=nnew;
    };
  });

  //이전보기
  $(".nleft").click(function(){
    nnew=nold-1;
    if(nnew>=0){ 
      $(".news_list li").eq(nold).hide();
			$(".news_list li").eq(nnew).show();
			nold=nnew;
    };
  });

});