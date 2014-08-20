
var baseurl="./cgi/rnd.pl";

var inProcFlag = 0;
var retstr;

function rstart()
{
	if(inProcFlag){return;};

	maxnum = parseInt(document.rnd_form.rnum.value);
	
	if(isNaN(maxnum))
	{
		alert("Введите число");
		return;
	}
	if(maxnum<1)
	{
		alert("Шансы слишком малы");
		return;
	}	
	if(maxnum>66000)
	{
		alert("Поменьше...");
		return;
	}	
	
	set_cookie("rnd",maxnum);
	
	delay = 1000+(Math.random()*2000);  // от 2 до 5 секунд
	
	document.getElementById("inProc").src=inProcImg;
	document.getElementById("resnum").innerHTML="&nbsp;";
	
	retstr = loadHTML(baseurl+"?ch="+maxnum+"&nocache="+delay);
	
	inProcFlag = 1;
	setTimeout("chance()",delay); 
}	

function chance()
{
	document.getElementById("inProc").src="./img/px.gif";
	document.getElementById("resnum").innerHTML = retstr;
    
    
    
	inProcFlag = 0;
}	

function init()
{
	var i = getCookie("rnd");
	
	if(i)
	{
	 document.rnd_form.rnum.value = i;	
	}
	else
	{
	 document.rnd_form.rnum.value = 26; // default	
	}
		
	
	//
}	

function getCookie(name) 
{
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function set_cookie(name, value)
{
	expires = new Date();
	expires.setTime(expires.getTime()+(1000*86400*365)); // вычисляем срок хранения cookie

	document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() +  "; path=/";
}

function answ_start()
{
	if(inProcFlag){return;};

	delay = 5000+(Math.random()*5000);  // от 5 до 10 секунд
	
	document.getElementById("inProc2").src=inProcImg;
	document.getElementById("resultImg").src="./img/px.gif";
	
	clear_meter();
	document.getElementById("prob_txt").innerHTML = "";
	
	retstr = loadHTML(baseurl+"?ch=100&nocache="+delay);
	
	inProcFlag = 1;
	setTimeout("chance_yn()",delay); 
}	

function chance()
{
	document.getElementById("inProc").src="./img/px.gif";
	document.getElementById("resnum").innerHTML = retstr;
    
    
    
	inProcFlag = 0;
}	

function chance_yn()
{
	//var prob_txt_str = "Вероятность: "; 
	var prob_txt_str = " "; 
	
	document.getElementById("inProc2").src=statImg;
	
	if(retstr<45)
	{
		document.getElementById("resultImg").src=noImg;
		
		var lv = retstr/45;
		
		var lv_rn = (Math.round(lv*100)+1);
		
		set_meter(lv);
		
		document.getElementById("prob_txt").innerHTML = prob_txt_str+lv_rn+" %";
	}

	if(retstr>55)
	{
		document.getElementById("resultImg").src=yesImg;

		var lv = (100-retstr)/45;
		
		var lv_rn = (Math.round(lv*100)+1);
		
		set_meter(lv); 
		
		document.getElementById("prob_txt").innerHTML = prob_txt_str+lv_rn+" %";
	}
	
	if((retstr>=45)&&(retstr<=55))
	{
		document.getElementById("resultImg").src=unImg;
	}
	
		
    
	inProcFlag = 0;
}	

function set_meter(level)
{
  var sel_num = 12;
  
  // ########################## //
  
  var n = (level*sel_num)+1;
  
  for(var i=1;i<=n;i++)
  {
  	var mid = "meter";
  	if(i<10){mid=mid+"0";}
  	mid=mid+i;
  	
  	var elm = document.getElementById(mid);
  	if(elm)
  	{
  		elm.style.background='#FFCC33';
  	}	
  	
  	
	}	
	return false;
}

function clear_meter()
{
  var sel_num = 12;
  
  // ########################## //
  
  for(var i=1;i<=sel_num;i++)
  {
  	var mid = "meter";
  	if(i<10){mid=mid+"0";}
  	mid=mid+i;
  	
  	var elm = document.getElementById(mid);
  	if(elm)
  	{
  		elm.style.background="";
  	}	
  	
  	
	}	
	return false;
}

