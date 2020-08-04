/* factorial function */ 
function calculate(calc) { 
	
	if(calc.display.value.includes("!")) { 
		
		s = calc.display.value.length; 
		num = Number(calc.display.value.substring(0, s-1)); 
		f = 1; 
		
		for(i = 2; i <= num; i++) 
			f = f*i; 
		calc.display.value = f; 
	} 
	
	else if(calc.display.value.includes("%")) { 
		
		s = calc.display.value.length; 
		num = Number(calc.display.value.substring(0, s-1)); 
		calc.display.value = num/100; 
	} 

	else	 

		calc.display.value = eval(calc.display.value); 
} 

/* backspace function */ 
function backspace(calc) {											 
	s = calc.display.value.length; 
	calc.display.value = calc.display.value.substring(0, s-1); 
} 