var chengduArray=new Array("�ɶ�","4","��");
var beijingArray=new Array("����","-2","ѩ");
var hangzhouArray=new Array("����","5","��");
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
        var dayarray=new Array("������","����һ","���ڶ�","������","������","������","������")
				document.getElementById('time-txt').innerHTML =
				h + ":" + m + ":" + s;
        document.getElementById('date-txt').innerHTML =
				year + "/" + month + "/" + daym+" " +dayarray[day];
				var t = setTimeout(startTime, 500);
				function checkTime(i) {
				if (i < 10) {i = "0" + i}; 
				return i;
        }
}
function OpenDiv(){
  document.getElementById("city-select-id").style.display="block";
}
function changecity(cityArray){
  document.getElementById("palce-id").innerHTML=cityArray[0];
  document.getElementById("temperature-id").innerHTML=cityArray[1];
  document.getElementById("weather-info-id").innerHTML=cityArray[2];
}
function CloseDivSubmit(){
  document.getElementById("city-select-id").style.display="none";
  var sel=document.getElementById("js-change-city");
  if(sel.value=="�ɶ�"){
    changecity(chengduArray);
  }else if(sel.value=="����"){
    changecity(beijingArray);
  }else if(sel.value=="����"){
    changecity(hangzhouArray);
  }
}
function CloseDivCancel(){
  document.getElementById("city-select-id").style.display="none";
}
function showMore(){
  document.getElementById("weather-week-section-4-li").style.display="inline-block";
  document.getElementById("weather-week-section-5-li").style.display="inline-block";
  document.getElementById("weather-week-section-6-li").style.display="inline-block";
  document.getElementById("weather-week-section-7-li").style.display="inline-block";
  document.getElementById("weather-week-section-8-li").style.display="none";
  document.getElementById("weather-week-section-9-li").style.display="inline-block";
}
function pickUp(){
  document.getElementById("weather-week-section-4-li").style.display="none";
  document.getElementById("weather-week-section-5-li").style.display="none";
  document.getElementById("weather-week-section-6-li").style.display="none";
  document.getElementById("weather-week-section-7-li").style.display="none";
  document.getElementById("weather-week-section-8-li").style.display="inline-block";
  document.getElementById("weather-week-section-9-li").style.display="none";
}