let setbtn = document.getElementById("set");
document.getElementById("container2").style.display="none";
setbtn.addEventListener("click",function(){
    document.getElementById("container1").style.display="none";
    document.getElementById("container2").style.display="block";

    let deadhour = document.getElementById("hour");
    let deadmin = document.getElementById("minute");
    let deadsec = document.getElementById("second");

    let hour = deadhour.value;
    let min = deadmin.value;
    let sec = deadsec.value;

    if ((hour=="")) {
        hour=00;
    }
    if ((min=="")) {
        min=00;
    }
    if ((sec=="")) {
        sec=00;
    }
    // var audio = new Audio('http://cd.textfiles.com/atarilibrary/atari_cd06/SOUND/WAV/WOWO.WAV')
    var audio = new Audio('timer.mp3')
    let x = setInterval(() => {
            // alert(hour)
            if(sec>0){
                sec--;
            }
            else if (sec==0) {
                if (min>0) {
                    min--;
                    sec=60;    
                }
                if (min==0 && hour>0) {
                    hour--;
                    min=60
                    sec=60;
                }
            }
            
            let shour = hour;
            let smin = min;
            let ssec = sec;
    
            shour = hour<10 ? "0"+shour : hour;
            smin = min<10 ? "0"+smin : min;
            ssec = sec<10 ? "0"+ssec : sec;
            
            document.getElementById("time").innerHTML=shour+" hr "+smin+" min "+ssec+" sec";

            if (hour==0 && min==0 && sec==0) {
                clearInterval(x);
                audio.play();
                // alert("Time out....")
            }
    }, 1000);
    document.getElementById("hour").value="";
    document.getElementById("minute").value="";
    document.getElementById("second").value="";
})
