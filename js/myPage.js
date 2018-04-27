$(function(){
	//每一屏的高度
	var h = $(window).height();
	// var flag = false; //控制动画
	// 点击next 往下播放一屏幕
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
	$('#fullpage').fullpage({
		navigation: true,
		// loopBottom: true,
		afterLoad:function(anchorLink, index){
			if(index ==2){
				$(".next").fadeOut();
				//首先搜索框显示
				$('.search').show().animate({"right":350},1500,function(){
					//方块走进来，沙发显示
					$('.search-words').show().animate({"opacity":1},500,function(){
						//走进来的方块隐藏
						$('.search').hide();
						//埋伏的方块显示
						$('.search02').show().animate({"height":30,"right":200,"bottom":450},1000,function(){
							// flag = true;  //表示所有动画执行完毕
						});
						//同时 沙发图显示  变大
						$('.goods-441').show().animate({"height":218},1000);   						
						//同时，文字改变
						$('.words-02').animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						});
					});

				});
			}
		},
		onLeave:function(index, nextIndex, direction){
			$(".next").fadeOut();
			if(index == 2 && nextIndex == 3){
				
				$('.shirt-02').show().animate({"bottom":-(h-250),"width":207,"left":216},2000,function(){
						$('.img-01-a').show().animate({"opacity":1},500,function(){
							$('.btn-01-a').show().animate({"opacity":1},1000,function(){
								$(".next").fadeIn();
							});
						});
				});
				$('.cover').show();
			}
			if(index == 3 && nextIndex == 4){
			
				$('.shirt-02').hide();
				$('.t1f-03').show().animate({"bottom":-((h-250)+10),"left":250},1000,function(){
					$(this).hide();
					$('.t1f-04').show();
					$('.car').animate({"left":"120%"}, 2500, "easeInElastic",function(){
						$('.t1').show();
						$('.t1s').animate({"opacity":1},1000);
						$('.words-04-a').animate({"opacity":1},1000,function(){
							$(".next").fadeIn();
						});
					});
				});
			}
			if(index == 4 && nextIndex == 5){
			
				$('.hand-05').animate({"bottom":0},1000,function(){
					$('.mouse-05-a').show();
					//沙发掉下来
					$('.t1f-05').show().animate({"bottom":180},800,function(){
						//发票出来
						$(this).hide();
						$('.order-05').animate({"bottom":390},1000,function(){
							$('.words-05').addClass("animated zoomInLeft").animate({"opacity":1},500,function(){
								$(".next").fadeIn();
							});
						});
					});
					
				});
			}
			if(index == 5 && nextIndex == 6){
			
				$('.t1f-05').show().animate({"bottom":-(h - 550),"height":"7%","left":"37%"},1500,function(){
					$('.t1f-05').hide();
				});
				$('.box').animate({"left":"35%"},1500,function(){
					$(this).animate({"bottom":10},500,function(){
						$(this).hide();
						//背景走相当于车走
						$('.section6').animate({"backgroundPositionX":"100%"},4000,function(){
							//小男孩从车里出来
							$('.boy').show().animate({"bottom":116,"height":305},1000,function(){
								//向右走500px
								$(this).animate({"right":500},500,function(){
									//门打开，女孩出来
									$('.door').animate({"opacity":1},500,function(){
										$('.girl').show().animate({"height":306},500,function(){
											//显示请收货的文字
											$('.pop-066').animate({"opacity":1},500,function(){
												$(".next").fadeIn();
											});
										});
									});
									
								});
							});
						});
						$('.pop-06').show();
						$('.words-06-a').animate({"opacity":1,"left":300},4000,"easeInOutBounce");
					})
				});
			}
			if(index == 6 && nextIndex == 7){
			
				setTimeout(function(){
					$('.star').animate({"width":200},1000,function(){
						$('.good-07').show();
						$(".next").fadeIn();
					});
				}, 1000);
			}
	
			/*第八屏幕*/
			$('.beginShopping').hover(function() {
				$('.btn-08-a').toggle();	
			});
			//手跟随鼠标移动
			$(document).mousemove(function(event) {
				var x = event.pageX - $('.hand-08').width()/2 + 10;
				var y = event.pageY+5;
				var minY = h - 450;
				if(y<minY){
					y = minY;
				}
				$('.hand-08').css({"left":x,"top":y});
			});
			//回到顶部
			$('.again').click(function(event) {
				// alert(11);
				$.fn.fullpage.moveTo(1);//回到第一屏幕
				//要将所有的动画效果全部清零，回到最初状态
				//原理就是将所有的style属性的值变为空
				$('img,.move').attr("style","");
				$('.section6').animate({"backgroundPositionX":"0%"},100);
				$('.words-05').removeClass("animated zoomInLeft")
			});
		}
	});
});