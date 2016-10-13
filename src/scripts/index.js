//js入口文件

//引入swiper;
var Swiper = require("./components/swiper/swiper-3.3.1.min.js");

//引入swiper animate
var SwiperAnimate = require("./components/swiper/swiper.animate1.0.2.min.js");   //一定对animate.js里的方法进行接口暴露;
//引入zepto
//var $ = require("./components/zepto-modules/_custom");

//引入jquery
var $ = require("./common/libs/jquery-1.12.4.min.js");

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
		SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
    });


$.post("/api/skill",{},function(response){
	//console.log(response);
	var html="<ul>"
	for(var i=0;i<response.length;i++){
		html+="<li>"+response[i].name+"</li>";	
	}
	html+="</ul>";
	$("#list").html(html);
})





