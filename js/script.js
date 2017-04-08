  $(document).ready(function(){
    
    $('.scrollspy').scrollSpy();

      $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

  var url = 'https://stevens-looming-thoughts.ghost.io/'
  $.get(ghost.url.api('posts', {limit: 3})).done(function (data){
  console.log('posts', data.posts);
}).fail(function (err){
  console.log(err);
});
        
  });

 