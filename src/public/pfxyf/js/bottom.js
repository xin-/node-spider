// JavaScript Document
function dragFalse(){return false;}
for(i in document.images)document.images[i].ondragstart=dragFalse;
for(i in document.links)document.links[i].ondragstart=dragFalse;

function showAW(t){
	if($(".cover").length<1){
		$("body").append('<div class="cover"></div>')
	}
	$(".cover").show();
	var tw = $(t).outerWidth();
	var th = $(t).outerHeight();
	if($(t).is(".awb")){
		$(t).animate({"bottom":0},200);
	}else{
		$(t).css({"margin-left":-tw*0.5+"px","margin-top":-th*0.5+"px"}).show();
	}
}
function hideAW(t){
	$(".cover").hide();
	$(t).hide();
}
$(function(){ 
	//弹出键盘的时候重定位bottom 
    var winHeight = $(window).height();
    $(window).resize(function(){  
        if($(window).height()<winHeight-200){
			$(".bottom").css("position","static");
			$(".bottom").prev().hide();
		}else{
			$(".bottom").css("position","fixed");
			$(".bottom").prev().show();
		}
    });  
})  
$(function(){
	//tab
	$(".jsTab").each(function(){
		$(this).children().each(function(){
			$(this).click(function(){
				var t = $(this);
				t.addClass("sel").siblings().removeClass("sel");
				if(t.parent().attr("target")!==""){
					$(t.parent().attr("target")).children().eq(t.index()).show().siblings().hide();
				}
			});
		});
	});
	//checkBox <span class="checkBox"><input type="check"></span>
	if($(".checkBox").length>0&&$(".checkBoxStyle").length<1){
		$("body").append('<div class="checkBoxStyle"><style>.checkBox{ vertical-align:middle; width:30px; height:30px; border:solid 2px #DDD; border-radius:5px; display:inline-block; position:relative; z-index:100;}.checkBoxSel{border:solid 2px #F00;}.checkBox input{ position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:100; opacity:0;}.checkBox em{ display:block; width:10px; height:18px; border-bottom:solid 2px #F00; border-right:solid 2px #F00; transform:rotate(45deg); margin:2px 0px 0px 8px;}</style></div>');
	}
	$(".checkBox").each(function(){
		if($(this).find("em").length<1){$(this).append("<em></em>")}
		if($(this).find("input").is(":checked")){
			$(this).find("em").show();
			$(this).addClass("checkBoxSel");
		}else{
			$(this).find("em").hide();
			$(this).removeClass("checkBoxSel");
		}
		$(this).change(function(){
			if($(this).find("input").is(":checked")){
				$(this).find("em").show();
				$(this).addClass("checkBoxSel");
			}else{
				$(this).find("em").hide();
				$(this).removeClass("checkBoxSel");
			}
		});
	});
	//圆环进度条
	//格式如下 除class外均可缺省 例<div class="ring"></div>
	//<div class="ring" bg="#EEE" rc="#E33" c="#333" size="150" num="90"></div>
	$(".ring").each(function(){
		var size = $(this).attr("size");
		var bg = $(this).attr("bg");
		var rc = $(this).attr("rc");
		var c = $(this).attr("c");
		var p = $(this).attr("num");
		if(!size){size="100";}
		if(!bg){bg="#DDD";}
		if(!rc){rc="#333";}
		if(!c){c="#333";}
		if(!p){p="0";}
		var p2=p;
		if(p2>100){p2=100;}
		var r=parseInt(3.6*p2);
		$(this).css({"position":"relative","z-index":"100","overflow":"hidden","border-radius":"999px","width":size,"height":size,"background":bg})
		$(this).append("<div></div><div></div><div></div><div></div>")
		$(this).find("div").eq(0).css({"position":"absolute","top":"0px","left":"0px","width":size,"height":size,"clip":"rect(0px "+size*0.5+"px "+size+"px 0px)","background":rc,"transition":"all 0.3s linear 0s","transform":"rotate(180deg)"});
		$(this).find("div").eq(1).css({"position":"absolute","top":"0px","left":"0px","width":size,"height":size,"clip":"rect(0px "+size+"px "+size+"px "+size*0.5+"px)","background":rc});
		$(this).find("div").eq(2).css({"position":"absolute","top":"0px","left":"0px","width":size,"height":size,"clip":"rect(0px "+size*0.5+"px "+size+"px 0px)","background":bg});
		$(this).find("div").eq(3).css({"position":"absolute","top":"50%","left":"50%","background":"#FFF","text-align":"center","border-radius":"999px","width":size*0.8,"height":size*0.8,"margin":"-"+size*0.4+"px 0px 0px -"+size*0.4+"px","font-size":size*0.2,"line-height":size*0.8+"px","color":c});
		if(r>180){
			$(this).find("div").eq(2).hide();
		}else{
			$(this).find("div").eq(1).hide();
		}
		$(this).find("div").eq(0).css("transform","rotate("+r+"deg)");
		$(this).find("div").eq(3).html(p+"%");
	});
})