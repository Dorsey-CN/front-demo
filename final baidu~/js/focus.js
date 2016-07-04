window.onload =  function(){
	var text = document.getElementById('search_input');
	text.onfocus = function(){
		text.style.borderColor = '#3385FF';
	}
	text.onblur = function(){
		text.style.borderColor = '#B8B8B8';
	}
}