//添加小时天气DIV
function addElementDivHour() {
  var weatherHour = document.getElementById("weather-hour-id");
  for(let _ in [...Array(8).keys()]) {
    weatherHour.innerHTML += `
      <div class="weather-section">
        <div class="weather-section-temperature">
          <span class="temperature-hour">4</span>
          <span class="temperature-circle-hour"></span>
        </div>
        <span class="weather-section-icon"></span>
        <span>阴</span>
        <span>11：00</span>
      </div>
      `
  } 
}
//添加一周天气DIV
function addElementDivWeek() {
  var weatherHour = document.getElementById("weather-week-id");
  for(let i = 1;i < 8;i++) {
    weatherHour.innerHTML += `
      <div class="weather-week-section" id="weather-week-section-` + i + `-id">
        <div class="day-data">
          <span class="day">今天</span>
          <span class="data">1/31</span>
        </div>
        <div class="week-weather-info">
          <span class="week-icon"></span>
          <span class="week-info">小雨</span>
        </div>
        <div class="week-temperature">
          <span class="week-temp">0</span>
          <span class="temperature-circle-week"></span>
          <span>～</span>
          <span class="week-temp">10</span>
          <span class="temperature-circle-week"></span>
        </div>
      </div>
      `     
  } 
  weatherHour.innerHTML += `
        <div class="weather-week-section" id="weather-week-section-8-id">
          <div onclick="toggleMore(this)">点击显示更多</div>
        </div>
        `
}
addElementDivHour();
addElementDivWeek();
//还原切换后的更多被收起的状态
function restoreMoreStart(){
  for(let i = 4;i < 8;i++) {
    let id = "weather-week-section-" + i + "-id";
    var sec = document.getElementById(id);
    sec.style.display = "none";
  }
}
//切换城市后的数据加载
function changeCityStart(data){
  document.getElementById("palce-id").innerHTML = data.results[0].currentCity;
  document.getElementById("weather-info-id").innerHTML = data.results[0].weather_data[0].weather;
  document.getElementById("wind-id").innerHTML = data.results[0].weather_data[0].wind;
  restoreMoreStart();
}
//获得实时时间与日期
function startTime () {
  let today = new Date();
  let [h,m,s,year,month,daym,day] = [today.getHours(),today.getMinutes(),today.getSeconds(),today.getYear(),today.getMonth(),today.getDate(),today.getDay()];
  if(year < 1000)
    year += 1900;
  month += 1;
  [h, m, s] = [h, m, s].map(val => val < 10 ? '0' + val : val);
  let dayArray = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
  document.getElementById("date-txt").innerHTML = year + "/" + month + "/" + daym + "&nbsp;&nbsp;&nbsp;";
  document.getElementById("week-day-txt").innerHTML = dayArray[day];
  document.getElementById("time-txt").innerHTML = "&nbsp;&nbsp;" + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
};
//点击切换按钮打开城市切换窗口
function openDiv() {
  document.getElementById("city-select-id").style.display = "block";
};
//切换城市加载该城市天气数据
function changeCity(cityValue) {
  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/telematics/v3/weather?location=" + cityValue + "&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw&callback=changeCityStart";
  document.body.appendChild(script);
};
//点击确认按钮，关闭城市切换窗口
function closeDivSubmit() {
  document.getElementById("city-select-id").style.display = "none";
  let sel = document.getElementById("js-change-city-id");
  changeCity(sel.value);
};
//点击取消按钮，关闭城市切换窗口
function closeDivCancel() {
  document.getElementById("city-select-id").style.display = "none";
};
//展开与收起更多
let isMore = false
function toggleMore(button) {
  isMore =! isMore;
  let intMore = isMore ? 1 : 0
  for(let i = 4;i < 8;i++) {
    let id = "weather-week-section-" + i + "-id";
    let sec = document.getElementById(id);
    sec.style.display = ["none","flex"][intMore];
  };
  button.innerHTML = ["点击显示更多","点击收起更多"][intMore];
};
