
var rom_det=[
{n:1,r:"I"},{n:2,r:"II"},{n:3,r:"III"},{n:4,r:"IV"},{n:5,r:"V"},{n:6,r:"VI"},{n:7,r:"VII"},{n:8,r:"VIII"},{n:9,r:"IX"},{n:10,r:"X"},{n:20,r:"XX"},{n:30,r:"XXX"},{n:40,r:"XL"},{n:50,r:"L"},{n:60,r:"LX"},{n:70,r:"LXX"},{n:80,r:"LXXX"},{n:90,r:"XC"},{n:100,r:"C"},{n:200,r:"CC"},{n:300,r:"CCC"},{n:400,r:"CD"},{n:500,r:"D"},{n:600,r:"DC"},{n:700,r:"DCC"},{n:800,r:"DCCC"},{n:900,r:"CM"},{n:1000,r:"M"}];
var v=0,t=0,d=0,m=0,k=0;
var no_digits=0;
var roman="";
var rom_str="";

function find_roman(){
	
v=document.getElementById("num").value;
t=v;
while(t>0)
{
	t=Math.floor(t/10);
	no_digits++;
}
t=v;
while(v>0)
{
	d=Math.floor(v/Math.pow(10,no_digits-1));
	k=d*Math.pow(10,no_digits-1);
	search(k);
	v=v%Math.pow(10,no_digits-1);
	no_digits--;
}
function search(k)
{
	for(var i=0;i<rom_det.length;i++)
	{
		if(rom_det[i].n===k)
			{
				roman=roman.concat(rom_det[i].r);
			}
	}
}

alert(roman);
}

function find_num(){
	var result_num=0;
	var pos=0;

var rom_str=document.getElementById("rom").value;

if(rom_str[pos]==="M")
{
	pos=1;
	result_num=1000;
}
if((rom_str[pos]==="C")||(rom_str[pos]==="D"))
{
	if(rom_str[pos]==="C")
	{
		if(rom_str[pos+1]==="C")
		{
			if(rom_str[pos+2]==="C")
			{
				pos=3;
				result_num=3*100;
			}
			else
			{
				pos=2;
				result_num=2*100;
			}
		}
		else if(rom_str[pos+1]==="D")
		{
			pos=2;
			result_num=4*100;
		}
		else if(rom_str[pos+1]==="M")
		{
			pos=2;
			result_num=9*100;
		}
		else
		{
		pos=1;
		result_num=1*100;
		}

	}
	else if(rom_str[pos]==="D")
		{
		if(rom_str[pos+1]==="C")
		{
			if(rom_str[pos+2]==="C")
			{
				if(rom_str[pos+3]==="C")
				{
					result_num=8*100;
					pos=4;
				}
				else
				{
					pos=3;
					result_num=7*100;
				}
			}
			else{
				pos=2;
				result_num=6*100;
			}
		}
		else
			{
				pos=1;
				result_num=5*100;
			}
	}
	else
		alert("Invalid Roman Number at first");
}

if((rom_str[pos]==="L")||(rom_str[pos]==="X"))
{
	if(rom_str[pos]==="X")
	{
		if(rom_str[pos+1]==="X")
		{
			if(rom_str[pos+2]==="X")
			{
				pos=pos+3;
				result_num=result_num+30;
			}
			else
			{
				pos=pos+2;
				result_num=result_num+20;
			}
		}
		else if(rom_str[pos+1]==="L")
		{
			pos=pos+2;
			result_num=result_num+40;
		}
		else if(rom_str[pos+1]==="C")
		{
			pos=pos+2;
			result_num=result_num+90;
		}
		else
		{
			pos=pos+1;
			result_num=result_num+10;
		}

	}
	else if(rom_str[pos]==="L")
	{
		if(rom_str[pos+1]==="X")
		{
			if(rom_str[pos+2]==="X")
			{
				if(rom_str[pos+3]==="X")
				{
					result_num=result_num+80;
					pos=pos+4;
				}
				else
				{
					pos=pos+3;
					result_num=result_num+70;
				}
			}
			else{
				pos=pos+2;
				result_num=result_num+60;
			}
		}
		else
			{
				pos=pos+1;
				result_num=result_num+50;
			}
	}
	else
		alert("Invalid Roman Number at second");
}

if((rom_str[pos]==="I")||(rom_str[pos]==="V"))
{
	if(rom_str[pos]==="I")
	{
		if(rom_str[pos+1]==="I")
		{
			if(rom_str[pos+2]==="I")
			{
				pos=pos+3;
				result_num=result_num+3;
			}
			else
			{
				pos=pos+2;
				result_num=result_num+2;
			}
		}
		else if(rom_str[pos+1]==="V")
		{
			pos=pos+2;
			result_num=result_num+4;
		}
		else if(rom_str[pos+1]==="X")
		{
			pos=pos+2;
			result_num=result_num+9;
		}
		else
		{
			pos=pos+1;
			result_num=result_num+1;
		}

	}
	else if(rom_str[pos]==="V")
	{
		if(rom_str[pos+1]==="I")
		{
			if(rom_str[pos+2]==="I")
			{
				if(rom_str[pos+3]==="I")
				{
					result_num=result_num+8;
					pos=pos+4;
				}
				else
				{
					pos=pos+3;
					result_num=result_num+7;
				}
			}
			else{
				pos=pos+2;
				result_num=result_num+6;
			}
		}
		else
			{
				pos=pos+1;
				result_num=result_num+5;
			}
	}
	else
		alert("Invalid Roman Number at third");
}

alert(result_num);
}

