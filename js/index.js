/*
* @Author: diaoqi
* @Date:   2017-03-15 10:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-15 16:49:58
*/



var project = [];
var wrongNum = [];
var bookarray = [];
var projPrice = {};
$.ajax({
	type:"get",
	url:"../json/score.json",
	dataType: "json",
	success: function (data) {
        $("#loading-p").hide();
		project = data.project;
		wrongNum = data.wrongNum;
        projPrice = data.price;
        addDomFunction1();//数据取出来以后再干别的，AJAX一定要注意时间轴。
	},
	error : function (data) {
        window.alert("错误: ajax失败");
	}
});
function addDomFunction1(){
    //拼接字符串，循环全加进DOM中。
    for(var i=0; i<project.length; i++){
        var txtproj = "";
        txtproj += '<div class="col-xs-3"><a class="proj-button" href="#" proj-name="';
        txtproj += project[i];
        txtproj += '"><div class="choose-proj"><div>';
        txtproj += project[i];
        txtproj += '</div><div>('; 
        txtproj += wrongNum[i];
        txtproj += "道错题)</div></div></a></div>";
        $("#proj-list").append(txtproj);
    }
    $(".proj-button").on("click",function(){
        $(this).toggleClass("active");
        transformBookArray();
    });

    $("#select-all-a").on("click",function(){
        if($("#select-all").html() == "全选"){
            $(".proj-button").addClass("active");
        }else{
            $(".proj-button").removeClass("active");
        }
        transformBookArray();
    });
}
function transformBookArray(){
    bookarray = [];
    //循环所有选中的科目，并放到bookarray中，存为字符串，用时转为数组。
    for(var i=0; i<$(".active").length; i++){
        bookarray.push($(".active:eq("+i+")").attr("proj-name"));
    };
    if(bookarray.length == project.length){
        //$("#select-all-a").addClass("active-all");
        $("#select-all").html("全不选");
    }else{
        //$("#select-all-a").removeClass("active-all");
        $("#select-all").html("全选");
    };
    if(bookarray != ""){
    	$("#choose-book-next").removeClass("disabled");
    }else{
    	$("#choose-book-next").addClass("disabled");
    }
    //alert(sessionStorage.getItem("bookarray"));    //打印存起来的东西,可调用。
};

$("#choose-book-next").on("click",function(e){
	localStorage.setItem("bookarray",bookarray);
});

















