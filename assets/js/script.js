var imageArr=['magazine_layout1','magazine_layout2','magazine_layout3','magazine_layout4']
var cnt=0;
$(document).ready(function(){
  $(".next").off("click").on("click",nextFun);
  $(".prev").off("click").on("click",prevFun);
 function nextFun(){
		$(".prev").show()
		$(".prev_dis").hide()
		 if(cnt==imageArr.length-1){
			$(this).hide()
			 return;
		 }
		 if(cnt==imageArr.length-2){
		 $(".next").hide()
		 $(".next_dis").show()
		 }
		 cnt++;
		 $(".img").attr("src","assets/images/"+imageArr[cnt]+".jpg")
	} 
	function prevFun(){
		 $(".next").show()
		 $(".next_dis").hide()
		 if(cnt==0){
		 $(this).hide();
		 return;
		 }
		 if(cnt==1){
		 $(".prev").hide()
		  $(".prev_dis").show()
		 }
		 cnt--;
		 $(".img").attr("src","assets/images/"+imageArr[cnt]+".jpg")
	} 
	   
})