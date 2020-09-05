function runclick(picid,imgval){

	document.getElementById('title_'+picid).innerHTML=details.org_name[imgval];
	document.getElementById('ceo_name_'+picid).innerHTML=details.ceo_name[imgval];
	document.getElementById('yos_'+picid).innerHTML=details.yostart[imgval];
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hbo_slider_img");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if(e.keyCode==38)
    	plusDivs(1);
    else if(e.keyCode==40)
    	plusDivs(-1);
}

document.getElementById("hbo_modal").onclick = function (e) {

  if (e.button == 3) 
    plusDivs(1);
  else
  	plusDivs(-1);
 
}

var details={
		org_name:['Dominoes','Barbeque','Puma','KFC','Subway','McDonald','Cream Stone','Levis','pizzahut','HBO'],
		ceo_name:['Tom Monaghan‎ & James Monaghan','Kayum Razak Dhanani','Kering','Harland Sanders','Fred DeLuca‎; ‎Peter Buck','‎Richard and Maurice','Donald Sutherland Susan Sutherland','Levi Stratuss','Dan Carney Frank Carney','Time Warner'],
		yostart:['June 10, 1960','January 2006','1948; 69 years ago','2015','August 28, 1965','May 15,1940','1988','May 1, 1853; 164 years ago','June 15, 1958','November 8, 1972; 44 years ago'],


	};
