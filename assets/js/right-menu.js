$(document).ready(function(){
	//左侧导航展开效果
	$("#right-nav li.nav-li").live("click",
		function(){
			$(this).next("li.nav-li-li").slideToggle();
			//alert($(this).next("ul").html());
			$(this).toggleClass("on");
			}
		);
    $("#right-nav2 li.nav-li").live("click",
   		function(){
   			$(this).next("li.nav-li-li").slideToggle();
   			//alert($(this).next("ul").html());
   			$(this).toggleClass("on");
   			}
   		);
		});
