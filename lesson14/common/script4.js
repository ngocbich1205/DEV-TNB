$(document).ready(function(){
    $("#HTML").click(function(){
        $("#HTML").css("background-color","red")
        $("#content").text("Html viết tắt Hyper Text Markup Language");
        $("#PHP,#CSS,#Jquery").css("background-color","#ccc");
    })
    $("#CSS").click(function(){
        $("#CSS").css("background-color","blue")
        $("#content").text("Thay đổi cách hiển thị mặc định của thẻ html");
        $("#PHP,#HTML,#Jquery").css("background-color","#ccc");
    })
    $("#Jquery").click(function(){
        $("#Jquery").css("background-color","green")
        $("#content").text("Jquery là một thư viện của Javascript");
        $("#PHP,#CSS,#HTML").css("background-color","#ccc");
    })
    $("#PHP").click(function(){
        $("#PHP").css("background-color","orange")
        $("#content").text("PHP là một ngôn ngữ lập trình phía sever");
        $("#HTML,#CSS,#Jquery").css("background-color","#ccc");
    })
})