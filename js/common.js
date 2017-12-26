function solve(){
	var inputNum01 = getVelueOfTag('input01');
	var inputNum02 = getVelueOfTag('input02');
	var inputNum03 = getVelueOfTag('input03');
	var inputNum04 = getVelueOfTag('input04');
	var inputNum05 = getVelueOfTag('input05');
	var inputNum06 = getVelueOfTag('input06');

	var x = Number(inputNum01) + Number(inputNum02) + Number(inputNum03) + Number(inputNum04) + Number(inputNum05) + Number(inputNum06) / 6;

	printResult('output',x);
		
}