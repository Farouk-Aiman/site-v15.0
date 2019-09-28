/*global $, window, document*/

(function () {
	'use strict';
	$(".icon").click(function () {
		$(".mainManu").fadeToggle(500);
	});
	
	$(".mainManu").click(function () {
		$(this).fadeOut(500);
	});
	
	$(".Home").click(function () {
		$("html , body").animate({
			scrollTop: 0
		}, 1000);
	});
	
	$(".Features").click(function () {
		$("html , body").animate({
			scrollTop: $("#Features").offset().top - $(".topNav").height() - 30
		}, 1000);
	});
	
	$(".Get-Start").click(function () {
		$("html , body").animate({
			scrollTop: $("#Get-Start").offset().top - $(".topNav").height() - 30
		}, 1000);
	});
	
	$(".Sign-Up").click(function () {
		$(".sign").animate({
			marginTop : 0
		}, 1000);
		$(".sign form").delay(700).animate({
			left: 0
		}, 1000);
		$(".sign form .input").delay(800).animate({
			marginLeft : 20
		}, 1300);
		
		$(".sign form button").delay(2000).show(1300);
		
	});
	
	$(".notNow").click(function (e) {
		e.preventDefault();
		$(".sign").animate({
			marginTop : -1000
		});
		
		$(".sign form").animate({
			left: -2000
		});
		
		$(".sign form .input").animate({
			marginLeft : 5000
		});
		
		$(".sign form button").hide();
	});
	$(window).scroll(function () {
		
		if ($(window).scrollTop() > 200) {
			$(".top").fadeIn(500);
			$(".topNav").css({
				"position" : "fixed",
				"width" : "100%",
				"top" : 0,
				"padding": "10",
				"color" : "#000",
				"background-color": "#181F2B",
				"border-bottom" : "1px #EEE solid",
				"z-index" : "555"
				
			}, 500);
		} else {
			$(".top").fadeOut(500);
			$(".topNav").css({
				"position" : "static",
				"background": "none",
				"border-bottom" : "none"
			}, 500);
		}
	});
	
	$(".top").click(function () {
		$("html , body").animate({
			scrollTop: 0
		}, 1000);
	});
	
	$(".addMore").click(function () {
		var myDiv = document.createElement("div"),
			myDiv1 = document.createElement("div"),
			myImg = document.createElement("img"),
			myH3 = document.createElement("h3"),
			myP = document.createElement("p"),
			myH3T = document.createTextNode("Prodect One"),
			myPT = document.createTextNode("Download the starter code and go through the README file");
		myImg.setAttribute("src", "images/profile-1.jpg");
		myH3.appendChild(myH3T);
		myP.appendChild(myPT);
		myDiv.setAttribute("class", "col-md-4");
		myDiv1.setAttribute("class", "prod1");
		
		$(".products .container .row").append(myDiv);
		$(myDiv).append(myDiv1);
		
		if ($(".products .container .row > div:empty")) {
			$(".products .container .row div div:empty").append(myImg).append(myH3).append(myP);
		}
		
		
	});

}());
