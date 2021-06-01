function showTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var date=today.toDateString();
    var night="AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h-=12;
        night="PM";
    }
    h=(h<10)? "0" + h: h;
    m=(m<10)? "0" + m: m;
    if(s<10){
        s="0" + s;
    }
    var t=h + ":" + m + ":" + s + " " + night;
    var d=date;
    document.getElementById("time").innerHTML=t;
    document.getElementById("date").innerHTML=d;
}
setInterval(showTime,1000);