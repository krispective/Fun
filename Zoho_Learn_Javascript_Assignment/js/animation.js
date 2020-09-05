
var i=0,j=500;  
var flag=0;
var pause_switch=0;
var intervalID = [];
var elem = document.getElementById("myAnimation");  

function pac_play()
{
	intervalID.push(window.setInterval(loop,10));
}

function pac_reset(){
	i=0;j=500;
	flag=0;
	pause_switch=0;
	window.clearInterval(intervalID.pop());
	//var intervalID = [null];
	elem.style.top=0 + 'px';
	elem.style.left = 500 + 'px';
}
function pac_pause(){
	if(pause_switch==0)
	{
		window.clearInterval(intervalID.pop());
		pause_switch=1;
	}
	else if(pause_switch==1)
	{
		pause_switch=0;
		if(flag==1)
		{
			intervalID.push(window.setInterval(loop,10));
		}
		else if(flag==2)
		{
			intervalID.push(window.setInterval(loop2,10));
		}
		else if(flag==3)
		{
			intervalID.push(window.setInterval(loop3,10));
		}
		else if(flag==4)
		{
			intervalID.push(window.setInterval(loop4,10));
		}
		else if(flag==5)
		{
			intervalID.push(window.setInterval(loop5,10));
		}
		else if(flag==6)
		{
			intervalID.push(window.setInterval(loop6,10));
		}
	}

}	

function loop()
{

	flag=1;
	if(i<=350)
		elem.style.top=i++ + 'px';
	else
	{
		window.clearInterval(intervalID.pop());
		intervalID.push(window.setInterval(loop2,10));	
	}
}
function loop2()
{
	
	flag=2;
	if(i>=175)
	{
		elem.style.top = i-- + 'px';
	}
	else
		{  
			window.clearInterval(intervalID.pop());
	intervalID.push(window.setInterval(loop3,10));
			
		}
}
function loop3()
{
	
	flag=3;
	if(j<=700)
		{	
		elem.style.left = j++ + 'px';
	}
	else
	{
		window.clearInterval(intervalID.pop());
	intervalID.push(window.setInterval(loop4,10));
	}
}
function loop4()
{
	flag=4;
	if(j>=300)
	{
		elem.style.left = j-- + 'px';
	}
	else
	{
		window.clearInterval(intervalID.pop());
	intervalID.push(window.setInterval(loop5,10));
	}
}
function loop5()
{
	flag=5;
	if(j<=500)
	{
		elem.style.left = j++ + 'px';
	}
	else
	{  
		
	window.clearInterval(intervalID.pop());
	intervalID.push(window.setInterval(loop6,10));
		
	}
}
function loop6()
{
	flag=6;
	if(i>=0)
	{
		elem.style.top = i-- + 'px';
	}
	else
	{	
		window.clearInterval(intervalID.pop());
	intervalID.push(window.setInterval(loop,10));

	}
}




