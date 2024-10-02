const time= new Date().getHours();
let gretting;
if(time<10){
    gretting="Goodmorning";

}else if(time<20){
    gretting="GoodDay";
}else{
    gretting="Goodeverning";
}
document.getElementById("demo").innerHTML=gretting;