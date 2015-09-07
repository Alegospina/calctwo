var box = document.getElementById('display');

function addToScreen(x){
	
	box.value += x;

	if(x == 'c'){
		box.value = '';
	};
};



