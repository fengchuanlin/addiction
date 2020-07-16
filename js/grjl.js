$(document).ready(function() {
	$("#min_img").click(function() {
		var _this = $(this); //将当前的min_img元素作为_this传入函数
		imgShow("#outerdiv", "#innerdiv", "#max_img", _this);
	});
});



