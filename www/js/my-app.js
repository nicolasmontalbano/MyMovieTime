  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var email, password, nombre, apellido, fechnac;


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
      { path: '/anime/', url: 'anime.html', },
      { path: '/aportes/', url: 'aportes.html', },
      { path: '/perfil/', url: 'perfil.html', },

    ]
    // ... other parameters
  });


var mainView = app.views.create('.view-main');

var db, refUsuarios, refTiposUsuarios;
 

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    /*VARIABLES DE BBDD*/

  db = firebase.firestore();
  refUsuarios = db.collection("USUARIOS");
  refTiposUsuarios= db.collection("TIPOS_USUARIOS");


$$("#iniciar").on("click", login);


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
    

})


// Option 4. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    var calendarDefault = app.calendar.create({
          inputEl: '#demo-calendar-default',
        });

    $$("#continuar1").on("click", guardarDatos1);


    $$("#continuar1").on("click", verif);

  

})

// Option 5. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="registrate2"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);


    $$("#continuar2").on("click", guardarDatos2);


})


// Option 3. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="peliculas"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    
/*
    var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

*/

var swipeToClosePopup = app.popup.create({
  el: '.popup-swipe-to-close',
  swipeToClose: true,
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
});



});



})



/*MIS FUNCIONES*/

function login(){

  var emailL = $$("#emailL").val();
  var passwordL = $$("#passwordL").val();

  var huboError = 0;

  firebase.auth().signInWithEmailAndPassword(emailL, passwordL)
    .catch(function(error){
      huboError = 1;
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);

    })

    .then(function(){


      if(huboError == 0){
        mainView.router.navigate("/peliculas/");
        console.log("Login correcto");

      }
      



    });




}


function guardarDatos1(){

  nombre = $$("#nombre").val();
  apellido = $$("#apellido").val();
  fechnac = $$(".fechnac").val();

  

}



function guardarDatos2(){

      email = $$("#email").val();
      password = $$("#contraseña").val();
      
      var data = {
        nombre: nombre,
        apellido: apellido,
        fechnac: fechnac,
        tipo: "usuario"
      }

      refUsuarios.doc(email).set(data);

}



function verif(){
  if(nombre == "" || nombre == null){
      alert("El nombre es obligatorio");
      mainView.router.navigate("/registrate/");
  }

  if(apellido == "" || apellido == null){
      alert("El apellido es obligatorio");
      mainView.router.navigate("/registrate/");
  }

  if(fechnac == "" || fechnac == null){
      alert("La fecha de nacimiento es obligatoria");
      mainView.router.navigate("/registrate/");
  }
}