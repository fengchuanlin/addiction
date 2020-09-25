// 获得奖项
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	loop : true,
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper('.swiper-container')
var mySwiper = document.querySelector('.swiper-container').swiper
mySwiper.slideNext();


// 个人作品
$(function(){
	
	$(".zuop_ul li").click(function(){
		// 初始化
		$(".zuop_ul li").attr("class","fre");
		// 点击改变当前样式
		
		a=$(this).attr("id").substring(3,4);
		
		$(".cone").css("display","none");
		$("#div_"+a).css("display","flex");
	})
	
	
})

