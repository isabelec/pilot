function setFirstEmptyFieldFocus(form) {
	if(form.elements[0] != null) {
		var i;
		var max = form.length;
		for( i = 0; i < max; i++ ) {
			var element = form.elements[i];
			if( !element.value &&
				element.type != "hidden" &&
				(element.type == "text" || element.type == "select-one" || element.type == "textarea") &&
				!element.disabled &&
				!element.readOnly &&
				element.offsetHeight != 0) {
				element.focus();
				break;
			}
		}
	}
}
function JumpField(form) {
	var i;
	var max = form.length;
	for (var i = 0; i < max; i++) {
		var element = form.elements[i]
		if (!element.value &&
			element.type[(i+1)] != "hidden" &&
			(element.type[(i+1)] == "text") &&
			!element.disabled[(i+1)] &&
			!element.readOnly[(i+1)] &&
			element.offsetHeight != 0) {
			element.focus(i+1);
			break;
		}
	}
}

/*
function JumpField(form) {
    if (form.value.length == form.maxLength) {
        for (var i = 0; i < form.element.length; i++) {
            if (form.element[i] == form &&
                form.element[(i + 1)] &&
                form.element[(i + 1)].type == "hidden") {
                form.element[(i + 1)].focus();
                break;

            }
        }
    }


function exibeValor(nomeCampo, lenCampo, controle) {
	if (nomeCampo.value.length == lenCampo){	
		var i;
		for (i=0; i<document.forms[0].elements.length; i++){
			if (document.forms[0].elements[i].name == nomeCampo.name){
				while ((i+1) < document.forms[0].elements.length){
					if (document.forms[0].elements[i+1].type != "hidden"){
						document.forms[0].elements[i+1].focus();
						break;
					}
					 i++;
				}
			checarTabulacao=false;
		break;
			}
		}
	}
}
*/