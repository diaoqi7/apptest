/*
* @Author: diaoqi
* @Date:   2017-03-15 10:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-15 16:49:58
*/
var projPrice = {};
$("#read-kaola-alert").hide();
$("#tobuy-book-list a").on("click",function(e){
    var isChecked = $("#agree-kaola:checked").val();
    if(!isChecked){
        $("#read-kaola-alert").show();
        e.preventDefault();
    }else{
    	$("[data-toggle='modal']").attr("data-target","#myModal");
    	$(".modal-body").html("成功支付："+$("#all-prise").html()+"元"+"<br/>"+
    	        "支付方式："+$(this).attr("payment")+"<br/>"+
    	        "感谢您的购买！");
        //alert("成功支付："+$("#all-prise").html()+"元"+"\n"+
        //"支付方式："+$(this).attr("payment")+"\n"+
        //"感谢您的购买！");
    }
})
$.ajax({
	type:"get",
	url:"../json/score.json",
	dataType: "json",
	success: function (data) {
        $("#loading-p").hide();
        projPrice = data.price;
        addDomFunction3();//数据取出来以后再干别的，AJAX一定要注意时间轴。
	},
	error : function (data) {
        window.alert("错误: ajax失败");
	}
});

function addDomFunction3(){
    var bookarray = localStorage.getItem("bookarray");
    bookarray = strToArray(bookarray);
    var totalPrice = 0;
    for( var i in bookarray){
        totalPrice += projPrice[bookarray[i]];
    }
    $("#all-prise").html(totalPrice);
}



function strToJson(str){
    return JSON.parse(str);
}
function strToArray(str){
    ss = str.split(",");
    return ss;
}
function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;
}