<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  
  	$('#TrueOrFalse').on("tap",function(){
    	var trueFalse = random();
		alert(trueFalse);
		
 	});
});

function random() { 
 return !!Math.round(Math.random()); 
}