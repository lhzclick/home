var mainCdy = {};
$(function(){
	mainCdy.init();
})

//	初始化函数
mainCdy.init = function(){
	mainCdy.clickFn();
};
mainCdy.clickFn = function(){
	$('.box').on('click',function(){
		alert('点击事件')
	});
};