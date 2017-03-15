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

  function letterLarge(a){
     var input = a.split('')[0]
     var upper = a.toUpperCase()[0]
     console.log(input)
     console.log(upper)

     if(input == upper){
       console.log("This is an uppercase letter")
     } else {
       console.log("This is not an uppercase")
     }
  }

  letterLarge("string")
  


  var arrays = [1,2,3,4,5,6,7]

  function addUpArray(arrays){
    var answer = 0
    for(var i=0;i<arrays.length;i++){
      answer += arrays[i]
     
    }
     console.log(answer)
  }

  addUpArray(arrays)


  function findAreaCircle(a){

    var area = Math.PI * Math.pow(a)

    return area
  }

  findAreaCircle(10)