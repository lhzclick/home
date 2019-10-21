(function(){
	//	生成时间戳
	var changeFlag = 'v=' + new Date().getTime();
	
	//	引入css
	var cssNode = '';
		cssNode += '<link rel="stylesheet" href="index.css?'+changeFlag+'">';
		cssNode += '<link rel="stylesheet" href="test.css?'+changeFlag+'">';
	$('head').append(cssNode);
	
	// 引入js
	var jsNode = ''
		jsNode += '<script src="index.js?'+changeFlag+'"></script>';
	$('body').append(jsNode);
})()