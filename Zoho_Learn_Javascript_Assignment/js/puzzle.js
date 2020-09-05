var a=[1,3,2];
var picpresent = [2,1,1,1,1,1,1,1,1,0];
var vx=400,vy=400;
var vel=5;
var id,id2,id3,id4,id5,id6,id7,id8,id9;
 var random_choice;
var pos=[];
pos[0] ={x:0,y:0};
pos[1] ={x:0,y:0};
pos[2] ={x:0,y:0};
pos[3] ={x:0,y:0};
pos[4] ={x:0,y:0};
pos[5] ={x:0,y:0};
pos[6] ={x:0,y:0};
pos[7] ={x:0,y:0};
pos[8] ={x:0,y:0};
pos[9] ={x:0,y:0};


document.getElementById("r3c3").style.display="none";
function display(t,l,w,h,u,q)
{
var image=document.getElementById("r"+u+"c"+q);
image.style.background="url(Images/puz3.jpg) "+t+'px '+l+'px';
image.style.width=w + 'px';
image.style.height = h+ 'px';
}
  
function put_image()
{
for(var i=0;i<3;i++)
{
  for(var j=0;j<3;j++)
    {
        display(i*200,j*200,200,200,a[j],a[i]);
    }
}
}

put_image();
function shuffle()
{
 random_choice = Math.ceil(Math.random()*5);
  console.log(random_choice);
if(random_choice===1)
{
  a=[1,2,3];
  put_image();
}
else if(random_choice===2)
{
  a=[2,1,3];
  put_image();
}
else if(random_choice===3)
{
  a=[2,3,1];
  put_image();
}
else if(random_choice===4)
{
  a=[3,1,2];
  put_image();
}
else if(random_choice===5)
{
  a=[3,2,1];
  put_image();
}
}

function puzzle_completed(){
    if(random_choice===1)
  if(pos[1].x===0 && pos[1].y===0 && pos[2].x===200 && pos[2].y===0 && pos[3].x===-200 && pos[3].y===0 && pos[4].x===0 && pos[4].y===200 && pos[5].x===200 && pos[5].y===200 && pos[6].x===-200 && pos[6].y===200 && pos[7].x===0 && pos[7].y===-200 && pos[8].x===200 && pos[8].y===-200)
    alert("Puzzle completed");

  if(random_choice===2)
  if(pos[1].x===400 && pos[1].y===400 && pos[2].x===-200 && pos[2].y===400 && pos[3].x===-200 && pos[3].y===400 && pos[4].x===400 && pos[4].y===-200 && pos[5].x===-200 && pos[5].y===-200 && pos[6].x===-200 && pos[6].y===-200 && pos[7].x===400 && pos[7].y===-200 && pos[8].x===-200 && pos[8].y===-200)
    alert("Puzzle completed");

  if(random_choice===3)
  if(pos[1].x===200 && pos[1].y===200 && pos[2].x===-200 && pos[2].y===200 && pos[3].x===0 && pos[3].y===200 && pos[4].x===200 && pos[4].y===-200 && pos[5].x===-200 && pos[5].y===-200 && pos[6].x===0 && pos[6].y===-200 && pos[7].x===200 && pos[7].y===0 && pos[8].x===-200 && pos[8].y===0)
    alert("Puzzle completed");

  if(random_choice===4)
  if(pos[1].x===400 && pos[1].y===400 && pos[2].x===0 && pos[2].y===400 && pos[3].x===-400 && pos[3].y===-400 && pos[4].x===400 && pos[4].y===0 && pos[5].x===0 && pos[5].y===0 && pos[6].x===-400 && pos[6].y===0 && pos[7].x===400 && pos[7].y===-400 && pos[8].x===0 && pos[8].y===-400)
    alert("Puzzle completed");

   if(random_choice===5)
  if(pos[1].x===200 && pos[1].y===200 && pos[2].x===200 && pos[2].y===200 && pos[3].x===-400 && pos[3].y===200 && pos[4].x===200 && pos[4].y===200 && pos[5].x===200 && pos[5].y===200 && pos[6].x===-400 && pos[6].y===200 && pos[7].x===200 && pos[7].y===-400 && pos[8].x===200 && pos[8].y===-400)
    alert("Puzzle completed");

    console.log(pos[1].x+" "+pos[1].y+pos[1].x+" "+pos[2].y+pos[3].x+" "+pos[3].y+pos[4].x+" "+pos[4].y+pos[5].x+" "+pos[5].y+pos[6].x+" "+pos[6].y+pos[7].x+" "+pos[7].y+pos[8].x+" "+pos[8].y+pos[9].x+" "+pos[9].y);
}


function assignpp(value)
{
for(var i=1;i<picpresent.length;i++)
{
  if(i===value)
    picpresent[i]=0;
  else
    picpresent[i]=1;
}
}

function position(x)
{
  var xpos = event.clientX;
  var ypos = event.clientY;
  var val;
  var g=document.getElementById(x);
  var id1,id2,id3,id4;
  var puzinterval=[];
  console.log(xpos,ypos);

  if(x==="r1c1")
    val=1;
    else if(x==="r1c2")
    val=2;
    else if(x==="r1c3")
    val=3;
    else if(x==="r2c1")
    val=4;
    else if(x==="r2c2")
    val=5;
    else if(x==="r2c3")
    val=6;
    else if(x==="r3c1")
    val=7;
    else if(x==="r3c2")
    val=8;
  else if(x==="r3c3")
    val=9;


function move(s,sec)
{

var start,end;

  if(s===1)
{
  start=pos[val].y;
  end = pos[val].y - 200;
  console.log(start+"   "+end);
  puzinterval.push(window.setInterval(slow_one,10));
  //id1=setInterval(slow_one,10);
  function slow_one(){
    if(pos[val].y>end)
    { pos[val].y=pos[val].y-vel;
      g.style.transform = "translate("+pos[val].x+"px,"+pos[val].y+"px)";
    }
    else
     {
      window.clearInterval(puzinterval.pop());
      puzzle_completed();
     } 
  }
}
else if(s===2)
{
  start=pos[val].x;
  end = pos[val].x + 200;
  puzinterval.push(window.setInterval(slow_two,10));
  function slow_two(){
    if(pos[val].x<end)
    { pos[val].x=pos[val].x+vel;
      g.style.transform = "translate("+pos[val].x+"px,"+pos[val].y+"px)";
    }
    else
       {
      window.clearInterval(puzinterval.pop());
      puzzle_completed();
     } 
  }
}
else if(s===3)
{
  start=pos[val].y;
  end = pos[val].y + 200;
  puzinterval.push(window.setInterval(slow_three,10));
  function slow_three(){
    if(pos[val].y<end)
    { pos[val].y=pos[val].y+vel;
      g.style.transform = "translate("+pos[val].x+"px,"+pos[val].y+"px)";
    }
    else
        {
      window.clearInterval(puzinterval.pop());
      puzzle_completed();
     } 
  }
}
else if(s===4)
{
  start=pos[val].x;
  end = pos[val].x - 200;
  puzinterval.push(window.setInterval(slow_four,10));
  function slow_four()
  {
    if(pos[val].x>end)
    { pos[val].x=pos[val].x-vel;
      g.style.transform = "translate("+pos[val].x+"px,"+pos[val].y+"px)";
    }
    else
          {
      window.clearInterval(puzinterval.pop());
      puzzle_completed();
     } 
  }
}
    assignpp(sec);
}
//Section 1
if(((ypos<295) && (ypos>95)) && ((xpos<210)&&(xpos>10)))
  {
  if(picpresent[2]===0)
    move(2,1);
  if(picpresent[4]===0)
   move(3,1);
  }
if(((ypos<295) && (ypos>95))  && ((xpos<410)&&(xpos>210)))
  {
  if(picpresent[3]===0)
    move(2,2);
  if(picpresent[1]===0)
   move(4,2);
  if(picpresent[5]===0)
    move(3,2);
  }
if(((ypos<295) && (ypos>95)) && ((xpos<610)&&(xpos>410)))
  {
  if(picpresent[2]===0)
    move(4,3);
  if(picpresent[6]===0)
   move(3,3);
  }
if(((ypos<495) && (ypos>295)) && ((xpos<210)&&(xpos>10)))
  {
  if(picpresent[5]===0)
    move(2,4);
  if(picpresent[7]===0)
   move(3,4);
    if(picpresent[1]===0)
   move(1,4);
  }
if(((ypos<495) && (ypos>295)) && ((xpos<410)&&(xpos>210)))
  {
  if(picpresent[6]===0)
    move(2,5);
  if(picpresent[8]===0)
   move(3,5);
    if(picpresent[2]===0)
   move(1,5);
  if(picpresent[4]===0)
    move(4,5);
  }
if(((ypos<495) && (ypos>295)) && ((xpos<610)&&(xpos>410)))
  {
  if(picpresent[5]===0)
    move(4,6);
  if(picpresent[9]===0)
   move(3,6);
    if(picpresent[3]===0)
   move(1,6);
  }
if(((ypos<696) && (ypos>495)) && ((xpos<210)&&(xpos>10)))
  {
  if(picpresent[8]===0)
    move(2,7);
  if(picpresent[4]===0)
   move(1,7);
  }
if(((ypos<695) && (ypos>495)) && ((xpos<410)&&(xpos>210)))
  {
  if(picpresent[9]===0)
    move(2,8);
  if(picpresent[7]===0)
   move(4,8);
  if(picpresent[5]===0)
    move(1,8);
  }
  if(((ypos<695) && (ypos>495)) && ((xpos<610)&&(xpos>410)))
  {
  if(picpresent[6]===0)
    move(1,9);
  if(picpresent[8]===0)
   move(4,9);
  }
}