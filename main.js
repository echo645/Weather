function aa(data){
  for(let i=4;i<8;i++) {
    let id = 'weather-week-section-'+i+'-id';
    let sec = document.getElementById(id);
    sec.style.display="none";
  }
  document.getElementById("palce-id").innerHTML=data.results[0].currentCity;
  document.getElementById("weather-info-id").innerHTML=data.results[0].weather_data[0].weather;
  document.getElementById("wind-id").innerHTML=data.results[0].weather_data[0].wind;
}
function startTime () {
  function checkTime (i) {
    if (i < 10) {
      i = "0" + i
    }; 
    return i;
  };
  let today = new Date();
  let {h,m,s,year,month,daym,day} = {h:today.getHours(),m:today.getMinutes(),s:today.getSeconds(),year:today.getYear(),month:today.getMonth(),daym:today.getDate(),day:today.getDay()};
  if(year<1000)
    year+=1900;
  month+=1;
  m = checkTime(m);
  s = checkTime(s);
  let dayarray=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
  document.getElementById('time-txt').innerHTML = h + ":" + m + ":" + s;
  document.getElementById('date-txt').innerHTML = year + "/" + month + "/" + daym+" " +dayarray[day];
  var t = setTimeout(startTime, 500);
};
const OpenDiv = () => {
  document.getElementById("city-select-id").style.display="block";
};
const changecity = cityvalue => {
  var script = document.createElement('script');
  script.src = "http://api.map.baidu.com/telematics/v3/weather?location="+cityvalue+"&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw&callback=aa";
  document.body.appendChild(script);
};
const CloseDivSubmit = () => {
  document.getElementById("city-select-id").style.display="none";
  let sel=document.getElementById("js-change-city");
  changecity(sel.value);
};
const CloseDivCancel = () => {
  document.getElementById("city-select-id").style.display="none";
};
const toggleMore = button => {
  for(let i=4;i<8;i++) {
    let id = 'weather-week-section-'+i+'-id';
    let sec = document.getElementById(id);
    if (sec.style.display=="inline-block"){
      sec.style.display="none";
    }else{
      sec.style.display="inline-block";
    }
  };
  if(button.innerHTML=="点击显示更多"){
    button.innerHTML="点击收起更多";
  }else{
    button.innerHTML="点击显示更多";
  }
};

