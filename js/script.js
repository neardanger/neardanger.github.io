  $(document).ready(function(){
    
    $('.scrollspy').scrollSpy();

      $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
        
  });
  




 function tripledouble(num1,num2){
    	for(var i=0;i<10;i++){
      
      triple = new RegExp (i + "{2}")
      double = new RegExp (i + "{3}")
      
      if(triple.test(num1) && double.test(num2)){
          return 1
      	} else {

        return 0
        }
      }
    }