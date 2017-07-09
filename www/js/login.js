$(function(){
	$("#te_div_01 button").click(function(){
		$.ajax({
			type : "POST",
			url : "http://localhost:8081/re/te",
			dataType : "text",
			data : {id : $("#id").val(), pw : $("#pw").val()},
			success : function(a){
				if(a == "success"){
					/*로그인테스트중*/
					location.href="file:///C:/Users/Administrator/git/consulting/www/index.html";
				}else{
					/*이전페이지*/
				}
			}
		})
	});
})