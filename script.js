var date =document.createElement("input");
date.setAttribute("type","date");
date.id="dob";

var button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary"
button.innerHTML="Clickme"
button.addEventListener("click",date_data)

document.body.append(date,button)
function cbreak(tagname) {
    var ele2 = document.createElement(tagname)
    return ele2;
}
    

function date_data(){
    
var br1 = cbreak("br")
var br2 = cbreak("br")
var br3 = cbreak("br")
var br4 = cbreak("br")
var br5 = cbreak("br")
var br6 = cbreak("br")
var br7 = cbreak("br")
    var res1=document.createElement("span");
    var res2=document.createElement("span");
    var res3=document.createElement("span");
    var res4=document.createElement("span");
    var res5=document.createElement("span");
    var res6=document.createElement("span");
    var res7=document.createElement("span");
    var input=document.getElementById("dob").value;
    var input_date=new Date(input)
    var currentdate=new Date();
    var millisecdiff=parseInt(currentdate.getTime()-input_date.getTime())
    res1.innerHTML=`Milliseconds : ${millisecdiff}`
    var secdiff=Math.floor(millisecdiff/1000);
    res2.innerHTML=`Seconds : ${secdiff}`
    var minsdiff=Math.floor(secdiff/60);
    res3.innerHTML=`Minutes : ${minsdiff}`
    var hoursdiff=Math.floor(minsdiff/60);
    res4.innerHTML=`Hours : ${hoursdiff}`
    var daydiff=Math.floor(hoursdiff/24);
    res5.innerHTML=`Days : ${daydiff}`
    var yeardiff=currentdate.getFullYear()-input_date.getFullYear();
    res6.innerHTML=`Years : ${yeardiff}`
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-input_date.getMonth())
    res7.innerHTML=`Months : ${monthdiff}`
    document.body.append(br7,res6,br1,res7,br2,res5,br3,res4,br4,res3,br5,res2,br6,res1);
}
