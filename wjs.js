var chengduArray = { "place":"成都" , "temperature":"4" ,"weatherinfo":"阴"};
var beijingArray = { "place":"北京" , "temperature":"-2" ,"weatherinfo":"雪"};
var hangzhouArray = { "place":"杭州" , "temperature":"5" ,"weatherinfo":"晴"};
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
				function checkTime(i) {
				if (i < 10) {i = "0" + i}; 
				return i;
        }
}
function OpenDiv(){
  document.getElementById("city-select-id").style.display="block";
}
function changecity(cityArray){
  document.getElementById("palce-id").innerHTML=cityArray['place'];
  document.getElementById("temperature-id").innerHTML=cityArray['temperature'];
  document.getElementById("weather-info-id").innerHTML=cityArray['weatherinfo'];
}
function CloseDivSubmit(){
  document.getElementById("city-select-id").style.display="none";
  var sel=document.getElementById("js-change-city");
  if(sel.value=="成都"){
    changecity(chengduArray);
  }else if(sel.value=="北京"){
    changecity(beijingArray);
  }else if(sel.value=="杭州"){
    changecity(hangzhouArray);
  }
}
function CloseDivCancel(){
  document.getElementById("city-select-id").style.display="none";
  
}
function toggleMore(button){
  for(var i=4;i<8;i++) {
    var id = 'weather-week-section-'+i+'-li';
    var sec = document.getElementById(id);
    if (sec.style.display=="inline-block"){
      sec.style.display="none";
    }else{
      sec.style.display="inline-block";
    }
  }
  if(button.innerHTML=="点击显示更多"){
    button.innerHTML="点击收起更多";
  }else{
    button.innerHTML="点击显示更多";
  }
}