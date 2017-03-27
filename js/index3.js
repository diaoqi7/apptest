/*
* @Author: diaoqi
* @Date:   2017-03-15 10:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-15 16:49:58
*/

$(".alert-not-enough2").hide();
$(".alert-not-enough1").hide();
$("#next-button2").on("click",function(e){
    if($("#derective-address").val().length < 5){
        $(".alert-not-enough1").show();
        $(".alert-not-enough2").hide();
        e.preventDefault();
    };
    if($("#input-man").val().length < 1 ||
       $("#input-phone").val().length < 1
    ){
    	$(".alert-not-enough2").html("信息不完整，请重新输入！");
        $(".alert-not-enough2").show();
        $(".alert-not-enough1").hide();
        e.preventDefault();
        
    }else if($("#input-phone").val().length != 11 && $("#input-phone").val().length != 8) {
    	$(".alert-not-enough2").html("手机号码位数不正确");
    	$(".alert-not-enough2").show();
        $(".alert-not-enough1").hide();
        e.preventDefault();
    }else if($("#s_province").val() == "省份" || $("#s_city").val() == "地级市"){
    	$(".alert-not-enough2").html("请选择地址");
    	$(".alert-not-enough2").show();
        $(".alert-not-enough1").hide();
        e.preventDefault();
    };
    
})


