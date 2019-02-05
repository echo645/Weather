var chengduArray = { "place":"成都" , "temperature":"4" ,"weatherinfo":"阴"};
var beijingArray = { "place":"北京" , "temperature":"-2" ,"weatherinfo":"雪"};
var hangzhouArray = { "place":"杭州" , "temperature":"5" ,"weatherinfo":"晴"};
const startTime = () => {
  const checkTime = i => {
	if (i < 10) {i = "0" + i}; 
				return i;
        };
				let today = new Date();
				let h = today.getHours();
				let m = today.getMinutes();
				let s = today.getSeconds();
        let year=today.getYear();
        if(year<1000)
							year+=1900
        let month=today.getMonth();
        month+=1;
        let daym=today.getDate();
        let day=today.getDay();
				m = checkTime(m);
				s = checkTime(s);
        let dayarray=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
				document.getElementById('time-txt').innerHTML =
				h + ":" + m + ":" + s;
        document.getElementById('date-txt').innerHTML =
				year + "/" + month + "/" + daym+" " +dayarray[day];
				var t = setTimeout(startTime, 500);
				
};
const OpenDiv = () => {
  document.getElementById("city-select-id").style.display="block";
};
const changecity = cityArray => {
  document.getElementById("palce-id").innerHTML=cityArray['place'];
  document.getElementById("temperature-id").innerHTML=cityArray['temperature'];
  document.getElementById("weather-info-id").innerHTML=cityArray['weatherinfo'];
};
const CloseDivSubmit = () => {
  document.getElementById("city-select-id").style.display="none";
  let sel=document.getElementById("js-change-city");
  if(sel.value=="成都"){
    changecity(chengduArray);
  }else if(sel.value=="北京"){
    changecity(beijingArray);
  }else if(sel.value=="杭州"){
    changecity(hangzhouArray);
  }
};
const CloseDivCancel = () => {
  document.getElementById("city-select-id").style.display="none";
};
const toggleMore = button => {
  for(let i=4;i<8;i++) {
    let id = 'weather-week-section-'+i+'-li';
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