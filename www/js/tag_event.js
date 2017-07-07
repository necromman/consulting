$(function(){
	var  choice = $("#v1_div_choice button");
	
	choice.click(function(){
		var val = $(this).val();
		
		if(val == 1){
			v1_div1_Disclosure_event();
		}else{
			v1_div1_Choice_event();
		}
		alert("abbb")
	})
	
	var installment = $("#v1_div_Installment button")
	
	installment.click(function(){
		var val = $(this).html();
		
		v1_1_Installment_event (val);
		
	})
})
