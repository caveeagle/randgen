
function loadHTML(sURL) 
{ 
   var request=null;

   // пытаемся создать объект для MSXML 2 и старше 
   if(!request) try 
   {
      request=new ActiveXObject('Msxml2.XMLHTTP');
   } catch (e){}
   
   // не вышло... попробуем для MSXML 1 
   if(!request) try 
   {
      request=new ActiveXObject('Microsoft.XMLHTTP');
   } catch (e){}
   
   // не вышло... попробуем для Mozilla 
   if(!request) try 
   {
      request=new XMLHttpRequest();
   } catch (e){}
   
   if(!request)
   {// ничего не получилось...
      return "";
   }   

   // делаем запрос
   request.open('GET', sURL, false);
   request.send(null);
   return request.responseText;
}

function loadPostHTML(sURL) 
{ 
   var request=null;

   // пытаемся создать объект для MSXML 2 и старше 
   if(!request) try 
   {
      request=new ActiveXObject('Msxml2.XMLHTTP');
   } catch (e){}
   
   // не вышло... попробуем для MSXML 1 
   if(!request) try 
   {
      request=new ActiveXObject('Microsoft.XMLHTTP');
   } catch (e){}
   
   // не вышло... попробуем для Mozilla 
   if(!request) try 
   {
      request=new XMLHttpRequest();
   } catch (e){}
   
   if(!request)
   {// ничего не получилось...
      return "";
   }   

   // делаем запрос
   request.open('POST', sURL, false);
   request.send(null);
   return request.responseText;
}

function loadHTMLnowait(url,fn) 
{
    // branch for native XMLHttpRequest object
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        req.onreadystatechange = fn;
        req.open("GET", url, true);
        req.send(null);
    // branch for IE/Windows ActiveX version
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            //req.onreadystatechange = processReqChange;
            req.onreadystatechange = fn;
            req.open("GET", url, true);
            req.send();
        }
    }
}

function processReqChange() 
{
    // only if req shows "complete"
    if (req.readyState == 4) {
        // only if "OK"
        if (req.status == 200) {
            // ...processing statements go here...
        
		        var str = req.responseText;
		        
			    var re = /.+SCRIPT ERROR.+/;
			    var a = str.search(re);
			    if (a!=-1)
			    {
					alert("Ошибка скрипта!");
					return false;
				}
				RequestAnswer();
           
        } else {
            alert("There was a problem retrieving data:\n" + req.statusText);
        }
    }
}

function RequestAnswer()
{
	//alert("Выложено в обработку");
}	

