function int_c_clock(id,time_zone){
  var clockqu = document.querySelector('#'+id);
  var clockEl = document.getElementById(id);
  var dials = document.getElementById(id).getElementsByClassName('dials');

  for (var i=1;i<61;i++){
    clockEl.innerHTML += "<div class='dials'></div>";
    dials[i].style.transform = "rotate(" + 6 * i + "deg)";
  }

  setInterval(function(){c_clock(id,time_zone);},100);
}

function c_clock(id,time_zone){
  var clockqu = document.querySelector('#'+id);
  var clockEl = document.getElementById(id);

  if(time_zone){
    var sys_date = new Date().toLocaleString("en-US",{timeZone:time_zone});
    var d = new Date(sys_date);
  }else{
    d = new Date();
  }

  var h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      hEl = clockEl.querySelector('.hh'),
      mEl = clockEl.querySelector('.mh'),
      sEl = clockEl.querySelector('.sh'),
      timeEl = clockEl.querySelector('.time');

  if(h<10){h='0'+h;}
  if(m<10){m='0'+m;}
  if(s<10){s='0'+s;}

  var time = h+':'+m+':'+s;

  hEl.style.transform="rotate("+hDeg+"deg)";
  mEl.style.transform="rotate("+mDeg+"deg)";
  sEl.style.transform="rotate("+sDeg+"deg)";
  timeEl.innerHTML=time;
}
