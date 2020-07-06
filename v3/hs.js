function fixleft() {
	document.getElementById("header_contain").style.left = '-330px';
	document.getElementById("button_sh").style.boxShadow = '0px 0px 10px rgba(20, 20, 20, 0.4)';
}	

function hideshow() {
	var mleft = document.getElementById("header_contain").style.left
	if (mleft == '-330px') {
		mleft = '0px';
		document.getElementById("button_sh").style.boxShadow = '';
		document.getElementById("shCover").style.display='block';
	} else {
		mleft = '-330px';
		document.getElementById("button_sh").style.boxShadow = '0px 0px 10px rgba(20, 20, 20, 0.4)';
		document.getElementById("shCover").style.display='none';
	}
	document.getElementById("header_contain").style.left = mleft;
}

function hideshowPc() {
	var mtop = document.getElementById("header_contain").style.marginTop
	if (mtop == '-156px') {
		mtop = '0px';
	} else {
		mtop = '-156px';
	}
	document.getElementById("header_contain").style.marginTop = mtop;
}
