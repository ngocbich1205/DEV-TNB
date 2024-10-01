//cấu trúc điều khiển if
//dạng 1:if đơn
/* cú pháp:
        if(condition.expression){
            block.satement;
        }
*/
//ví dụ:cho số num; kiểm tra số num có là số dương
num=10;
if(num>0){
    console.log(num,"là số dương");
}
// nếu num>0 thì gán lại giá trị num=-100;
if(num>0){
    num=-100;
    console.log(num);
}
//dạng2: if.... else
num=12;
//kiểm tra xem số num là số chẵn hay số lẻ
if(num %2 == 0){
    console.log(num,"là số chẵn");
}else{
    console.log(num,"là số lẻ");
}
//dạng 3: if bậc thang: if...elseif...
//kiểm tra số num là số dương, âm hay số 0
if(num>0){
    console.log(num,"là số dương");
}else if(num<0){
    console.log(num,"là số âm");
}else{
    console.log(num,"là số không");
}
//dạng 4: rested if
num1=12;
num2=15;
//nếu num1 là số chẵn; kiểm tra nếu num2 là số lẻ
//thì tính: res=num1+num2
if(num1 %2 ==0){
    if(num2 % 2 ==1){
        res=num1+num2;
        console.log(res);
    }
}else{
    if(num2 % 2 ==1){
        res=num1-num2;
        console.log(res);
    }
}
// luyện tập 1: giải phương trình bậc 1:ax+b=0
a=2;
b=4;
if (a == 0 && b == 0){
    console.log('Phương trình vô số nghiệm');
}
else if (a != 0 && b == 0){
    console.log('Phương trình có nghiệm x = 0');
}
else if (a == 0 && b != 0){
    console.log("Phương trình vô nghiệm");
}
else {
    console.log('Phương trình có nghiệm x = ' + (-b/a));
}
// luyện tập 2: giải phương trình bậc 2:ax^2+bx+c=0
a=3;
b=5;
c=-8;
del=b*b-4*a*c;
if(del>0){
    x1=(-b-Math.sqrt(del))/(2*a);
    x2=(-b+Math.sqrt(del))/(2*a);
    console.log("phương trình có 2 nghiệm x1=",x1,"x2=",x2);
}else if(del<0){
    console.log("phương trình vô nghiệm");
}else{
    x1=x2=-b/2*a;
    console.log("phương trình có nghiệm kép:x1=x2=",x1);
}
