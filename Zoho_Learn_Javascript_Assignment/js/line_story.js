var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
table();

	var head_height=30;
	var face_width=60;
	var ear_height=10;
	var ear_width=10;
	var face_height=head_height;
var beararray=[];
var beararrayRight = [];
var slide=1;
var degree = [-30,-25,-15,-10,-5,0,5,10,15,25,30];
id=setInterval(animate,800);

function animate(){
	var a1 = degree[Math.ceil(Math.random()*10)];
	var a2 = degree[Math.ceil(Math.random()*10)];
	var a3 = degree[Math.ceil(Math.random()*10)];
	var a4 = degree[Math.ceil(Math.random()*10)];

	if(slide===1)
	{
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,460,"#91BED4",a4);

		drawbear(940,180,"#FFA300",a1);//hero
		drawbear(940,250,"#91BED4",a3);
		drawbear(940,320,"#91BED4",a2);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a1);

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a3);
		slide=2;

	}
		else if(slide===2)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a1);

		drawbear(840,180,"#FFA300",a3);//hero
		drawbear(940,250,"#91BED4",a2);
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a3);

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(940,580,"#B6785A",a4);
		slide=3;

	}
	else if(slide===3)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,460,"#91BED4",a1);

		drawbear(540,180,"#FFA300",a4);//hero
		drawbear(940,250,"#91BED4",a4);
		drawbear(940,320,"#91BED4",a2);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a1);

		
		drawbear(280,580,"#B6785A",a3);
		drawbear(940,580,"#B6785A",a2);
		slide=4;

	}
		else if(slide===4)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a2);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a3);

		drawbear(280,180,"#FFA300",a2);//hero
		drawbear(940,250,"#91BED4",a1);
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a3);
		drawbear(940,460,"#91BED4",a2);

		
		drawbear(280,580,"#B6785A",a1);
		drawbear(940,580,"#B6785A",a4);
		slide=5;

	}
	else if(slide===5)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,460,"#91BED4",a4);

		drawbear(280,180,"#FFA300",a2);//hero
		drawbear(940,250,"#91BED4",a1);
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a4);
		drawbear(1040,460,"#91BED4",a2);

		
		drawbear(280,580,"#B6785A",a3);
		drawbear(940,580,"#B6785A",a1);
		slide=6;

	}
		else if(slide===6)
	{
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,460,"#91BED4",a3);

		drawbear(280,180,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a2);
		drawbear(1140,460,"#91BED4",a3);

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a1);
		slide=7;

	}
			else if(slide===7)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,460,"#91BED4",a4);

		drawbear(280,180,"#FFA300",a3);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a2);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a2);
		slide=8;

	}
		else if(slide===8)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a2);

		drawbear(580,220,"#FFA300",a3);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(940,580,"#B6785A",a4);
		slide=9;

	}
		else if(slide===9)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,250,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a2);

		drawbear(940,240,"#FFA300",a1);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(940,580,"#B6785A",a1);
		slide=10;

	}
			else if(slide===10)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,460,"#91BED4",a1);
		drawbear(180,460,"#91BED4",a3);

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a2);
		drawbear(940,390,"#91BED4",a1);
		drawbear(940,460,"#91BED4",a4);
		

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(940,580,"#B6785A",a1);
		slide=11;

	}
				else if(slide===11)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,100,"#91BED4",a3);
		drawbear(280,160,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a4);
		drawbear(80,460,"#91BED4",a1);

		drawbear(640,240,"#FFA300",a2);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a1);
		drawbear(940,580,"#B6785A",a2);
		slide=12;

	}
					else if(slide===12)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,200,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a4);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,460,"#91BED4",a4);

		drawbear(440,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a3);
		drawbear(940,580,"#B6785A",a1);
		slide=13;

	}
						else if(slide===13)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,100,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a1);
		drawbear(280,460,"#91BED4",a2);
		drawbear(180,460,"#91BED4",a1);

		drawbear(440,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a2);
		drawbear(940,390,"#91BED4",a1);
		drawbear(940,460,"#91BED4",a4);
		

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(940,580,"#B6785A",a4);
		slide=14;

	}
							else if(slide===14)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,100,"#91BED4",a2);
		drawbear(280,200,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a4);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,460,"#91BED4",a3);
		

		drawbear(640,240,"#FFA300",a2);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a3);
		slide=15;

	}
		else if(slide===15)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,140,"#91BED4",a3);
		drawbear(280,200,"#91BED4",a2);
		drawbear(280,260,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a4);
		drawbear(180,460,"#91BED4",a1);
		

		drawbear(940,240,"#FFA300",a3);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a4);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a1);
		slide=16;

	}
	else if(slide===16)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,200,"#91BED4",a3);
		drawbear(280,260,"#91BED4",a2);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,460,"#91BED4",a1);
		
		

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a3);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a4);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a1);
		slide=17;

	}
	else if(slide===17)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,200,"#91BED4",a2);
		drawbear(280,260,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a3);
		drawbear(180,460,"#91BED4",a1);
		
		

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a4);
		

		
		drawbear(280,580,"#B6785A",a3);
		drawbear(740,580,"#B6785A",a2);
		slide=18;

	}
	else if(slide===18)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,200,"#91BED4",a1);
		drawbear(280,260,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		
		
		

		drawbear(940,240,"#FFA300",a3);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a2);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(600,580,"#B6785A",a3);
		slide=19;

	}
	else if(slide===19)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,260,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,460,"#91BED4",a4);
		
		
		

		drawbear(940,240,"#FFA300",a1);//hero
		drawbear(940,320,"#91BED4",a2);
		drawbear(940,390),"#91BED4",a3;
		drawbear(940,460,"#91BED4",a2);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(600,480,"#B6785A",a1);
		slide=20;

	}
	else if(slide===20)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,260,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(180,460,"#91BED4",a4);
		
		
		

		drawbear(940,240,"#FFA300",a2);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a3);
		

		
		drawbear(280,580,"#B6785A",a2);
		drawbear(600,280,"#B6785A",a1);
		slide=21;

	}
	else if(slide===21)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,260,"#91BED4",a1);
		
		drawbear(280,390,"#91BED4",a1);
		drawbear(280,450,"#91BED4",a2);
		
		
		
		

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a3);
		drawbear(940,460,"#91BED4",a2);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(600,180,"#B6785A",a2);
		slide=22;

	}
	else if(slide===22)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,260,"#91BED4",a4);
		
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,450,"#91BED4",a1);

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a4);
		drawbear(940,460,"#91BED4",a2);
		

		
		drawbear(280,580,"#B6785A",a4);
		drawbear(600,80,"#B6785A",a2);
		slide=23;
	}
	else if(slide===23)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,260,"#91BED4",a4);
		
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,450,"#91BED4",a1);

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a4);
		
		drawbear(280,580,"#B6785A",a2);
		
		slide=24;

	}
	else if(slide===24)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,260,"#91BED4",a4);
		
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,450,"#91BED4",a2);

		drawbear(940,240,"#FFA300",a4);//hero
		drawbear(940,320,"#91BED4",a1);
		drawbear(940,390,"#91BED4",a2);
		drawbear(940,460,"#91BED4",a4);

		drawbear(280,580,"#B6785A",a4);
		
		slide=25;

	}
	else if(slide===25)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a1);
		
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a1);

		drawbear(940,240,"#FFA300",a3);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(640,290,"#91BED4",a2);
		drawbear(640,360,"#91BED4",a3);

		drawbear(280,580,"#B6785A",a1);
		
		slide=26;

	}
	else if(slide===26)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,260,"#91BED4",a4);
		
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a3);
		

		drawbear(940,240,"#FFA300",a1);//hero
		drawbear(940,320,"#91BED4",a3);
		drawbear(440,260,"#91BED4",a4);
		drawbear(440,320,"#91BED4",a2);
		
		
		drawbear(280,580,"#B6785A",a1);
		
		slide=27;

	}
	else if(slide===27)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,260,"#91BED4",a1);
		
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,450,"#91BED4",a2);
		
		
		drawbear(940,240,"#FFA300",a1);//hero
		drawbear(940,320,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a4);
		drawbear(280,200,"#91BED4",a2);
		
		drawbear(280,580,"#B6785A",a3);
		
		slide=28;

	}
		else if(slide===28)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,200,"#91BED4",a4);
		
		
		drawbear(280,260,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(180,450,"#91BED4",a2);
		

		drawbear(940,390,"#FFA300",a3);//hero
		drawbear(940,450,"#91BED4",a1);

		drawbear(280,580,"#B6785A",a2);
		
		slide=29;

	}
			else if(slide===29)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,200,"#91BED4",a4);
		drawbear(280,260,"#91BED4",a3);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,450,"#91BED4",a2);
		drawbear(80,450,"#91BED4",a1);
		

		drawbear(940,390,"#FFA300",a4);//hero
		drawbear(940,450,"#91BED4",a2);
		
		drawbear(280,580,"#B6785A",a1);
		
		slide=30;

	}
	else if(slide===30)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		
		drawbear(280,260,"#91BED4",a4);
		drawbear(280,320,"#91BED4",a1);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a3);
		drawbear(80,450,"#91BED4",a2);
	
		

		drawbear(940,390,"#FFA300",a1);//hero
		drawbear(940,450,"#91BED4",a3);
		
		drawbear(280,580,"#B6785A",a2);
		
		slide=31;

	}
		else if(slide===31)
	{

		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		
		drawbear(280,260,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a3);
		drawbear(280,450,"#91BED4",a1);

		drawbear(940,390,"#FFA300",a4);//hero
		drawbear(940,450,"#91BED4",a2);
		
		drawbear(280,580,"#B6785A",a3);
		
		slide=32;

	}
	else if(slide===32)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,260,"#91BED4",a1);
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a1);
		drawbear(280,450,"#91BED4",a4);

		drawbear(940,390,"#FFA300",a3);//hero
		drawbear(940,450,"#91BED4",a1);
		
		drawbear(280,580,"#B6785A",a4);
		
		slide=33;
	}
		else if(slide===33)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a2);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a3);
		drawbear(180,450,"#91BED4",a1);

		drawbear(540,390,"#FFA300",a2);//hero
		drawbear(940,450,"#91BED4",a3);
		
		drawbear(280,580,"#B6785A",a1);
		
		slide=34;
	}
	else if(slide===34)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a1);
		drawbear(80,450,"#91BED4",a2);

		drawbear(440,320,"#FFA300",a1);//hero
		drawbear(940,450,"#91BED4",a3);
		
		drawbear(280,580,"#B6785A",a4);
		
		slide=35;
	}
	else if(slide===35)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a1);
		drawbear(280,450,"#91BED4",a2);
		

		drawbear(280,260,"#FFA300",a1);//hero
		drawbear(940,450,"#91BED4",a4);
		
		drawbear(280,580,"#B6785A",a4);
		
		slide=36;
	}
	else if(slide===36)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a2);
		drawbear(280,450,"#91BED4",a1);
		

		drawbear(280,260,"#FFA300",a3);//hero
		drawbear(940,450,"#91BED4",a4);
		
		drawbear(280,580,"#B6785A",a1);
		drawbear(600,100,"#B6785A",a3);
		
		slide=37;
	}
		else if(slide===37)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a1);
		drawbear(180,450,"#91BED4",a3);
		

		drawbear(280,260,"#FFA300",a1);//hero
		drawbear(940,450,"#91BED4",a4);
		
		drawbear(280,580,"#B6785A",a2);
		drawbear(600,300,"#B6785A",a1);
		
		slide=38;
	}
			else if(slide===38)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a4);
		drawbear(280,390,"#91BED4",a1);
		drawbear(80,450,"#91BED4",a3);
		

		drawbear(280,260,"#FFA300",a2);//hero
		drawbear(940,450,"#91BED4",a1);
		
		drawbear(280,580,"#B6785A",a4);
		drawbear(600,580,"#B6785A",a3);
		
		slide=39;
	}
	else if(slide===39)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,320,"#91BED4",a3);
		drawbear(280,390,"#91BED4",a1);
		
		

		drawbear(280,260,"#FFA300",a2);//hero
		drawbear(940,450,"#91BED4",a1);
		
		drawbear(280,580,"#B6785A",a3);
		drawbear(800,580,"#B6785A",a4);
		
		slide=40;
	}
	else if(slide===40)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(280,390,"#91BED4",a4);
		drawbear(280,450,"#91BED4",a1);
		
		

		drawbear(280,320,"#FFA300",a2);//hero
		drawbear(940,450,"#91BED4",a3);
		
		drawbear(280,580,"#B6785A",a1);
		drawbear(940,580,"#B6785A",a4);
		
		slide=41;
	}
	else if(slide===41)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(600,390,"#91BED4",a1);
		drawbear(280,450,"#91BED4",a4);
		
		

		drawbear(280,320,"#FFA300",a3);//hero
		drawbear(1040,450,"#91BED4",a2);
		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a3);
		
		slide=42;
	}
	else if(slide===42)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(940,450,"#91BED4",a1);
		drawbear(280,450,"#91BED4",a3);
		
		

		drawbear(280,390,"#FFA300",a2);//hero
		
		
		drawbear(280,580,"#B6785A",a4);
		drawbear(940,580,"#B6785A",a1);
		
		slide=43;
	}
	else if(slide===43)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(940,450,"#91BED4",a2);
		drawbear(280,450,"#91BED4",a1);
		
		

		drawbear(280,390,"#FFA300",a4);//hero
		
		
		drawbear(280,580,"#B6785A",a3);
		drawbear(940,580,"#B6785A",a1);
		
		slide=44;
	}
	else if(slide===44)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(940,450,"#91BED4",a3);
		drawbear(80,450,"#91BED4",a4);
		
		

		drawbear(680,390,"#FFA300",a2);//hero
		
		
		drawbear(380,580,"#B6785A",a3);
		drawbear(940,580,"#B6785A",a1);
		
		slide=45;
	}
	else if(slide===45)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		
		drawbear(1040,450,"#91BED4",a1);
		
		
		

		drawbear(780,390,"#FFA300",a2);//hero
		
		
		drawbear(500,580,"#B6785A",a3);
		drawbear(640,580,"#B6785A",a4);
		
		slide=46;
	}
	else if(slide===46)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(780,390,"#FFA300",a4);//hero
		
		
		drawbear(600,380,"#B6785A",a3);
		drawbear(600,580,"#B6785A",a2);
		
		slide=47;
	}
	else if(slide===47)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(780,390,"#FFA300",a1);//hero
		
		
		drawbear(600,180,"#B6785A",a4);
		drawbear(600,280,"#B6785A",a2);
		
		slide=48;
	}
	else if(slide===48)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(780,390,"#FFA300",a4);//hero
		
		drawbear(600,180,"#B6785A",a2);
		
		slide=49;
	}
	else if(slide===49)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(780,390,"#FFA300",a1);//hero
		
		slide=50;
	}
	else if(slide===50)
	{
		//done nothing for the sake of spark
		c.clearRect(0,0,innerWidth,innerHeight);
		table();
		drawbear(500,390,"#FFA300",a2);//hero
		
		slide=1;
	}
		

	}



/*function drawbear(x,y,color){
		var init_xpos=x;
	var init_ypos=y;


	c.fillStyle =color;
		c.strokeStyle=color;
		c.beginPath();
		c.moveTo(init_xpos,init_ypos);
		c.bezierCurveTo(init_xpos, init_ypos-head_height, init_xpos+face_width, init_ypos-head_height, init_xpos+face_width, init_ypos);
		c.bezierCurveTo(init_xpos+face_width+ear_width, init_ypos, init_xpos+face_width+ear_width, init_ypos+ear_height, init_xpos+face_width, init_ypos+ear_height);
		c.bezierCurveTo(init_xpos+face_width, init_ypos+ear_height+face_height, init_xpos, init_ypos+ear_height+face_height, init_xpos, init_ypos+ear_height);
		c.bezierCurveTo(init_xpos-ear_width, init_ypos+ear_height, init_xpos-ear_width, init_ypos, init_xpos, init_ypos);
		c.fill();
		c.stroke();
}*/

function drawbear(x,y,color,rot){
	var init_xpos=0;
	var init_ypos=0;
	var move_x = x;
	var move_y = y;
	var rot;

rot=rot*(Math.PI/180);
		c.fillStyle =color;
		c.strokeStyle=color;
		c.beginPath();
		
		c.moveTo(x,y);
		c.bezierCurveTo(init_xpos*Math.cos(rot) - (init_ypos-head_height)*Math.sin(rot)+move_x, init_xpos*Math.sin(rot) + init_ypos-head_height*Math.cos(rot)+move_y, (init_xpos+face_width)*Math.cos(rot) - (init_ypos-head_height)*Math.sin(rot)+move_x, (init_xpos+face_width)*Math.sin(rot) + (init_ypos-head_height)*Math.cos(rot)+move_y, (init_xpos+face_width)*Math.cos(rot) - init_ypos*Math.sin(rot)+move_x, (init_xpos+face_width)*Math.sin(rot) + init_ypos*Math.cos(rot)+move_y);

		c.bezierCurveTo((init_xpos+face_width+ear_width)*Math.cos(rot) - init_ypos*Math.sin(rot)+move_x, (init_xpos+face_width+ear_width)*Math.sin(rot) + init_ypos*Math.cos(rot) +move_y, (init_xpos+face_width+ear_width)*Math.cos(rot) - (init_ypos+ear_height)*Math.sin(rot)+move_x, (init_xpos+face_width+ear_width)*Math.sin(rot) + (init_ypos+ear_height)*Math.cos(rot)+move_y, (init_xpos+face_width)*Math.cos(rot) - (init_ypos+ear_height)*Math.sin(rot)+move_x, (init_xpos+face_width)*Math.sin(rot) + (init_ypos+ear_height)*Math.cos(rot)+move_y);

		c.bezierCurveTo((init_xpos+face_width)*Math.cos(rot) - (init_ypos+ear_height+face_height)*Math.sin(rot)+move_x, (init_xpos+face_width)*Math.sin(rot) + (init_ypos+ear_height+face_height)*Math.cos(rot)+move_y , init_xpos*Math.cos(rot) - (init_ypos+ear_height+face_height)*Math.sin(rot)+move_x, init_xpos*Math.sin(rot) + (init_ypos+ear_height+face_height)*Math.cos(rot)+move_y, init_xpos*Math.cos(rot) - (init_ypos+ear_height)*Math.sin(rot)+move_x, init_xpos*Math.sin(rot) + (init_ypos+ear_height)*Math.cos(rot)+move_y);

		c.bezierCurveTo((init_xpos-ear_width)*Math.cos(rot) - (init_ypos+ear_height)*Math.sin(rot)+move_x, (init_xpos-ear_width)*Math.sin(rot)+ (init_ypos+ear_height)*Math.cos(rot)+move_y, (init_xpos-ear_width)*Math.cos(rot) - init_ypos*Math.sin(rot) +move_x, (init_xpos-ear_width)*Math.sin(rot) + init_ypos*Math.cos(rot)+move_y, init_xpos*Math.cos(rot) - init_ypos*Math.sin(rot)+move_x,  init_xpos*Math.sin(rot) + init_ypos*Math.cos(rot)+move_y);
		c.fill();
		c.stroke();
}

drawbear(600,200,"#66727A",15);


	function table(){
	c.fillStyle="#66727A";
c.fillRect(100, 500, 1200, 5);
c.fillStyle="#FF9800";
c.fillRect(250,500,130,50);
c.fillRect(900,500,130,50);
c.fillStyle="#66727A";
c.fillRect(150,500,100,150);
c.fillRect(1030,500,100,150);
c.beginPath();
c.arc(315,600,30,0,Math.PI*2,false);
c.fill();
c.strokeStyle="#66727A";
c.stroke();
c.beginPath();
c.arc(965,600,30,0,Math.PI*2,false);
c.fill();
c.stroke();

}