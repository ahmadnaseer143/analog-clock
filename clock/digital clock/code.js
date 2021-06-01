function starttime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var t=h+":"+m+":"+s;
    document.getElementById("time").innertext=t;
}
setInterval(starttime, 1000);