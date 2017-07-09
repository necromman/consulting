var calculator = {
	planFee : {a:100000, b : 12000, c : 8800, d : 5500, f : 9900},
	smartPhone : {a : 999900, b : 123000, c : 100000, d : 12 , e : 3},
	smartPhone_levelpayment_value : function (){
	var interestRates;
	var totalValue;
		
		if(this.smartPhone.e == 0){
		/*sk*/
		interestRates = 5.9;
		totalValue = 10;
		}else if (this.smartPhone.e == 1){
		/*kt*/
			totalValue = 20;
		}else if (this.smartPhone.e == 2){
		/*lg*/
			totalValue = 30;
		}else if (this.smartPhone.e == 3){
		/*cj*/
			totalValue = 40;
		}else if (this.smartPhone.e == 4){
		/*기타*/
			totalValue = 50;
		}else if (this.smartPhone.e == 5){
		/*기타1*/
			totalValue = 60;
		}else if (this.smartPhone.e == 6){
		/*기타2*/
			totalValue = 70;
		}
		return totalValue;
	},
	planvalue : null,
	smartPhoneValue : null,
	method_1 : function () {

		this.planvalue = this.planFee.a + this.planFee.f - this.planFee.b - this.planFee.c - this.planFee.d;
		this.smartPhoneValue = this.smartPhone_levelpayment_value();
		
		alert(this.planvalue + " : "+this.smartPhoneValue)
	} 
};

function v1_div1_Disclosure_event () {
	alert("공시지원")
	calculator.method_1();
};
function v1_div1_Choice_event () {
	alert("선택약정")
};
function v1_1_Installment_event (pram) {
	alert("할부"+pram+"개월")
};


