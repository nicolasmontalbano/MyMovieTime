  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var email = "", password = "";


var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/about/', url: 'about.html', },
      { path: '/registrate/', url: 'registrate.html', },
      { path: '/olvidemicontraseña/', url: 'olvidemicontraseña.html', },
      { path: '/olvidemicontraseña2/', url: 'olvidemicontraseña2.html', },
      { path: '/index/', url: 'index.html', },
      { path: '/registrate2/', url: 'registrate2.html', },
      { path: '/registrate3/', url: 'registrate3.html', },
      { path: '/peliculas/', url: 'peliculas.html', },
      { path: '/series/', url: 'series.html', },

    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})



// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    


/*

$$("#iniciar").on("click", function(){


  var email = $$("#emailLogin").val();
  var password = $$("#contraseñaLogin").val();
  var huboError = 0;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){

    huboError = 1;
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
    console.log(errorCode);
  })

  .then(function(){

    if(huboError == 0){
      mainView.router.navigate(/peliculas/);
    }

  });





});

*/




    







})


// Option 4. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    var calendarDefault = app.calendar.create({
          inputEl: '#demo-calendar-default',
        });

})

// Option 5. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate2"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    $$("#continuar2").on("click", function(){

  email = $$("#email").val();
  password = $$("#contraseña").val();
  console.log(email);
  console.log(contraseña);

});



})










// Option 6. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate3"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    var a = 0;

    
//LIMITAR LOS CHECKBOX



  $$('.tocaBoton').on('change', function() {

    var limit = 4;

    if($$('.tocaBoton:checked').length >= limit) {

        this.checked = false;
    }
  });


  $$('.tocaBoton1').on('change', function() {

    var limit = 3;

    if($$('.tocaBoton1:checked').length >= limit) {

        this.checked = false;
    }
  });








$$("#continuar3").on("click", function(){



  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});email-password.html



});



})








