var cardPlanDefault = $("span[name=default_tel_text]");
var cardMakerdefault = $("span[name=default_ma_text]");

$(function(){	
	$.ajax({type : "GET",url : "http://localhost:8081/items/default",
			dataType:"JSON",success : dataInsert});	
});

var datas=null;

var dataInsert = function(data){
/*DefaultDataDTO 
	[
		tel_code=2004, plan_code=3012, plan_name=plan_name_test, plan_price=999999, plan_infor1=infor1, plan_infor2=infor2, plan_infor3=infor3, 
		plan_sale=999999, plan_modify=2017-07-11 15:58:25, makerCode=7001, productCode=7031, productName=testProductName, productPrice=9999999, 
		producrINfor_os=test_product_infor_OS, producrINfor_cpu=test_product_infor_CPU, producrINfor_camera=test_product_infor_CAMERA, 
		producrINfor_memory=test_product_infor_MEMORY, producrINfor_ratings=5, producrINfor_ratings_infor=producrINfor_ratings_infor
	]
]*/

var defaultCount = 0;

	$.each(data,function(index){
		
			cardPlanDefault.eq(0).text(data[0].tel_code);
			cardPlanDefault.eq(1).text(data[0].plan_name);
			cardPlanDefault.eq(2).text(data[0].plan_modify);
			cardPlanDefault.eq(3).text(data[0].plan_infor1);
			cardPlanDefault.eq(4).text(data[0].plan_infor2);
			cardPlanDefault.eq(5).text(data[0].plan_infor3);
			cardPlanDefault.eq(6).text(data[0].plan_price);
			cardPlanDefault.eq(7).text("해당없슴")
			
			cardMakerdefault.eq(0).text(data[0].productName);
			cardMakerdefault.eq(1).text(data[0].productPrice);
			cardMakerdefault.eq(2).text("공시지원금액이 insert");
			cardMakerdefault.eq(5).text("비싸");
	})
	
	datas = data;
	
}//dataInsert_out

var choice = $("#v1_div_choice button");

	choice.click(function(){
		
		if($(this).index() == 0){
			
			cardPlanDefault.eq(7).text("해당없슴")
			cardMakerdefault.eq(2).text("공시지원 금");
			
			return false;
	  
		}else if($(this).index() == 1){
		
			cardPlanDefault.eq(7).text(datas[0].plan_sale)
			cardMakerdefault.eq(2).text("해당없슴");
			
			
			return false;
	  
		}
	
	});//choice_out

var installMentMonth = $("div[name=default_ma_val] button");
	
	installMentMonth.click(function(){
		alert($(this).text())
	});
	 




	