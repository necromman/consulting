var  choice = $("#v1_div_choice button");
	
	choice.click(function(){
		$.ajax({
			type : "POST",
			url : "http://192.168.81.135:8081/re/se/"+2004,
			dataType:"JSON",
			success : function(data){
				alert(data.length)
				alert(data[0].tel_code+":"+data[0].plan_code+":"+data[0].plan_name)
			}
		});
		if($(this).index() == 0){
			v1_div1_Disclosure_event();
		}else{
			v1_div1_Choice_event();
		}
	})
	
	var installment = $("#v1_div_Installment button")
	
	installment.click(function(){
		
		var val = $(this).html();
		
		v1_1_Installment_event (val);
		
	})

