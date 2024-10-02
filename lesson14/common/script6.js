let text;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
        text="đầu tuần"
        break;
    case 4:
    case 5:
    case 0:
        text="cuối tuần"
        break;

    default:
       text="tôi không biết:))"
       break;
}
document.getElementById("demo").innerHTML=text