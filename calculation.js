var exp =  '', number, decimal, equal, operator, allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num){
	if ( equal ){
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}
	else{
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}
	if (operator) decimal = false;
	SR('a');
}

function insertOp(op) {
	textview.value = exp + op;
	operator = true;
	equal = false;
	allowSR =false;
	SR('a');
}

function insertDec() {
	if(number && !decimal){
		textview.value = exp + '.';
		decimal = true;
		operator = false;
	}
}

function equalTo() {
	if (exp){
		exp =eval(exp);
		textview.value = exp;
		equal = true;
		decimal = false;
		number = false;
		allowSR = true;
		SR('a');
	}
}

function clean(){
	exp = '';
	textview.value = exp;
	decimal = false;
}

function back(){
	exp = textview.value;
	exp = exp.substring(0,exp.length - 1);
	textview.value = exp ;
}

function SR(x){
	if(x == 'r'){
		exp = Math.sqrt(exp);
		textview.value = exp;
	}
	else if(x == 's' ){
		exp = exp*exp;
		textview.value = exp;
	}
	else if(x == 'a' && allowSR){
		document.getElementById('r').disabled = false;
		document.getElementById('s').disabled = false;
	}
	else if (!allowSR) {
		document.getElementById('r').disabled = true;
		document.getElementById('s').disabled = true;
	}
}