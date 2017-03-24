/*
* @Author: diaoqi
* @Date:   2017-03-15 10:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-15 16:49:58
*/



var project = [];//AJAX取出的科目信息
var wrongNum = [];//AJAX取出的错题数
var projPrice = {};//AJAX取出的各科价格
var bookNumarray = {};//传递购买的书以及数量
var bookarray = localStorage.getItem("bookarray");//选择的书名的数组
bookarray = bookarray.split(",");
$.ajax({
	type:"get",
	url:"../json/score.json",
	dataType: "json",
	success: function (data) {
        $("#loading-p").hide();
        project = data.project;
		wrongNum = data.wrongNum;
        projPrice = data.price;
        addDomFunction2();//数据取出来以后再干别的，AJAX一定要注意时间轴。
        defineBookMumArray();//默认的购买的书及数量(每科一本)
	},
	error : function (data) {
        window.alert("错误: ajax失败");
	}
});
function addDomFunction2(){
    //拼接字符串，循环全加进DOM中。
    $("#tobuy-book-list").html("");//先清空ul
    for(var i=0; i<bookarray.length; i++){
        var txtproj = "";
        var k = bookarray[i];
        txtproj += '<li proj-name="';
        txtproj += k;
        txtproj += '" class="row"><div class="col-xs-6">'
        txtproj += k;
        txtproj += '(';
        var j = project.indexOf(bookarray[i]);//找到对应科目的错题数
        txtproj += wrongNum[j];
        txtproj += '道错题)</div><div class="col-xs-6"><span class="price">¥ ';
        txtproj += projPrice[k];
        txtproj += '</span><span id="" class="tobuy-book-add pull-right">';
        txtproj += '<a href="#">+</a></span><span id="" class="tobuy-book-num pull-right">1</span>'
        txtproj += '<span id="" class="tobuy-book-sub pull-right"><a href="#">-</a></span></div></li>'
        
        $("#tobuy-book-list").append(txtproj);
    }
    $(".tobuy-book-add a").on("click",function(){//加一本
        var num = $(this).parent().siblings(".tobuy-book-num").html();
        num++;
        $(this).parent().siblings(".tobuy-book-num").html(num);
        var bookName = $(this).parents("[proj-name]").attr("proj-name");
        transformBookNumArray(bookName,num);
    });

    $(".tobuy-book-sub a").on("click",function(){//减一本
        var num = $(this).parent().siblings(".tobuy-book-num").html();
        var bookName = "";
        if(num > 1){
            num--;
            $(this).parent().siblings(".tobuy-book-num").html(num);
            bookName = $(this).parents("[proj-name]").attr("proj-name");
            transformBookNumArray(bookName,num);
        }else{
            $(this).parent().siblings(".tobuy-book-num").html(1);
        }
    });
    
}
function transformBookNumArray(bookName,num){//每科买几本？记录下来。
    bookNumarray[bookName] = num;
    // bookNumarray大概这样:
    //     {
    //         "数学":3,
    //         "历史":6
    //     }
};
function defineBookMumArray(){//默认的每科买一本
    for(var i=0; i<bookarray.length; i++){
        bookNumarray[bookarray[i]] = 1;
    }
}

$(".next-button").on("click",function(){  
    cunqilai();
})

function cunqilai(){//函数: 存起来
    var str = JSON.stringify(bookNumarray);
    localStorage.setItem("bookNumarray",str);
}












function strToJson(str){
    return JSON.parse(str);
}

function getJsonLength(jsonData){  
      
        var jsonLength = 0;  
      
        for(var item in jsonData){  
      
            jsonLength++;  
      
        }  
      
        return jsonLength;  
      
    }  