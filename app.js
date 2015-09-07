var box = document.getElementById('display');
var x;

//function to put a number onto the screen
//if box.value =1 then display 1 number on text box
// += to keep adding values, not replace the old ones.
function addToScreen(x){
	
	box.value += x;

//when user clicks 'C' the textbox should be reset
	if(x == 'c'){
		box.value = '';
	}
}


//This function evaluates the arguments given and stores them in box.value to show them on the input
function result(){
	x = box.value;
	x= eval(x);
	box.value= x;
}

/*This piece of code, removes the numbers i don´t want to calculate,
 that i maybe pressed by error. I declare a variable to store the number,
the variable len. to store the length of characters.
length-1 is a property that returns the length of a string or number of characters.
and i subtract 1 from number.length to delete one by one 
when i press backspace button. To prove this i make an alert of "len" and 
with a 365 number, it would show me that it´s length is 2
that`s way i can remove one by one with the button.
substring() helps me extract the characters from a string and returns the
new substring. Finally box.value stores newNumber  */

function backspace(){
	var number= box.value;
	var len= number.length-1;
	var newNumber= number.substring(0,len);
	box.value = newNumber;
}

// Here i use a pow function i made before in another exercise. Put to practice
//x = value that user picks, and y is the power, in this case, 3 cause i set that up
//on my html

function power(y){
	x = box.value;
	x= Math.pow(x,y);
	box.value= x;
}


