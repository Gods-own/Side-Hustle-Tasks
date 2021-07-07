let buttons = document.querySelectorAll('.buttons');
let text =document.getElementById('count');
let count = 0;

buttons.forEach(function(button){
    button.addEventListener('click', function (){
    	if(button.classList.contains("lower")) {
    		if (count > 0) {
    			count--;
    		}
    	} else if(button.classList.contains("add")) {
    		if (count < 50) {
    			count++;
    		}
    	}
        text.textContent = count;
    })
})