var currentpage=1;
var x=document.getElementsByClassName("naruto_comics");
x[currentpage-1].style.display="block";
var toolbarpos=634/(x.length-1);
var tbm=document.getElementById("toolbarbuttonmove");

function firstpage(){
	turn_to_page(1);
}
function lastpage(){
	turn_to_page(x.length);
}

function turn_to_page(n)
{
	x[currentpage-1].style.display="none";
	currentpage=n;
	x[currentpage-1].style.display="block";
	common();
}
function previouspage()
{
	if(currentpage-1>0)
{
	x[currentpage-1].style.display="none";
	currentpage=currentpage-1;
	x[currentpage-1].style.display="block";
	common();
}
else
alert("That is the first page of the comic");
}
function nextpage(){
if(currentpage-1<x.length-1)
{
	x[currentpage-1].style.display="none";
	currentpage=currentpage+1;
	x[currentpage-1].style.display="block";
	common();
}
else
alert("That is the end of the comic");
}
function common()
{
tbm.style.left=(370+((currentpage-1)*toolbarpos))+'px';
	document.getElementById("current_page").textContent=currentpage;
	document.getElementById("toolbarbuttonmovenumber").textContent=currentpage;	
}
