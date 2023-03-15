$(document).ready(function(){

  let nold=0;

  //다음보기
  $(".nright").click(function(){

    val=nold+1;
		nnum=$(".news_list li").length; /*이미지 li의 개수선언 */
		
		if(val<nnum){ //이미지 전체개수보다 적으면 수행
			$(".news_list li").eq(nold).hide();
			$(".news_list li").eq(val).show();
			nold=val;
		}	

  });


  //이전보기
  $(".nleft").click(function(){

    val=nold-1;
		
		if(val>=0){ 
			$(".news_list li").eq(nold).hide();
			$(".news_list li").eq(val).show();
				nold=val;
		}

  });

});