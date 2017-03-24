/*
* @Author: diaoqi
* @Date:   2017-03-21 15:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-21 15:29:15
*/

var orderForm = [];
$.ajax({
	type:"get",
	url:"../json/score.json",
	dataType: "json",
	success: function (data) {
        orderForm = data.orderForm;
        addDomFunction5();
	},
	error : function (data) {
        window.alert("错误: ajax失败");
	}
});
function addDomFunction5 (){
    $("#order-form-ul").html("");
    var txt = "";
    for(var i = 0; i < orderForm.length; i ++ ){
        txt += '<li class="row"><div class="order-form-head col-xs-12">订单号：';
        txt += orderForm[i].orderNumber;
        txt += '<div class="color-gray pull-right">下单日期：';
        txt += orderForm[i].orderData;
        txt += '</div></div><div class="buy-book-info color-gray col-xs-12">商品详情：<ul class="list-unstyled"><li class="row">';
        for(var j in orderForm[i].buyProj){
            txt += '<div class="col-xs-4">';
            txt += j;
            txt += '&nbsp;<span>(';
            txt += orderForm[i].buyProj[j];
            txt += '道错题)</span></div>';
        };
        txt += '</li></ul></div><div class="color-gray col-xs-12"><div class="row"><div class="col-xs-4">商品总计：¥';
        txt += orderForm[i].buyPrice[0];
        txt += '</div><div class="col-xs-4">运费总计：¥';
        txt += orderForm[i].buyPrice[1];
        txt += '</div><div class="col-xs-4">合计金额：¥';
        var l= orderForm[i].buyPrice[0] + orderForm[i].buyPrice[1];
        txt += l;
        txt += '</div></div></div><div class="buy-book-foot col-xs-12">订单状态：';
        txt += orderForm[i].isFinish;
        txt += '<div class="col-xs-3 pull-right"><a href="#"><div>查看物流</div></a></div></div></li>';

    };
    $("#order-form-ul").append(txt);
}




function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;
}