

function display_sprite(){
	var row=document.getElementById("image_row").value;
	var col=document.getElementById("image_col").value;
	var image=document.getElementById("sprite");
	var leftpos=0;
	var toppos=0;
	var full = [8,8,10,9,7,14];

	image.style.height=53+'px';
	image.style.width=75+'px';
	
	
		if(col.length<1)
		{
			image.style.width=(75*full[row-1] + 5*(full[row-1]-1)) + 'px';
			toppos=-58*(row-1);
			image.style.background="url(Images/small_thumbnails.png) "+0+'px '+toppos+'px';
		}
		else if(row.length<1)
			{
			image.style.height=343 + 'px';
			leftpos=-80*(col-1);
			image.style.background="url(Images/small_thumbnails.png) "+leftpos+'px '+0+'px';
		}
		else
		{
			image.style.width=75+'px';
			image.style.height=53+'px';
			toppos=-58*(row-1);
			leftpos=-80*(col-1);
			image.style.background="url(Images/small_thumbnails.png) "+leftpos+'px '+toppos+'px';
		}
		
		
	
	
}