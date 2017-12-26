function getVelueOfTag(tagIdName){
	return Number(document.getElementById(tagIdName).value);
}

function printResult(outputTagIdName,resultNum){
	document.getElementById(outputTagIdName).innerHTML = resultNum;	
}
