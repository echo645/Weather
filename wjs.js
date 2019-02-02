function startTime() {
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
        var year=today.getYear();
        if(year<1000)
							year+=1900
        var month=today.getMonth();
        month+=1;
        var daym=today.getDate();
        var day=today.getDay();
				m = checkTime(m);
				s = checkTime(s);
        var dayarray=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
				document.getElementById('time-txt').innerHTML =
				h + ":" + m + ":" + s;
        document.getElementById('date-txt').innerHTML =
				year + "/" + month + "/" + daym+" " +dayarray[day];
				var t = setTimeout(startTime, 500);
				}
				function checkTime(i) {
				if (i < 10) {i = "0" + i}; 
				return i;
}
function OpenDiv(){
document.getElementById("city-select-id").style.display="block";
//document.getElementById("changepalce-id").style.display="none";
}
function CloseDivSubmit(){
document.getElementById("city-select-id").style.display="none";
//window.location.href='beijing.html';
var sel=document.getElementById("js-change-city");
if(sel.selectedIndex.value=="成都"){//obj.selectedIndex
  window.location.href='index.html';
}else if(sel.selectedIndex.value=="北京"){
  window.location.href='beijing.html';
}else if(sel.selectedIndex.value=="hangzhou"){
  window.location.href='hangzhou.html';
}
}
function CloseDivCancel(){
document.getElementById("city-select-id").style.display="none";
}