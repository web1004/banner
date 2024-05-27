$(document).ready(function(){

  let nold = 0;
  let nnew = 0;
  nnum=$(".news_list li").length;

  //이전보기
  $(".nleft").click(function(){
    //0보다 큰 경우만 실행
    if(nnew > 0){
      nnew--;
      $(".news_list li").eq(nold).hide();
			$(".news_list li").eq(nnew).show();
			nold=nnew;
    };
  });

  //다음보기
  $(".nright").click(function(){
    //이미지 전체개수보다 적을때까지만 실행
    if(nnew < nnum-1){
      nnew++;
      $(".news_list li").eq(nold).hide();
			$(".news_list li").eq(nnew).show();
			nold=nnew;
    };
  });

});