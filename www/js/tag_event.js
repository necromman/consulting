$(function(){
	var v1_div1 = $("#v1_1_div_1 button");
	
	v1_div1.click(function(){
		var val = $(this).val();
		alert(val)
		if(val == 1){alert("공시지원 이벤트")}else{alert("선택약정 이벤트")}
	})
	
})