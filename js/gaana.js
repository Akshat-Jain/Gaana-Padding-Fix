x = document.getElementById("main_middle_content");
if(x!=undefined){
	x.style.left = '60px';
}

y = document.getElementsByClassName("filter_wrap fixedSearchBox")[0];
if(y!=undefined){
	y.style.left = '60px';
}

z = document.getElementById("searchTop");
z.onclick = function(){
	console.log("testing");
	
	x = document.getElementById("main_middle_content");
	if(x!=undefined){
		x.style.left = '60px';
	}
	
	setTimeout(function(){
		y = document.getElementsByClassName("filter_wrap fixedSearchBox")[0];
		if(y!=undefined){
			y.style.left = '60px';
		}
	}, 100);
}
